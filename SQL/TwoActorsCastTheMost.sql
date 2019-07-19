WITH pairings AS (
  SELECT   fa1.actor_id AS a1, fa2.actor_id AS a2
  FROM     film_actor fa1 
  JOIN     film_actor fa2 ON fa1.film_id = fa2.film_id
  WHERE    fa1.actor_id < fa2.actor_id
), top_pairing AS (
  SELECT   a1, a2, COUNT(*) 
  FROM     pairings
  GROUP BY a1, a2
  ORDER BY COUNT(*) DESC
  LIMIT 1
)

SELECT     actor1.first_name || ' ' || actor1.last_name AS first_actor, 
           actor2.first_name || ' ' || actor2.last_name AS second_actor, 
           f.title 
FROM (
  SELECT   tp.a1, tp.a2, fa.film_id
  FROM     film_actor fa, top_pairing tp
  WHERE    fa.actor_id = tp.a1
  INTERSECT
  SELECT   tp.a1, tp.a2, fa.film_id
  FROM     film_actor fa, top_pairing tp
  WHERE    fa.actor_id = tp.a2
) t
JOIN       actor actor1 ON actor1.actor_id = t.a1
JOIN       actor actor2 ON actor2.actor_id = t.a2
JOIN       film f ON f.film_id = t.film_id  
ORDER BY   f.title ASC 
