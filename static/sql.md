# MySQL SQL Database

`CREATE DATABASE *databasename*;`

`DROP DATABASE *databasename*;`

```
CREATE TABLE *tablename* (
  *column1 datatype*,
  *column2 datatype*,
  *column3 datatype*
);
```

```
CREATE TABLE *tablename* AS
  SELECT *column1, column2,...*
  FROM *existingtablename*
  WHERE ...;
```

`DROP TABLE *tablename*;`

`TRUNCATE TABLE *tablename*;`

This deletes the data in the table but not the table itself.

```
ALTER TABLE *tablename*
  ADD *columnname datatype*;
```

```
ALTER TABLE *tablename*
  DROP COLUMN *columnname*;
```

```
ALTER TABLE *tablename*
  RENAME COLUMN *oldname* TO *newname*;
```

```
ALTER TABLE *tablename*
  MODIFY COLUMN *columnname* *datatype*;
```

SQL **constraints** are used to specify rules for data in a table.

```
CREATE TABLE *tablename* (
  *column1 datatype constraint*,
  *column2 datatype constraint*,
  ...
);
```
Constraints are used to limit the type of data that can go into a table, to unsure accuracy and integrity. If a data action violates a constraint, it will be aborted. Constraints can be column-level or table-level.
- `NOT NULL`: a column cannot have a null value
- `UNIQUE`: all values in a column are different
- `PRIMARY KEY`: `NOT NULL` and `UNIQUE`. You can only have one per table
- `FOREIGN KEY`: prevents actions that would destroy links between tables
- `CHECK`: ensures that the values in a column satisfy a certain condition
- `DEFAULT`: sets a default value for a column if no other one is defined
- `CREATE INDEX`: used to create and retrieve data from the database very quickly

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  UNIQUE (*column1*)
);
```

To name a `UNIQUE` constraint and define it on multiple columns:
```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  CONSTRAINT *constraintname* UNIQUE (*column1*, *column2*)
);
```

```
ALTER TABLE *tablename*
  ADD UNIQUE (*columnname*);
```

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  PRIMARY KEY (*column1*)
); 
```

To name a `PRIMARY KEY` constraint or to allow the VALUE of the primary key to be made up of two columns:
```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype* NOT NULL,
  ...,
  CONSTRAINT *constraintname* PRIMARY KEY (*column1, column2*)
);
```

```
ALTER TABLE *tablename*
  ADD PRIMARY KEY (*columnname*);
```

```
ALTER TABLE *tablename*
  DROP PRIMARY KEY;
```

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  FOREIGN KEY (*column2*) REFERENCES *table2name(table2column)*
);
```

```
ALTER TABLE *tablename*
  ADD FOREIGN KEY (*columnname*) REFERENCES *othertable(columnname)*;
```

```
CREATE TABLE *tablename* (
  *column1 datatype*,
  *column2* int,
  CHECK (*column2*>=18)
);
```

```
ALTER TABLE *tablename*
  ADD CHECK (*column2*>=18);
```

```
CREATE TABLE *tablename* (
    *column1 datatype* NOT NULL,
    *column2* varchar(255) DEFAULT 'String Literal'
); 
```

```
CREATE INDEX *indexname*
  ON *tablename(column1, column2, ...);
```

```
CREATE UNIQUE INDEX *indexname*
  ON *tablename(column1, column2, ...);
```

```
ALTER TABLE *tablename*
  DROP INDEX indexname*; 
```

The `AUTO INCREMENT` co# MySQL SQL Database

`CREATE DATABASE *databasename*;`

`DROP DATABASE *databasename*;`

```
CREATE TABLE *tablename* (
  *column1 datatype*,
  *column2 datatype*,
  *column3 datatype*
);
```

```
CREATE TABLE *tablename* AS
  SELECT *column1, column2,...*
  FROM *existingtablename*
  WHERE ...;
```

`DROP TABLE *tablename*;`

`TRUNCATE TABLE *tablename*;`

This deletes the data in the table but not the table itself.

```
ALTER TABLE *tablename*
  ADD *columnname datatype*;
```

```
ALTER TABLE *tablename*
  DROP COLUMN *columnname*;
```

```
ALTER TABLE *tablename*
  RENAME COLUMN *oldname* TO *newname*;
```

```
ALTER TABLE *tablename*
  MODIFY COLUMN *columnname* *datatype*;
```

SQL **constraints** are used to specify rules for data in a table.

```
CREATE TABLE *tablename* (
  *column1 datatype constraint*,
  *column2 datatype constraint*,
  ...
);
```
Constraints are used to limit the type of data that can go into a table, to unsure accuracy and integrity. If a data action violates a constraint, it will be aborted. Constraints can be column-level or table-level.
- `NOT NULL`: a column cannot have a null value
- `UNIQUE`: all values in a column are different
- `PRIMARY KEY`: `NOT NULL` and `UNIQUE`. You can only have one per table
- `FOREIGN KEY`: prevents actions that would destroy links between tables
- `CHECK`: ensures that the values in a column satisfy a certain condition
- `DEFAULT`: sets a default value for a column if no other one is defined
- `CREATE INDEX`: used to create and retrieve data from the database very quickly

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  UNIQUE (*column1*)
);
```

To name a `UNIQUE` constraint and define it on multiple columns:
```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  CONSTRAINT *constraintname* UNIQUE (*column1*, *column2*)
);
```

```
ALTER TABLE *tablename*
  ADD UNIQUE (*columnname*);
```

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  PRIMARY KEY (*column1*)
); 
```

To name a `PRIMARY KEY` constraint or to allow the VALUE of the primary key to be made up of two columns:
```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype* NOT NULL,
  ...,
  CONSTRAINT *constraintname* PRIMARY KEY (*column1, column2*)
);
```

```
ALTER TABLE *tablename*
  ADD PRIMARY KEY (*columnname*);
```

```
ALTER TABLE *tablename*
  DROP PRIMARY KEY;
```

```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  FOREIGN KEY (*column2*) REFERENCES *table2name(table2column)*
);
```

```
ALTER TABLE *tablename*
  ADD FOREIGN KEY (*columnname*) REFERENCES *othertable(columnname)*;
```

```
CREATE TABLE *tablename* (
  *column1 datatype*,
  *column2* int,
  CHECK (*column2*>=18)
);
```

```
ALTER TABLE *tablename*
  ADD CHECK (*column2*>=18);
```

```
CREATE TABLE *tablename* (
    *column1 datatype* NOT NULL,
    *column2* varchar(255) DEFAULT 'String Literal'
); 
```

```
CREATE INDEX *indexname*
  ON *tablename(column1, column2, ...);
```

```
CREATE UNIQUE INDEX *indexname*
  ON *tablename(column1, column2, ...);
```

```
ALTER TABLE *tablename*
  DROP INDEX indexname*; 
```

The `AUTO INCREMENT` constraint allows a unique number to be generated automatically when a new record is inserted into a table:
```
CREATE TABLE *tablename* (
  *column1* int NOT NULL AUTO INCREMENT,
  ...,
  PRIMARY KEY (*column1*)
);
```

For `AUTO INCREMENT` to start with a value other than `0`, use:
```
ALTER TABLE *tablename* AUTO_INCREMENT=100;
```

MySQL uses the following formats for dates and datetimes:
- `DATE`: YYYY-MM-DD
- `DATETIME`: YYYY-MM-DD HH-MI-SS
- `TIMESTAMP`: YYYY-MM-DD HH-MI-SS
- `YEAR`: YYYY or YY

A **view** is a virtual table based on the result-set of a SQL statement, containing rows and columns, where the fields come from one or more real tables in a database. You can add statements and functions to the view and present the data as if it were coming from a single table.

