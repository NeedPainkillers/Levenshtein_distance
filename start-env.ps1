docker-compose --compatibility -p delete up -d

cd . > .\log\stats.csv
while (1){
    $time = (Get-Date).ToUniversalTime().ToString("dd-MM-yyyy HH:mm:ss")
    $stats = (docker stats  --format "{{.CPUPerc}},{{.MemUsage}}" --no-stream delete_server_1).replace("%", "").replace(" / ", ",").replace("MiB", "").replace("GiB", "")
    echo "$time,$stats" >> .\log\stats.csv 
    }