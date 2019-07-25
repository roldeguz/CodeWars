/*
Challenge: SQL Basics - Monsters using CASE
25-Jul-2019
*/

SELECT      t.id, t.heads, b.legs, t.arms, b.tails,
            CASE
              WHEN t.heads > t.arms OR b.tails > b.legs
                THEN 'BEAST'
                ELSE 'WEIRDO'
            END AS species
FROM        top_half t
INNER JOIN  bottom_half b ON b.id = t.id
ORDER BY    species
