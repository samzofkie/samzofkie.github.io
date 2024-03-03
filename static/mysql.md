# MySQL SQL Database

Databases
```
CREATE DATABASE *databasename*;
```

```
DROP DATABASE *databasename*;
```

Tables
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

```
DROP TABLE *tablename*;
```

To delete the data in a table, but not the table itself:
```
TRUNCATE TABLE *tablename*;
```

Modifying a table's columns:
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

## Constraints
SQL **constraints** are used to specify rules for data in a table.

```
CREATE TABLE *tablename* (
  *column1 datatype constraint*,
  *column2 datatype constraint*,
  ...
);
```
Constraints are used to limit the type of data that can go into a table, to unsure accuracy and integrity. If a data action violates a constraint, it will be aborted. Constraints can be column-level or table-level.

`NOT NULL`: a table cannot have a null value:
```
CREATE TABLE *tablename* (
  *column1 datatype* NOT NULL,
  *column2 datatype*,
  ...,
  UNIQUE (*column1*)
);
```

`UNIQUE`: all values in a column are different. To name a `UNIQUE` constraint and define it on multiple columns:
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

`PRIMARY KEY`: `NOT NULL` and `UNIQUE`. You can only have one per table:
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

`FOREIGN KEY`: prevents actions that would destroy links between tables:
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

`CHECK`: ensures that the values in a column satisfy a certain condition:
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

`DEFAULT`: sets a default value for a column if no other one is defined:
```
CREATE TABLE *tablename* (
    *column1 datatype* NOT NULL,
    *column2* varchar(255) DEFAULT 'String Literal'
); 
```

`CREATE INDEX`: used to create and retrieve data from the database very quickly:
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
```
CREATE VIEW *viewname* AS
  SELECT *column1,...*
  FROM *tablename*
  WHERE *condition*;
```

```
SELECT * FROM *viewname*
```

```
CREATE OR REPLACE VIEW *viewname* AS
  SELECT *column1, column2,...*
  FROM *tablename*
  WHERE *condition*;
```

```
DROP VIEW *viewname*;
```

## Data Types
In SQL there are three main data types: string, numeric, and date and time.

| String Data Types  | |
| --- | --- |
| `CHAR(*size*)` | Fixed length string-- `*size*` specifies string length |
| `VARCHAR(*size*)` | Variable length string-- `*size*` specifies maximum length |
| `BINARY(*size*)` | Like `CHAR` but stores binary byte strings |
| `VARBINARY(*size*)` | Like `VARCHAR` but stores binary byte strings |
| `TINYBLOB` | For Binary Large OBjects. Maximum 255 bytes |
| `TINY TEXT` | String with a maximum length of 255 characters |
| `TEXT(*size*)` | String with a maximum length of 2^16 bytes |
| `BLOB(*size*)` | BLOB with a maximum length of 2^16 bytes |
| `MEDIUMTEXT(*size*)` | String with a maximum length of 2^24 bytes |
| `MEDIUMBLOB(*size*)` | BLOB with a maximum length of 2^24 bytes |
| `LONGTEXT(*size*)` | String with a maximum length of 2^32 bytes |
| `LONGBLOB(*size*)` | BLOB with a maximum length of 2^32 bytes |
| `ENUM(*val1, val2, val3, ...*)` | A string object with one value chosen from a list of values. 2^16 possible values in an `ENUM` |
| `SET(*val1, val2, val3, ...*)` | A string object that can have 0 or more values, chosen from a set of 64 possible values |

| Numeric Data Types | |
| --- | --- |
| `BIT(*size*)` | `size` is number of bits, up to 64. Default value of `*size*` is 1 |
| `TINYINT(*size*)` | An integer smaller than 2^8, signed or unsigned (unsigned -2^7 to 2^7) |
| `BOOL` or `BOOLEAN` | Zero is false, non-zero is true |
| `SMALLINT(*size*)` | An integer fitting in 2^16 bytes, signed or unsigned. `*size*` specifies maximum display width |
| `MEDIUMINT(*size*)` | An integer fitting in 2^24 bytes, signed or unsigned. `*size*` specifies maximum display width |
| `INT(*size*)` or `INTEGER(*size*)` | An integer fitting in 2^32 bytes, signed or unsigned. `*size*` specifies maximum display width |
| `BIGINT(*size*)` | An integer fitting in 2^64 bytes signed or unsigned. `*size*` specifies maximum display width |
| `FLOAT(*size, d*)` | A float with `*size*` digits and `*d*` digits after the decimal point. |
| `DOUBLE(*size, d*)` | A "normal-size" float with `*size*` digits and `*d*` digits after the decimal point. |
| `FLOAT(*p*)` | A float that becomes a double if 53 > `*p*` > 25 |

Date and date time data types are detailed above.

