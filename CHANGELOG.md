# CHANGELOG

## 0.12.1 - 2024-06-06

### Changed

- Added license information, customer portal and license purchasing to Account view.

## 0.12.0 - 2024-05-31

### Changed

- Added option to securely share reports.
- Added an Account view to enable authentication via VSCode authentication providers, necessary for secure report sharing.
- Added image preview when hovering over image in binary field.

### Fixed

- Mongo protocol was not correctly saved when editing a connection.
- Editing connections in groups would cause them to ungroup.

## 0.11.2 - 2024-05-28

### Changed

- Binary fields containing images now display thumbnails in the results.
- String fields exceeding 500 characters are trimmed, displaying the total size at the end.
- Tooltips added for all result columns with values longer than 200 characters/bytes.
- Options to export all results, a selection, or selected rows.
- Export results in various formats: CSV, Excel, SQL insert statements, JSON, XML, Markdown, or HTML.
- Copy a selection or selected rows as text, CSV, SQL insert statements, SQL In Clause, JSON, XML, Markdown, or HTML.
- Added the ability to duplicate rows when editing results.
- Context menu includes options to add, duplicate, and delete rows if the results are editable.

## 0.11.1 - 2024-05-25

### Fixed

- Marketplace listing colors.
- Number rounding on tab badges.

## 0.11.0 - 2024-05-24

### Changed

- SQLite support added.
- Added option to explore with a sample database.

### Fixed

- The results table now better aligns with the VS Code theme.
- Fixed an issue where editing stored procedures incorrectly indicated an error had occurred.
- MySQL did not correctly handle integers bigger than the javascript limit.

## 0.10.0 - 2024-05-16

### Changed

- MongoDB support added (table loading, data editing completed, work continues on executing arbitrary statements).
- Added data type to column headers.
- Trimmed large data in binary cells to show first 50 characters, and total size.
- Added output channel and logging of connection and tunnel events.

## 0.9.3 - 2024-05-10

### Changed

- Added a key binding (Ctrl/Cmd+d Ctrl/Cmd+c) to select/change connection of the current file.

### Fixed

- Improved the rendering performance for large result sets (1M+ rows).
- MySQL/Maria was showing undefined in the statusbar for schema.
- MySQL/Maria was not showing correct number of rows updated for insert, update and delete statements.
- Geometry and Geography data types in results caused the results not to show.
- Dates with timezones are now displayed with timezone indicators to reflect their true format in the database.

## 0.9.2 - 2024-05-08

### Changed

- Automatically generate entity relationship diagrams to visually map out your database structures. Simply right-click on the tables folder of a database and select the "Entity Relationship Diagram" option.

### Fixed

- Light themes were not showing the correct database icons for MariaDB in the connection picker.

## 0.9.1 - 2024-05-02

### Fixed

- Tables now always open with the maximum row limit configured in settings (100,000). Right-clicking on a table provides an option to open it with a different limit.
- SQL Server connections failed unless the user account had the sysadmin role assigned.

## 0.9.0 - 2024-05-01

### Changed

- Data within a table can now be edited, added, or deleted, with changes saved directly back to the database.

### Fixed

- Opening a table sometimes did not render the data.
- SQL Server displayed incorrect lengths for nvarchar and nchar datatype columns.

## 0.8.2 - 2024-04-25

### Changed

- Clicking on a table or view in the explorer now loads its data in a new tab.
- Added setting _dbcode.maxRowsToFetch_ to control the maximum number of rows fetched when opening a table.

## 0.8.1 - 2024-04-09

### Changed

- Added SSH Tunnels. Tunnels are automatically detected from ssh.config and can also be manually created.
- Introduced a table icon to the results tab; clicking on this icon will pin the tab for easy access.

### Fixed

- Postgres: Ensure columns in indexes are displayed in the correct order, even when they differ from the table order.

## 0.8.0 - 2024-03-29

### Changed

- MariaDB support added.

### Fixed

- MySQL connections required SSL and would not work without SSL.

## 0.7.0 - 2024-03-28

### Changed

- MySQL support added.
- Timescale support added.
- Yugabute support added.
- Renamed Primary Keys to Primary Key in the explorer.
- Hovering over tables and views in the editor reveals column and table/view comments.

### Fixed

- When running multiple statements simultaneously, column names were missing from all results except the first.
- Postgres failed to indicate when a primary column was utilized in a foreign key in the explorer.
- Confirmation dialogs previously didn't respond properly to users not making a choice and exiting via escape.

## 0.6.0 - 2024-03-15

### Changed

- CockroachDB support added.

## 0.5.2 - 2024-03-01

### Changed

- Reduced memory usage and initial startup time.

### Fixed

- Notebook incorrectly opening new editor tab when an SQL error occurred.
