atop -b 20:06:21 -e 20:09:17 -r ${atop_log} -P CPU,MEM > /log/raw.txt
sed -E -e '/^(SEP|RESET)$/d' /log/raw.txt > /log/logs.dsv