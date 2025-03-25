# CHANGELOG

## 1.9.4 - 2025-03-25

### Changed

- Advanced Filter: Tables now have an advanced filter icon in the toolbar, which exposes a SQL "like" interface for filtering.
- Column Filters: now support multiple conditions.
- Column Filters: now supports is blank/null. #388
- Column Filters: now has specific apply/reset buttons.

### Fixed

- SQL: Escape all SQL identifiers to cover any keywords, rather than just non alpha strings. #385
- Azure: Store the last successful tenant ID with the connection. #327
- Azure: Fixed token expiry issues. #324
- Supabase: Fixed cloud provider to use session pooler rather than direct connection. #386

## 1.9.3 - 2025-03-24

### Fixed

- SQL Server: Table creation/editing was not picking up length on fields with max value support. #377
- Zero Config: When a sqlite connection was configured in .env and in the root folder it errored. #380
- Postgres: Prepend the schema to the search path, rather than replace it. #384

## 1.9.2 - 2025-03-16

### Changed

- MCP: Added MCP Server. #374
- Copilot: Added Copilot tools. #373

### Fixed

- Cloudflare: Added support for using Account API Tokens.
- Copilot Chat: Removed disambiguation. #373
- Copilot inline chat: Fixed copy prompting to provide schema, disabled it from asking multiple times. #373

## 1.9.0 - 2025-03-13

### Changed

- Connections: Added more color options. #245
- Connections: Added read only option to connections where supported by the driver. #183
- Connections: Added role option to enable permissions for statement execution. #183
- SingleStore: Added support for SingleStore. #369
- Settings: New settings to configure connection role permissions.
- Settings: Removed warn before pre apply on procedure editing (replaced with role support).
- CSV: Now supports specifying the delimiter, quote, escape characters and header row. #367

## 1.8.4 - 2025-03-13

### Changed

- Import: First release, functions, some rough UX/UI edges. #53

## 1.8.3 - 2025-03-11

### Changed

- Setting: Result font size. #356
- Keybindings: cmd+enter and windows+enter for pc are now the command bindings for executing a sql statement in the editor, or applying changes to objects like triggers, procs, etc. #304
- Excel and CSV Support: Warning about DML statements (update, insert, delete) not being applied to the file system for now.

### Fixed

- Editor: Insert statement values were not being highlighted correctly when in parenthesis. #352
- Keybindings: The keybindings for executing a sql statement in the editor, or applying changes to objects like triggers, procs, etc.
- Keybindings: The ctrl+d keybinding was breaking the terminal ctrl+d keybinding.
- Zero Config: Don't discover file formats (Excel, CSV, etc) on the initial load. #359

## 1.8.2 - 2025-03-09

### Changed

- Editor: If the cursor is in a insert statement column, the corresponding value will be highlighted. #352
- SQLite/D1/LibSQL: Moved to new introspection model, added triggers support. #355
- Results: Open in editor icon only shows when editing a cell, option to open editor added to the context menu when right clicking on a cell. #357

### Fixed

- Hover: Bug in JSON to MD library. #350
- DuckDB: Added struct and map types. #351
- MariaDB: If MySQL is selected but database is Maria, will switch to MariaDB silently. #354
- Inline completion: Fixed cross database not suggesting columns in select. #157 

## 1.8.1 - 2025-03-06

### Changed

- Excel and CSV Support: Support for opening .xlsx and .csv files as databases to query (preview). #263

### Fixed

- SQLite: Fixed SQL generation when only an offset was used, without a limit. #335
- Redis: Username defaults to default as the default.
- HTTP: Added support for the vscode proxy setting to network requests, as well as the https_proxy enviroment variable. #326


## 1.8.0 - 2025-03-05

### Changed

- Inline Completion: Will now suggest databases when appropriate, and supports dotted notation for databases, eg database.schema.table. #157 
- When VSCode is restarted only connections for any open files will be re created. #328
- Explorer: Support multiple selections for truncating and dropping tables.. be careful! #344
- Explorer: Added refresh to the database context menu. #343
- Explorer: Added option to copy item name to the clipboard.
- StarRocks: Added support for StarRocks. #340
- Doris: Added support for Apache Doris. #199 #267
- Setting: Added setting for pagination size to control rows per page (auto or 10, 20, 50, 100, 200, 500). #342

### Fixed

- SQL Server: Added system views to introspection. #336
- DuckDB: Fixed array fields reporting unknown type. #346

## 1.7.4 - 2025-03-03

### Changed

- Hover: Layout has changed, now includes a icon to open the item where applicable (eg, table, view, materialized view, procedure, function).

### Fixed

- Hover: Now works with dotted and escaped identifiers. #333
- Hover: Now works with materialized views.
- Go to Definition: Works with dotted and escaped identifiers. #333

## 1.7.3 - 2025-02-28

### Changed

- Added a go to definition link on tables, views and materialized Views (ctrl/cmd + click or f12 when hovering a table, view or materialized view in a query). #333
- Connections: Added common default socket paths, and changed it to a text input since VS Code prevents selecting locked files.

### Fixed

- Editing a value to the default did not correctly save the change. #331 #299
- Postgres: Adding vector datatype. #330
- Chart: Tooltips were not showing on the chart, right clicking caused the chart to disappear. #30

## 1.7.1 - 2025-02-27

### Changed

- Entity Relationship Diagrams will now only show the filtered tables if a filter is applied in the explorer. #322

### Fixed

- SQL Server: Fix introspection issue on servers with case sensitive collation. #318
- Export: SQL Insert statements now include the schema if applicable. #321
- MySQL/MariaDB: Fixed issue with editing triggers. 
- MySQL/MariaDB: Fixed issue with socket connections.
- Postgres: Fixed issue with current_schema returning a schema that does not exist.

## 1.7.0 - 2025-02-24

### Changed

- Redis: Preview support for Redis, browsing works, not much else at the moment. #39
- Added item to the header context menu of results to clear one or all column filters. #315

### Fixed

- UUID icon rendering issue when it was a primary key in the ERD.
- A single column will start no wider than 1/3 rendering space for the results. #314
- Disconnecting a connection was not correctly showing it disconnected in the explorer. #222

## 1.6.22 - 2025-02-20

### Fixed

- MariaDB: Added support for 10.0 #306
- MongoDB: Sorted collections and views in the schema, fixed queries that return single values. #276

## 1.6.21 - 2025-02-20

### Fixed

- AI: Added comment to the context provided to the AI model.
- Query Parameters: No longer trigger for % unless followed by ( or { #309
- SQL Server: Fixed issue with default cschema returning null. #291

## 1.6.20 - 2025-02-18

### Fixed

- MySQL/MariaDB: Added binary data type. #305
- Added debug command to output additional debugging.
- MongoDB: Improved connection performance, filtering, data type detection. #276


## 1.6.19 - 2025-02-17

### Fixed

- Prevent saving a connection in a workspace, when one is not open. #301
- MongoDB: Fixed issue with refreshing the results.

## 1.6.18 - 2025-02-16

### Fixed

- Cassandra: Added tunnel option to the config.
- Changed to a filestore for introspection cache, and mapped formats to a version. #291
- SQL Server: Show if a database is offline. #296

## 1.6.17 - 2025-02-14

### Fixed

- DuckDB: Date filters in results not working correctly. #290
- Notebooks: Copied cells broke the notebook render. #293

## 1.6.16 - 2025-02-12

### Changed

- Added auto refresh option to results.
- Added option to script data changes, rather than applying them.

### Fixed

- MSSQL: Fixed issue with introspection when user only had read only access. #280
- Notebook: Prevent keyboard events from propagating to the notebook. #281


## 1.6.15 - 2025-02-11

### Fixed

- MSSQL: Fixed issue with introspection when user only had read only access. #280
- DuckDB: Added support for enums.
- Notebook: Prevent keyboard events from propagating to the notebook. #281

## 1.6.14 - 2025-02-11

### Changed

- Improved refresh feature and tab naming for SQL statements, including better handling of multiple result sets. #197
- Notebooks: Query parameters values are now shared across cells, and persisted on save. #262
- DuckDB: File search path set to the folder of the database file, to enable relative paths in load commands.
- DuckDB: Changed to new DuckDB supported driver, upgraded to new introspection model.

### Fixed

- Cassandra: Added support for multiple statements in a single string.
- MongoDB: Don't require a port when connecting via mongodb+srv:// #276
- MongoDB: A new script file will contain example commands and link to the quick reference. #276
- Notebooks: Scrolling is now captured when scrolling the results grid, within in a scrollable notebook.

## 1.6.13 - 2025-02-06

### Changed

- Setting: Notebook max tabs now controls the number of tabs per output cell in a notebook. #270
- Changing the max tabs setting to 0 will remove the output tabs from the ui. #270
- Tabs now shrink properly when there are more than can be displayed on the tab bar. #270
- Tab icon changes to pin on hover indicating tabs can be pinned. #270

### Fixed

- Postgres: Fixed issue with query parameters picking up Postgres replacement values. #262

## 1.6.12 - 2025-02-05

### Changed

- Added support for executing a command to get the password for a connection. #269

### Fixed

- MySQL/MariaDB: Changed introspection to not use information_schema for procs. #273 #265
- Added more checks for connections with configuration issues (invalid drivers). #231
- Added a configuration option to debug tunnels. #257
- Notebooks: Fixed a bug with saving outputs when output id's started with a number. #272

## 1.6.11 - 2025-02-05

### Changed

- Notebook tabs have been restored. #270
- File based drivers (SQLite, DuckDB, etc) now store the path as a relative path when the config is saved in a work space. #268
- File based drivers (SQLite, DuckDB, etc) can use ${workspaceFolder} in the path. #268

## 1.6.10 - 2025-02-04

### Changed

- Query Parameters are now supported. #262
- Keybinding on Mac for executing a statement has been changed to ctrl+enter (was cmd+enter), consistent in both notebooks and editor now.

### Fixed

- Error highlighting was not working with the active range.
- Tables starting with an underscore where not editable when opened.
- Cassandra tables would not load as it did not support Order By or Offset.
- When using a row limited table, could not remove a second column filter.
- When adding a row to a row limited table, you could not scroll/page to get more records without saving the pending row change.

## 1.6.9 - 2025-01-31

### Changed

- Notebooks: Saved output can now be restored. #44

### Fixed

- Notebooks: Background color was not being applied. #260
- Cassandra: Was forcing a username. #261

## 1.6.8 - 2025-01-30

### Changed

- Notebooks: Tabs have been removed from output. #247
- Notebooks: The option to save output in a notebook has been added (under active development). #44

### Fixed

- Range highlighting better handling new lines after semicolons
- MySQL/MariaDB: Fixed issue with unicode enum values.
- CockroachDB: Fixed issues with default database and introspection differences with Postgres. #258
- Tunnels: Fixed issue with private keys without passwords prompting for passwords. #257

## 1.6.7 - 2025-01-28

### Changed

- DB Explorer context menu now has filtering for any set of items (tables, views, etc). This replaces the previous filtering of databases and schemas configured per connection. #115

### Fixed

- Exports no longer includes the row number column.
- CockroachDB: Fixed error when trying to connect to local instance, and a typo. #253

## 1.6.6 - 2025-01-28

### Changed

- If a table has more rows than rowsToLoad setting (default 100) filtering, paging and scrolling will fetch rows from the database as needed. #170
- Added warning if refreshing results with unsaved changes.
- Setting: Removed maxRowsToFetch
- Setting: Added rowsToLoad (default 100). Controls number of initial rows loaded when opening a table or view. #170

### Fixed

- Exporting insert statements will use the tables name (if present). #250

## 1.6.5 - 2025-01-26

### Changed

- When results are returned that hit the max row limit, sorting will now re request the data from the server. #170
- SQLite: Added support for loading extensions, currently only sqlite-vec. #249
- Notebooks: Changed file format to YAML for better Git readability.

### Fixed

- SQLite: Added real mapping (changed float to be the alias). #246
- Result column filters were not working for date columns correctly.

## 1.6.4 - 2025-01-25

### Changed

- Moved to perpetual license model.
- Setting: Order By Primary Key: Will order by the primary key if present when opening a table. #220
- Notebook: The connection is now persisted in the notebook file, and the notebook will show an error if the connection cannot be found on re opening the file. #44

## 1.6.3 - 2025-01-22

### Changed

- SQL files now show the statement boundaries in the editor. By default the execute icon/keybinding will execute the statement in the boundary. #143

### Fixed

- DBCode panel now aware of changes to pagination setting.

## 1.6.2 - 2025-01-22

### Changed

- Settings: Added a setting to enable pagination in the results, along with icon to turn it on per result set (bottom right of the result table).
- BigQuery: Metadata from the executions (Cache hit, bytes processed) are now shown in the status bar. #159
- Removed Apply Changes button from the status bar, save icon is still in the toolbar, keyboard shortcut was added.
- Fixed result editing of boolean fields to use the checkbox, and handle null values for boolean fields correctly.
- Added cmd/ctrl+n to add a new row in the results. #228
- Added cmd+delete ctrl+backspace to delete rows in the results. #228
- Added cmd/ctrl+d to duplicate rows in the results. #228
- Added a filter option to tables, preview of the functionality to replace schema/database filter. #115

### Fixed

- Applying a value to a selection of cells was not appling to all the cells in the selection.

## 1.6.1 - 2025-01-17

### Changed

- Added support for materialized views (Postgres and BigQuery). #214
- Added cmd/ctrl+r to refresh the results (if enabled). #250
- BigQuery: Added support for editing functions, ADC authentication. #159

### Fixed

- Fixed a bug when the file system could not be read. #218
- Show correct icons when opening views and materialized views. 

## 1.6.0 - 2025-01-17

### Changed

- Added BigQuery support (in Beta). #159
- Added cmd/ctrl+s to save all changes in the grid. #215
- Added the connection color to tab icons where applicable. #72

### Fixed

- Result saving was being incorrectly enabled if a single change was made, and then another change made which resulted in the original value. #210
- Undo/Redo keyboard shortcuts when multiple result tabs were visible in the DBCode panel where applying to all result tabs.

## 1.5.12 - 2025-01-13

### Changed

- Added support for storing connections in the workspace. #200
- Added right click context menu to folders to recursively discover connections.

### Fixed

- Postgres: Version detection has been improved to handle cases like 12.6dbup. #201

## 1.5.11 - 2025-01-11

### Changed

- Added a row number column to the results, which also now provides row selection interface like a spreadsheet (ctrl/cmd and shift support for ranges). #138

### Fixed

- Context menu on editable results was missing add and duplicate row option.

## 1.5.10 - 2025-01-09

### Changed

- Added right click open in DBCode option for .sqlite and .sqlite3 files. #171
- Added ability to resize the grid in the notebook. #191

### Fixed

- Changed Chinese translation for Save. #192
- Fixed connection form elements from not showing their translations. #192
- Postgres: Fixed array data types. #167

## 1.5.9 - 2025-01-06

### Changed

- Added a new command to the database context menu to execute SQL files on a database. #162
- Reduced logo size in activity bar.

### Fixed

- Fixed error with hovering a procedure name in the editor that does not have parameters. #184
- Postgres: Added the pseudo types to introspection. #163 
- Postgres: Added support for composite types. #164

## 1.5.8 - 2024-12-18

### Changed

- Added Entity Relationship Diagram option to the context menu of individual tables, filters the initial display to that table and it's related tables. #134

### Fixed

- Revised URL handling for file paths on auto discovery. #152 #156
- ERD was not loading when a column type was not matched to a type from the schema. #153

## 1.5.7 - 2024-12-17

### Fixed

- Snowflake now supports Key Pair Auth  #113
- CoPilot will now quote identifiers in case sensitive dialects #154

## 1.5.6 - 2024-12-17

### Changed

- Snowflake supports full introspection, and procedures are now supported.

### Fixed

- Handle urls that cannot be parsed in autodisovery and manual discovery. #152

## 1.5.5 - 2024-12-14

### Changed

- Updated Snowflake connections to support SSO, Warehouse, and Secondary Roles. #113
- Updated Redshift to the new introspection model. #146

## 1.5.4 - 2024-12-12

### Changed

- Updated MySQL/MariaDB to new introspection model. #145 #132 #122

## 1.5.3 - 2024-12-12

### Fixed

- MySQL/Maria null dates (0000-00-00) were causing a results not to render. #137
- Notebook results windows were incorrectly sized. #144

## 1.5.2 - 2024-12-10

- Added preview support for IBM DB2
- Added a completion item to include all fields in a table when typing table.* 

### Fixed

- Result columns are now resized sooner to avoid the flash of resizing on initial loading.
- Result columns can now be dragged as wide as needed. 

## 1.5.1 - 2024-12-07

### Changed

- Added support for MotherDuck. #136

### Fixed

- Fixed Snowflake schema to default to public.

## 1.4.17 - 2024-12-07

### Changed

- Preview of Snowflake support. #113

## 1.4.15 - 2024-12-06

### Changed

- Added a setting to control the date/time format. #85
- Added a setting to control if dates should be shown in your computers local time, or UTC when timezone information is present. #85
- Changed Postgres supported version to 9.5 or higher. #129

### Fixed

- Maria text fields were showing as binary.
- Postgres introspection error on version 9.5 through 10. #129

## 1.4.14 - 2024-12-04

### Changed

- Datetime columns with timezone information now show in the local time. #85
- Datetime columns now display in the locale/region format of the computer. #85
- Editing a datetime column will highlight the cell in red if the value does not parse.
- Datetime columns that are edited are converted to ISO format when sent to the database. 

### Fixed

- Tab did not set the cell value when editing data and the cell contained a drop down.

## 1.4.13 - 2024-12-02

- Keybinding to show DB Explorer does not break find next (cmd/ctrl+d). #121
- Executing tabs can be closed, will prompt to cancel execution. #125
- Potential fix for Postgres queries not returning. #125
- Bit fields handled correctly in the data editor.

## 1.4.12 - 2024-11-22

### Fixed

- SQL Server was not handling UTF strings correctly in data changes.
- Checkbox removed from the table editor.

## 1.4.11 - 2024-11-21

### Changed

- Moved create database context menu item to the Connection in the DB Explorer.
- Added context menu item to add a connection to a group.

### Fixed

- Connection error with MariaDB 10.5 through 10.6.10.
- Added OUTPUT clause to procedure parameters.

## 1.4.10 - 2024-11-19

### Changed

- Added a fallback autocomplete to use when parser cannot parse the SQL.

## 1.4.9 - 2024-11-17

### Changed

- Prevented autocomplete from suggesting a lot of syntax, single character tokens.

### Fixed

- Tables with foreign keys across schemas would not open correctly in the grid detail feature.
- Tables with foreign keys to tables in other schemas which the user did not have access to caused an error. #118
- Change MongoDB to use direct connection when not using SVR protocol. #119

## 1.4.8 - 2024-11-14

### Changed

- Added cmd+d,cmd+b and ctrl+d,ctrl+b hotkeys to show the DB Explorer. #106
- Improved autocomplete suggestions, including support for update, and common table expressions.
- Added autocomplete support for EXEC procedure statements.
- Autocomplete will work if statements are not seperated by a semi-colon. #46

## 1.4.7 - 2024-11-11

### Changed

- Added cmd+f and ctrl+f hotkeys to search the grid. #106
- Added support for JOIN, GROUP BY, HAVING, and ORDER BY to autocomplete. #59

### Fixed

- Azure Entra ID authentication was not refreshing the token.

## 1.4.6 - 2024-11-10

### Changed

- Diagrams now show the primary key icon as highlighted.
- Diagrams can now be saved as PDFs or PNGs. #38

## 1.4.4 - 2024-11-08

### Fixed

- Postgres better detection of users access to databases when connecting. #105
- Postgres errors not being raised when unable to connect to the server.

## 1.4.3 - 2024-11-08

### Changed

- Binary cells can now have files loaded directly into them when editable. #104
- More values are present in the Set Value menu for editable cells. #76

## 1.4.1 - 2024-11-07

### Fixed

- SSH Config that failed parsing would cause the extension to crash.
- Creating tables with single primary key column is now inlined in the DDL.
- LibSQL was not showing the table structure for empty tables.
- Creating tables in Cassandra with dual primary keys was producing invalid DDL.
- Creating tables in Oracle with identity columns and single primary keys was producing invalid DDL.

## 1.4.0 - 2024-11-07

### Changed

- Added Cassandra as a NoSQL database. #83
- Added DuckDB as a SQL database. #106

### Fixed

- Fixed introspection query for MySQL 8 that was breaking the SQL parser in MySQL. #100
- Boolean field editing caused an error. #102

## 1.3.18 - 2024-11-01

### Fixed

- SQL Server tables were not editable. #93
- MariaDB 10.4 and below connections did not work if the driver was set to MySQL. #86


## 1.3.17 - 2024-10-31

### Fixed

- Parser error when loading tables from DB Explorer. #90

## 1.3.16 - 2024-10-30

### Fixed

- Autocomplete now works with more complex Select statements (nested selects, alaised tables, etc).
- Autocomplete now works with Delete statements.
- Autocomplete now works with Insert statements, including nested selects.

## 1.3.15 - 2024-10-27

### Changed

- New Charts added to the chart menu.
- Option to expand/shrink the chart. #37

### Fixed

- Selecting MySQL for a MariaDB could lead to incorrect introspection being used, this is now fixed.
- Tables named after SQL Keywords (eg user) were not editable.
- Grid lines now show when enabled in a chart. #34
- Autocomplete now suggests operators and multiple condition where clauses.

## 1.3.14 - 2024-10-27

### Fixed

- SQL Server 2016 now works with the DB Explorer.

## 1.3.13 - 2024-10-25

### Changed

- Data can now be changed without signing in/purchasing a subscription, however changes are not verified before applying them when not signed in/subscribed.
- Updated the new connection UI.
- Add the count of items in each "folder" in the DB Explorer.

### Fixed

- Introspection is now supported on MariaDB 10.3 and above. 

## 1.3.11 - 2024-10-22

### Changed

- Groups can now be renamed in the DBExplorer. #73

### Fixed

- D1 now shows views.
- Introspection is now supported on MariaDB 10.0 and above. #74 and #71

## 1.3.10 - 2024-10-21

### Changed

- Table DDL editing now uses transactions where appropriate.
- Custom theme extensions are now supported for syntax highlighting in the table editor.

### Fixed

- MongoDB connections can now be created without a username. #70
- MariaDB 10.5 or higher is required.

## 1.3.7 - 2024-10-19

### Changed

- Changes preview in the table editor now matches the VSCode theme for the built in themes.

### Fixed

- Retrying a failed connection in the DB Explorer now works.
- Applying table changes now works.

## 1.3.6 - 2024-10-18

### Changed

- Table creation and editing is now working, with change preview.

## 1.3.3 - 2024-10-15

### Changed

- Added (null) to the drop down menus when editing a field that allows null.
- Added a Set Value menu item to the context menu for editable cells. #47

### Fixed

- Fixed Oracle introspection to use all_x and work with user level privileges. #58
- Added string and number to D1 data types. #64

## 1.3.2 - 2024-10-14

### Changed

- MongoDB now supports user code in the editor. #55

### Fixed

- DB Explorer filtering now expands items correctly, and works with cloud providers. #42
- Autocomplete now works again in Notebooks. #56
- Trimmed long column comments in the Hover help. #50

## 1.3.1 - 2024-10-14

### Fixed

- Autocomplete ignores case when matching tables and views. #51
- History filter now works correctly in flat view.
- History from cloud providers now shows the correct name of the connection and provider in the history.
- History is limited to 5 records per database in core edition.
- SQLite now works on code-server and other non electron based environments.

## 1.3.0 - 2024-10-13

### Changed

- Added a Create Table, Alter Table, Rename Table, Truncate Table and Drop Table commands to the DB Explorer (Create/Alter are just preview for now, changes wont be saved!).
- Notebooks now use the extension .dbcnb rather than .dbcode.
- Identity/Autoincrement columns now show that in the default value in the DB Explorer.
- Data editing now supports enum fields with a dropdown list of the values.
- Execute keyboard shortcut changed to Ctrl/Cmd+Enter.
- DB Explorer now has a filter to search for for strings on connected databases. #42

### Fixed

- SQL Server and Azure now show comments for tables, views and columns
- Fixed Postgres tables with " in the name not being recognized as editable in the table.
- Autocomplete now suggests views where appropriate.
- Autocomplete now suggests schemas where appropriate.

## 1.2.16 - 2024-10-07

### Fixed

- Numeric data types were not being correctly displayed in the grid, preventing charting and other features.
- Refresh and Edit features now work correctly in Notebooks.
- Tables and views in the DB Explorer now show in alphabetical order for MySQL/MariaDB.

## 1.2.14 - 2024-10-04

### Changed

- Added a Show Only Discovered Connections option to the DB Explorer.
- Preliminary support for Oracle, including Instant Client.
- Formatting provider for SQL files and notebook cells now added.
- Added a Copy Name option to the context menu when clicking on a column header.
- Added CURRENT_TIMESTAMP as a valid value for date columns when editing data.
- Added support for organizations in Neon.

### Fixed

- Autocomplete correctly escapes identifiers, and does not suggest columns from other tables.
- Tunnel creation and editing can now select files from the .ssh folder when it's hidden by the OS.

## 1.2.8 - 2024-09-28

### Changed

- Added a Copy Connection option to the DB Explorer.
- Added Create, Rename and Drop database for supported databases to the DB Explorer context menu.

### Fixed

- Added an option to allow self-signed certificates in chain to be accepted.
- Added Docs option to Help + Suggestions.
- Added more options to the context menu in the DB Explorer.

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

- MySQL/MariaDB connections were not using the connection timeout setting.
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
