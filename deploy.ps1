$files = Get-ChildItem -Path . -Recurse -File | Where-Object { 
  $_.FullName -notmatch '\\node_modules\\' -and 
  $_.FullName -notmatch '\\.next\\' -and 
  $_.FullName -notmatch '\\.git\\' -and
  $_.FullName -notmatch 'dev\.db' -and
  $_.FullName -notmatch '\.txt' -and
  $_.FullName -notmatch '\.ps1'
}

$payload = @{
    files = @{}
}

foreach ($file in $files) {
    $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        
        # Only add valid text files
        if ($null -ne $content) {
            $payload.files[$relativePath] = @{
                content = $content
            }
        }
    } catch {
        # Ignore binary files
    }
}

$jsonBody = $payload | ConvertTo-Json -Depth 10 -Compress

try {
    $response = Invoke-RestMethod -Uri "https://codesandbox.io/api/v1/sandboxes/define?json=1" -Method Post -Body $jsonBody -ContentType "application/json"
    $response.sandbox_id | Out-File -FilePath "sandbox_id.txt" -Encoding UTF8
    Write-Output "SUCCESS: $($response.sandbox_id)"
} catch {
    Write-Error $_
}
