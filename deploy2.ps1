$items = @("src", "prisma", "public", "package.json", "next.config.ts", "tsconfig.json", "next-env.d.ts")
$files = @()

foreach ($item in $items) {
    if (Test-Path $item) {
        if ((Get-Item $item) -is [System.IO.DirectoryInfo]) {
            $files += Get-ChildItem -Path $item -Recurse -File
        } else {
            $files += Get-Item $item
        }
    }
}

$payload = @{
    files = @{}
}

foreach ($file in $files) {
    # Skip sqlite db
    if ($file.FullName -match 'dev\.db$') { continue }
    
    $relativePath = $file.FullName.Substring((Get-Location).Path.Length + 1).Replace('\', '/')
    try {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        if ($null -ne $content) {
            $payload.files[$relativePath] = @{
                content = $content
            }
        }
    } catch {}
}

$jsonBody = $payload | ConvertTo-Json -Depth 10 -Compress

try {
    $response = Invoke-RestMethod -Uri "https://codesandbox.io/api/v1/sandboxes/define?json=1" -Method Post -Body $jsonBody -ContentType "application/json"
    Write-Output "SANDBOX_ID=$($response.sandbox_id)" > sandbox_id.txt
} catch {
    Write-Output "ERROR: $_" > sandbox_id.txt
}
