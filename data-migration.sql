CREATE DATABASE acme;

CREATE SCHEMA app;

CREATE TABLE app.person (
    id serial primary key,
    first_name text,
    last_name text,
    created_at timestamptz not null default now()
);

CREATE FUNCTION app.person_name(person app.person) RETURNS text AS $$
    select person.first_name || ' ' || person.last_name
$$ LANGUAGE sql STABLE;