SET datestyle = dmy;
COPY mon(date, cpu_percentage, mem_used, mem_limit) 
FROM '/log/stats.csv'
DELIMITER ','
ENCODING 'UTF-8';