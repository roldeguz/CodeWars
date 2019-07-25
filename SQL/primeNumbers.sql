/*
Challenge: SELECT prime numbers
25-Jul-2019
*/

WITH series AS (
  SELECT     *
  FROM       generate_series(2, 100) i
);

SELECT   s1.i as prime
FROM     series s1
WHERE NOT EXISTS (
  SELECT   1
  FROM     series s2
  WHERE    s1.i > s2.i AND s1.i % s2.i = 0
)
