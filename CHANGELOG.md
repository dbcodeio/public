# CHANGELOG

## 1.2.7 - 2024-09-25

### Changed

- Added a Help + Suggestions panel to the sidebar.

### Fixed

- MySQL 5.7 introspection error when user does not have create permissions on the database.
- Redshift was not showing columns in late binding views.
- If introspection fails, the connection will still be allowed to be opened.

## 1.2.5 - 2024-09-19

### Changed

- Added support for DigitalOcean cloud provider.
- Added option to open a GitHub issue when connection and introspection errors occur.

### Fixed

- Added a check to ensure duplicate connection IDs are not present in settings.json if edited manually.

## 1.2.4 - 2024-09-17

### Changed

- Charts now appear beside the results, not on top of them.

### Fixed

- Inline code completions via Copilot now work correctly.
- Download chart button now works correctly.
- Redshift was not showing all columns in a view in the DB Explorer.

## 1.2.3 - 2024-09-15

### Changed

- Relationships now support multi key relationships, and the expanded relationship icon will be highlighted and stay visible when the relationship is selected.
- Added a connection option to disable public key retrieval for MySQL and MariaDB, which is enabled by default.
- If a connection has a color, it will be used for the highlight color (e.g., primary keys, active icons) instead of the default purple.

## 1.2.2 - 2024-09-13

### Changed

- Data relationships are now navigated using an icon in the cell when mousing over, instead of the expand icon in the first column.

### Fixed

- Postgres (and derivatives like Redshift) would show duplicate tables in the DB Explorer if the table name was in multiple schemas.

## 1.2.1 - 2024-09-11

### Changed

- Published to the Open VSIX marketplace.

### Fixed

- Authentication was not working in the Cursor version of VS Code.

## 1.2.0 - 2024-09-10

### Changed

- Redshift support added.
- Selecting a database when creating a connection is now optional for supported types.

### Fixed

- Server versions are now shown in the DB Explorer when connected, an expanded version is shown in the tooltip.

## 1.1.6 - 2024-09-04

### Fixed

- Token counts for AI completions are now correctly calculated.
- Mongo driver does not show the new SQL file/notebook options in the DB Explorer.

## 1.1.5 - 2024-09-02

### Changed

- Added schema aware AI code completions for the SQL language, using GitHub Copilot if available or llama-3.1.

## 1.1.3 - 2024-08-29

### Fixed

- MySQL and MariaDB no longer require root user privileges to connect.
- MariaDB 11.2.5 bug with introspection fixed.

## 1.1.2 - 2024-08-15

### Changed

- Updated README.

## 1.1.1 - 2024-08-13

### Changed

- Added DDEV as a zero config source.

## 1.1.0 - 2024-08-07

### Changed

- Added Cloudflare as a cloud provider.
- Added support for Cloudflare D1.

### Fixed

- Previous result tabs sometimes failed to display data when revisited.
- SQLite/libSQL would not display the primary key correctly if it was not a sequence.

## 1.0.0 - 2024-08-07

### Changed

- Subscription required for some features, 14 day trial created upon signing in. See our [Pricing](https://dbcode.io/pricing) page for details.

## 0.17.1 - 2024-08-01

### Fixed

- Icon added for Notebooks.
- SQLite/libSQL now shows row counts for tables in the explorer.

## 0.17.0 - 2024-07-30

### Changed

- @dbcode has been added as a chat participant if you have the Github Copilot extension installed. 
- You can right-click on a supported database file (.db) and choose to open it in DBCode.
- Autocomplete now works in notebook cells.

### Fixed

- The data grid now uses the editor font for cell values.
- Data grid column widths are now limited to prevent excessive length when the table has many columns.
- Data grid charts now correctly display numeric values for series data.

## 0.16.2 - 2024-07-25

### Changed

- Added support for removing a group of connections from the explorer, as well as removing a single connection from a group in the explorer.
- Switched to a universal build. Binary packages will be downloaded as needed instead of being included in the extension.
- Added cloud providers to the connection picker.

### Fixed

- Postgres databases in some cases were not displaying results.

## 0.16.1 - 2024-07-22

### Changed

- Updated SQLite driver.
- Results can now render hundreds of megabytes of data.

### Fixed

- MySQL/MairaDB connections were not using the connection timeout setting.
- MySQL/MariaDB connections would not show the correct error message when the connection failed.
- MySQL/MariaDB connections show better SQL errors.

## 0.16.0 - 2024-07-17

### Changed

- Added Azure cloud provider, supports Azure SQL, Azure Postgres and Azure MySQL via Microsoft Entra ID authentication.
- Added support for Microsoft Entra authentication to Azure SQL connections.

## 0.15.1 - 2024-07-15

### Changed

- Added support for MySQL 5.7.
- Added a filter option to connections to filter schemas and databases in the explorer.

## 0.15.0 - 2024-07-12

### Changed

- Relationships: Browse foreign key relationships in data to view related data in other tables.
- Edit data and access relationships for your select queries.
- Aiven cloud provider added.

### Fixed

- PostgreSQL showed duplicate columns in the foreign key when a foreign key had multiple columns.
- SQLite did not show columns in the explorer whose names matched the table name.

## 0.14.1 - 2024-07-05

### Fixed

- Codelens now indicates whether you are executing a selection or the entire document.
- libSQL now supports encrypted local files.

## 0.14.0 - 2024-07-03

### Changed

- Cloud providers support added. ([more details](https://dbcode.io/docs/cloud-providers))

## 0.13.0 - 2024-06-29

### Changed

- Added libSQL support (local file and Turso URL).

### Fixed

- Changes to an open connection that affect the connection (e.g., host, port, username, etc) will now prompt you to close and reopen the connection.
- Color changes will be removed when the window loses focus and reapplied when the window regains focus to prevent them from appearing in other VS Code windows.

## 0.12.6 - 2024-06-27

### Changed

- Assign a color to a connection and specify which sections: the editor tab, status bar, and command center should display that color when active.

### Fixed

- Codelens does not get hidden above the visible area.
- A race condition restoring previously open connections caused multiple connections to the same database to open.

## 0.12.5 - 2024-06-15

### Changed

- Open a table cells content in the VS Code editor.
- Connection tree view items are now cached for faster initial loading and refreshed in the background.
- The connection tree view will reopen previously expanded items on VS Code restart.
- Files assigned to a connection are now restored to that connection upon reopening VS Code.

### Fixed

- Consistency with delete confirmations between connections, tunnels, history.

## 0.12.4 - 2024-06-11

### Fixed

- Fixed domain authentication bug in SQL Server, new option to be specific about authentication type added to connection.
- Fixed PostgreSQL not using right port when first adding a connection.

## 0.12.3 - 2024-06-11

### Changed

- Added an option to import from a connection string when adding or editing connections.
- Added zero-config functionality to automatically detect connections in .env and web.config files. ([more details](https://dbcode.io/docs/connections/zero-config))
- Added compass (discovered) icons to the tunnels and connections that are automatically discovered.

### Fixed

- Fixed an issue where SQLite connections would not store the file path when edited in some cases.
- PostgreSQL is the default connection type when adding a new connection.

## 0.12.2 - 2024-06-07

### Fixed

- Updated Microsoft Authentication to use common tenant.

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
