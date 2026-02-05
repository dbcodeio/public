# CHANGELOG

## 1.27.0 - 2026-02-04

### Changed

- DuckLake: In preview for connecting to DuckLake catalogs with local or database-backed metadata and local/S3/GCS data storage.
- Iceberg: In preview for connecting to Apache Iceberg catalogs via AWS Glue or S3 Tables.
- Formatting: Added `preserveShortStatements` setting to skip formatting for short SQL statements, leaving them exactly as written.
- Connections: Added "Editor Connection Idle Timeout" setting to auto-release editor connections after a period of inactivity. Useful for serverless databases to prevent unexpected billing from keepalive queries. If there are uncommitted changes, a warning notification is shown with a grace period before auto-rolling back.

### Fixed

- Alter Table: Fixed alter table and hover actions not working. #928
- Redis: Fixed MCP queries hanging and blocking the extension on large scans by yielding and configurable max scan limit. #946

## 1.26.17 - 2026-02-04

### Changed

- SQLite: Updated better-sqlite3-multiple-ciphers to 12.6.2. #936
- DuckDB: Updated to version 1.4.4. #943
- SQL Server: Added Read Only support for AlwaysOn Availability Group routing via ApplicationIntent=ReadOnly. #940

### Fixed

- BigQuery: Fixed stale credentials not being refreshed when re-authenticating via `gcloud auth application-default login`. 
- BigQuery: Added clear error message for GCP RAPT session expiry instead of showing raw JSON error.
- DB2: Fixed SSL certificate paths not being passed correctly. #945
- DuckDB: Fixed "File Search Path" setting not applying to output operations (COPY TO, EXPORT). #944
- Grid: Fixed boolean column filtering generating invalid SQL.
- Editor: Execute shortcuts (Cmd/Win+Enter, Shift+Cmd/Win+Enter, Alt+Cmd/Win+Enter) now run the selected SQL when editing database objects (stored procedures, functions, triggers, etc), instead of applying the whole object.

## 1.26.16 - 2026-01-28

### Fixed

- Procedures/functions: Fixed comments above stored procedures being lost when saving in SQL Server.

## 1.26.15 - 2026-01-26

### Changed

- Data Compare: Right click a tab in the panel, or table in the tree, to compare data. "Compare data with..." menu option, direction toggle, and ability to generate sync scripts or apply changes directly.
- BigQuery: Real-time progress reporting for stored procedures - step completion status now displays in the output log while script jobs execute. #924
- Results: Tab reuse now reuses the currently active tab instead of the last tab. #921
- Results: Hold Alt while executing (Alt+Cmd+Enter / Alt+Windows+Enter) to combine multiple result sets into a single tab. Tabs can also be combined by dragging one onto another or Ctrl/Cmd+clicking to multi-select and using "Stack Selected" from context menu.
- Results: Added "Stack with..." right-click menu option for tab combining with visual selection mode.

### Fixed

- Results: Tab reuse now reuses the currently active tab instead of the last tab.
- Results: Fixed output log not showing all recordset rows on first execution.
- Favorites: Fixed favorites disappearing when adding items while a filter was active in the connections tree.
- ERD: Fixed export to PNG/PDF failing with "Failed to fetch" error. #931
- ERD: Fixed export to web page not rendering tables for schema-less databases.

## 1.26.12 - 2026-01-23

### Changed

- BigQuery: Output log now displays individual SQL statements for each step when executing stored procedures. #924
- Results: Output log now has clickable row counts to navigate directly to result tabs. #924

### Fixed

- Redshift: Fixed Explain button failing with FORMAT parameter error.
- Results: Fixed Shift+Execute triggering license prompt instead of refreshing the last result tab. #921
- Connection Import: Added support for JDBC connection strings (e.g., `jdbc:db2://host/db`). #927

## 1.26.11 - 2026-01-22

### Changed

- Salesforce: Preview support added for Salesforce.
- DB Explorer: Tree filter now searches cached schemas, not just active connections.
- BigQuery: Progressive introspection enabled. #925

### Fixed

- BigQuery: Fixed "Premature close" error when queries return more than 40K rows by enabling driver pagination. #925
- SSH Tunnels: Fixed SSH Agent authentication with Pageant on Windows failing with "Failed to retrieve identities from agent".
- Elasticsearch: Fixed connection errors with Elasticsearch 7.x and 8.x servers caused by incompatible version headers in client v9.
- Elasticsearch: Made Catalog field optional. Leave empty to use the local cluster.

## 1.26.10 - 2026-01-20

### Changed

- Inferred Relationships: Ability to define relationships for databases without native foreign key support (MongoDB, DynamoDB, etc.). Configure patterns in connection settings or visually in the entity relationship diagram to detect relationships based on column naming conventions (e.g., `user_id` → `users.id`). 
- Results: Hold Shift while executing (Shift+Cmd+Enter / Shift+Window+Enter) to refresh the last result tab instead of opening a new one, preserving chart configuration. In single-tab mode (maxTabs=1), this behavior is inverted. #921
- Results: Added column selection via Shift/Cmd/Ctrl+click on column headers, or "Select Column" in context menu. Shift selects a range, Cmd/Ctrl adds to selection. #921
- Athena: Added multi-catalog support. Database list now shows all data catalogs (data sources) including federated connectors. #920
- Settings: Added `dbcode.discovery.enabled` setting to disable automatic zero-config connection discovery from workspace files (.env, config files, etc.).

### Fixed

- Formatting: SQL formatter now properly respects `.editorconfig` `insert_final_newline` setting at file level.

## 1.26.8 - 2026-01-15

### Fixed

- AWS: Fixed SSO credentials not refreshing after user re-authenticates via CLI, previously requiring VS Code restart.
- DB2: Fixed connection failure on Windows due to CLI driver path not being resolved. #918
- Results: Fixed date filter on datetime/timestamp columns not matching rows when using equals with date-only values. Now expands to match any time on that date.

## 1.26.7 - 2026-01-14

### Changed

- H2: Added experimental support. #371 #788
- Table View: Added loading status text ("Connecting...", "Loading data...") to provide feedback during slow initial database connections.

### Fixed

- Hive: Fixed column comments not appearing on Hive 2.x (legacy) servers. #669
- MySQL: Fixed progressive schema loading still timing out on very large table counts. #862
- PostgreSQL: Fixed introspection error on openGauss and PostgreSQL < 9.5 due to missing array_position function. #917

## 1.26.6 - 2026-01-12

### Changed

- MySQL/Trino/Athena: Added experimental progressive schema loading for faster initial connections. Enable via editing connection, going to Advanced > Introspection settings. Includes on-demand detail fetching, background prefetch, and configurable cache TTL. #908 #875 #862

## 1.26.4 - 2026-01-10

### Changed

- Opensearch: Added preview support. #874
- Elasticsearch: Added Aliases, Scripts and Ingest Pipelines to explorer.

## 1.26.2 - 2026-01-09

### Changed

- Tunnels: Added command tunnels for local proxy tools (cloud-sql-auth-proxy, kubectl port-forward, AWS SSM, etc.) with presets, variable substitution, and ready detection. #625
- Tunnels: Added per-tunnel output channels for viewing tunnel logs via "View Logs" command.
- SurrealDB: Added relationships and events for tables, and functions as well as auto complete support. #254
- Results: Added setting to show column comments below column names in grid headers. #669

### Fixed

- Formatting: SQL formatter now respects `files.insertFinalNewline` setting from VS Code/EditorConfig.
- BigQuery: Fixed CLONE and SNAPSHOT tables not appearing in the db explorer. CLONE tables now show in Tables, SNAPSHOT tables in a separate Snapshots section. #914

## 1.26.1 - 2026-01-08

### Fixed

- Results: Fixed pivot mode calculating incorrect aggregates for decimal values with trailing zeros (e.g., 175.20). #913

## 1.26.0 - 2026-01-08

### Changed

- SurrealDB: Added preview support for SurrealDB with namespace/database browsing, SurrealQL queries, and document editing. #254
- InfluxDB: Added preview support for InfluxDB 3 with SQL query execution, line protocol writes, and soft/hard delete options. #168
- Results: Column header tooltips now show datatype info and column comments (where available). #669
- Inspector: NoSQL databases now allow the inspector JSON mode to be editable, as well as the form mode to add remove columns.
- Inspector: If selecting multiple rows, you can now edit the value for all selected rows at once.
- Inspector: Now shows the data type of each column in the form view and comments where available.

### Fixed

- MongoDB: You can now insert a document into a blank collection.
- Editor: Fixed format-on-paste mangling pasted values like UUIDs by adding spaces around hyphens. #896

## 1.24.1 - 2026-01-05

### Changed

- MSSQL: Added Named Pipe and LocalDB connection support for Windows, allowing connections via named pipes or LocalDB instance. #497
- Neo4j/Memgraph: Added relationship visualization to entity diagrams, showing connections between Labels.

### Fixed

- Hive: Fixed introspection failure due to integer overflow in HiveServer2. #904

## 1.24.0 - 2026-01-04

### Changed

- Neo4j/Memgraph: Added preview support. #572 #622 #617
- PostgreSQL: Added "Truncate Cascade" option for tables to handle foreign key constraints.
- Netezza: Added query cancellation support, removed from preview. #748
- MSSQL: Added Windows Integrated Authentication (SSPI) (Testing).

### Fixed

- Connections: Fixed SSL/TLS settings not being preserved in "Copy Connection String" and "Import Connection String". #905
- Hive: Not fetching all data during introspection. #904

## 1.23.4 - 2025-12-30

### Changed

- Editor: Added signature help for user-defined functions and procedures, showing parameter names, types, and active parameter position.

### Fixed

- SingleStore: Fixed introspection error due to missing generation_expression column. #903
- Hive: Fixed introspection limited to 100 tables due to default fetch size. #904
- ClickHouse: Fixed connection failure on legacy versions (< 21.11) due to missing comment column in system tables. #902

## 1.23.3 - 2025-12-28

### Fixed

- PostgreSQL: Fixed introspection failing when user lacks access to system tables (pg_inherits, pg_trigger, pg_matviews, pg_policies, pg_foreign_server).
- Zero Config: Fixed discovered connections not updating when adding folders. #900
- MSSQL: Fixed DROP PROCEDURE and DROP FUNCTION commands to use correct syntax.
- Oracle: Fixed DROP PROCEDURE and DROP FUNCTION commands to use correct syntax.
- MySQL/MariaDB: Fixed DROP PROCEDURE and DROP FUNCTION commands to use correct syntax. #898
- MySQL: Fixed procedures/functions not using DROP statement for alter workflow. #898


## 1.23.2 - 2025-12-27

### Changed

- Hive: Added protocol version selection (V7 for Hive 1.2+, V10 for Hive 3+) to connection settings. #661

### Fixed

- Hive: Fixed transactional table detection for Hive 2.x to enable grid editing on ACID tables. #661
- Access: Fixed download by hosting package in DBCode repository with manual file fallback for air-gapped environments. #546
- BigQuery: Fixed functions incorrectly showing as procedures and added proper return type display.
- BigQuery: Fixed DROP PROCEDURE and DROP FUNCTION commands to use correct syntax.

## 1.23.1 - 2025-12-26

### Changed

- MongoDB: Added authentication mechanism selection (SCRAM-SHA-1, SCRAM-SHA-256, X509, AWS, LDAP, Kerberos) to connection settings. #892

### Fixed

- Results: Fixed first cell not receiving focus when opening tables via Quick Open. #840
- Results: Fixed ESC key not closing relationship sub-tables when focus was inside the nested grid.
- Hive: Fixed materialized view DDL generation to output `CREATE MATERIALIZED VIEW` instead of `CREATE TABLE`.
- MongoDB: Fixed connection string import not parsing query parameters (authSource, authMechanism, tls). #892

## 1.23.0 - 2025-12-24

### Changed

- DynamoDB: Added DynamoDB (Preview). Supports AWS credential chain, access keys, auth profiles, and DynamoDB Local. #495, #887
- Hive: Added Apache Hive (Preview). Supports HiveServer2 via Thrift protocol with TCP and HTTP transports. #661
- Impala: Added Apache Impala (Preview). #190
- RavenDB: Added RavenDB (Preview). #252

### Fixed

- Results: Fixed copy/paste not preserving null and boolean values between grid cells.

## 1.22.4 - 2025-12-22

### Changed

- Language Server: Now enabled by default. Disable with `dbcode.useLanguageServer` setting if needed.
- QuestDB: Now generally available (out of preview). #527

### Fixed

- BigQuery: Fixed stored procedure DDL script missing parameters.
- BigQuery: Improved introspection to gracefully handle permission-denied errors. Dataset browsing now shows accessible objects (like procedures) even when table access is restricted.
- Elasticsearch: Fixed connection errors with Elasticsearch 7.x and 8.x servers. #890
- MongoDB: Fixed introspection error on system.profile when user lacks listIndexes permission. #863
- PostgreSQL: Fixed connection failure when user lacks SELECT permission on pg_database view.

## 1.22.3 - 2025-12-21

### Changed

- Date/Time Display: Added "Raw" option to date style setting that preserves original database values without formatting or timezone conversion. Maintains full precision (microseconds) as stored in the database.

## 1.22.2 - 2025-12-20

### Changed

- Parameters: Added support for positional parameters ($1, $2, etc.) outside of function bodies. #889
- Authentication Profiles: Extended .pgpass and command auth profiles to CockroachDB, Greenplum, QuestDB, RisingWave, Timescale, and YugabyteDB.
- Oracle: Added support for Oracle 11g when using Instant Client (Thick mode).

### Fixed

- Language Server: Fixed false "Unknown column" warnings for stored procedure/function parameters and DECLARE variables.
- Language Server: Fixed JOIN hints not using table aliases in ON clause conditions (e.g., `ON a.id = b.user_id` now uses both aliases correctly).
- Redis: Fixed authentication failing on Redis versions before 6.0 which don't support username in AUTH command. #888

## 1.22.1 - 2025-12-19

### Changed

- Authentication Profiles: Added .pgpass file authentication profile for PostgreSQL.
- BigQuery: Added support for cross-project browsing with separate billing project. Users can now browse datasets from external projects (e.g., `bigquery-public-data`) while using a different project for query billing.
- Athena: Added workgroup support for organizations with IAM policies that restrict query execution to specific workgroups. #880

### Fixed

- Connections: Fixed SSL checkbox being locked for known hosts (AWS RDS, etc.) when using SSH tunnels. #883
- Oracle: Fixed connection error on Oracle Free Docker containers where PRODUCT_COMPONENT_VERSION view returns empty results. #885
- DuckDB: Fixed database file remaining locked after disconnecting. #884
- Cloud Providers: Fixed schema caching failing on Windows due to invalid path characters in connection IDs.

## 1.22.0 - 2025-12-13

### Changed

- Microsoft Access: Added support for Microsoft Access databases (.mdb, .accdb). (Preview, Windows only). #546
- Transactions: Added `dbcode.transactions.defaultAutoCommit` setting to control the default auto-commit mode for new pinned connections.
- Schema Switching: Added automatic schema context detection for Oracle, PostgreSQL, DB2, Databricks, and Snowflake when executing schema switch commands.

### Fixed

- SQLite: On large databases (1GB+) using approximate ANALYZE with `analysis_limit` and skipping table size calculations.

## 1.21.2 - 2025-12-10

### Changed

- DuckDB: Added extensions support for loading core and community extensions on connect.
- Formatting: Improved SQL formatter dialect mappings for ClickHouse, Databricks, Access, CQL, and Elasticsearch.
- Results: Quick search now highlights matching cells in the grid.

### Fixed

- SQLite: Fixed slow connection times on large databases (1GB+) by skipping expensive ANALYZE and table size calculations.
- SQL Server: Fixed backup failing on Docker/local instances with SSL certificate errors by explicitly setting encryption mode.
- Commands: Fixed Quick Open and other commands failing on first attempt when extension hadn't activated yet. #876

## 1.21.1 - 2025-12-09

### Changed

- TiDB: Added support for TiDB. #872
- Trino: Username and password are now optional.

### Fixed

- Zero Config: Fixed symlinked `.env` files not being detected during connection discovery. #855
- MySQL/MariaDB: Added support for MaxScale proxy with dbfwfilter by auto-detecting and disabling multi-statement queries (or manual connection configuration). #870

## 1.20.1 - 2025-12-09

### Changed

- Language Server: Added `dbcode.enableLinting` setting to disable SQL linting (syntax and semantic validation). #795

### Fixed

- Language Server: Fixed false "Unknown column" errors appearing during initial connection when schema is still loading. #869
- PostgreSQL: Updated bundled pg_dump from 17.6 to 18.1 to support PostgreSQL 18 servers. #871
- Open Table: Now uses workspace default connection when invoked from command palette. #855

## 1.20.0 - 2025-12-08

### Changed

- Elasticsearch: Added support for Elasticsearch (Preview). #323
- QuestDB: Added support for QuestDB (Preview). #527
- ScyllaDB: Added support for ScyllaDB (Preview). #680
- SQLite: Added mod_spatialite extension for spatial SQL capabilities. #867 #576

### Fixed

- Cassandra/ScyllaDB: Fixed USE command not updating codelens to reflect the current keyspace.
- Requests: Fixed fetch failing with "Invalid URL protocol" error when proxy is misconfigured or undefined. #868

## 1.19.10 - 2025-12-05

### Changed

- DB Explorer: Default connection (from setting or zero config) now indicated with a star (☆), connected icon change to (●).
- Connections: Connection configured colors now display on the connection item in the tree.
- Zero Config: Discovered connections will be used as default if a workspace does not have an explicit default connection configured, multiple discovered connections will show a prompt to select one on first request. #855
- DuckDB: Added "File Search Path" setting to control where relative file paths resolve from (Database Directory, Document Directory, or Workspace Root). #865

### Fixed

- MongoDB: Fixed introspection error when user lacks aggregate permission on system collections. #863
- Notebooks: Fixed Python injection failing with "Invalid \escape" error when data contains backslashes. #864
- AWS SSO: Improved login flow to display authorization code in a persistent notification with clickable link to open browser.

## 1.19.9 - 2025-12-04

### Changed

- SQL Server/Azure: Added backup/restore support. #195
- MongoDB: Added backup/restore support using mongodump/mongorestore. #195
- MongoDB: Added create and drop database support.
- Trino: Now generally available (out of preview).
- Athena: Now generally available (out of preview).

### Fixed

- MongoDB: Fixed introspection error when user does not have collStats permission. #863
- Results: Fixed focus not being set on first cell when opening a table. #840
- Zero Config: Fixed connection IDs to be deterministic, allowing workspace default connections to be shared across developers. #855

## 1.19.8 - 2025-11-29

### Changed

- MongoDB: Added Command authentication provider for retrieving credentials from external secret managers (1Password CLI, Vault, AWS Secrets Manager, etc.) or custom scripts. #496
- Performance: Added experimental background schema worker to build schemas off the main thread. Enable with `dbcode.useSchemaWorker` setting.

### Fixed

- MySQL: Fixed connection timeout on large databases (1000+ tables) by loading database sizes asynchronously. #862
- Authentication Profiles: AWS, auto runs SSO login if needed.

## 1.19.6 - 2025-11-26

### Changed

- DuckDB: Updated to version 1.4.2. #736
- Results: Added keyboard shortcut to focus WHERE filter (Ctrl+Shift+F / Cmd+Shift+F) and vim-style grid navigation (Ctrl+H/J/K/L). #858

### Fixed

- Panel: Fixed results panel failing to load when visible during VS Code startup.
- Parameters: Ignore parameters in PREPARE statements. #857
- Language Server: Added ClickHouse support for `SELECT * EXCEPT` column exclusion syntax and `SYSTEM REFRESH VIEW` statement. #795

## 1.19.5 - 2025-11-25

### Changed

- Authentication Profiles: Added a view to the explorer to manage authentication profiles. #279

### Fixed

- Connection Colors: Fixed empty workbench.colorCustomizations object appearing in workspace configuration file. #836
- File connections: Fixed CSV/Excel/Parquet/Avro file picker defaulting to folder mode on Windows/Linux. #845
- MongoDB: Fixed editing disabled for queries run from the editor. #851
- Results: Fixed parquet export failing when decimal columns are present. #852

## 1.19.3 - 2025-11-22

### Changed

- Auth Profiles: First look at centralized authentication profiles (added to Trino for OAuth). #279
- Results: Auto-focus first cell when switching to results panel for immediate keyboard navigation. #840
- Trino: Added support for OAuth authentication via new authentication profiles. 

### Fixed

- Databricks: Fixed SSO authentication failing in dev containers and remote environments.
- MongoDB: Fixed multi-line queries failing with "Unexpected end of input" error. #848

## 1.19.1 - 2025-11-21

### Changed
- Databricks: Added preview support. #158
- Editor: Added "Expand SELECT *" command to replace `*` with explicit column list. Available via keyboard shortcut (Cmd+Shift+E / Ctrl+Shift+E) or lightbulb code action.

## 1.18.2 - 2025-11-20

### Changed

- Tunnels: Added test connection button to tunnel creation/edit.
- Zero Config: Added support for framework-specific .env patterns including Laravel, Django, Spring Boot, and Node.js. #841
- Snowflake: Added support for SF_AUTH_SOCKET_PORT environment variable to use fixed port for SSO authentication callback.
- Alter/Open Table Commands: Where possible they now use the currently open table, and fallback to the quick picker.

### Fixed

- Results: Fixed "Get started" screen appearing instead of query results when panel was reopened. #842
- Improved translations for several languages.


## 1.18.0 - 2025-11-17

### Changed

- Netezza: Added preview support. #748
- Explorer: Added drop, rename, create to more objects.
- Notebooks: Python injection toggle now appears in SQL cells even when notebook has no Python cells, enabling injection to external Jupyter notebooks. #621

### Fixed

- Language Server: Fixed Windows compatibility issue where ESM dynamic imports. #204
- Connection Colors: Fixed user-level workbench.colorCustomizations being copied to workspace configuration file. #836
- SQL Server: Fixed DECLARE variables not in scope when blank lines exist between declarations and usage statements. #839
- PostgreSQL: Fixed introspection failure when user lacks permissions on pg_user_mapping table. #834
- File connections (CSV/Excel/Parquet/Avro): Fixed connection breaking when files are deleted, mapped tables will now be removed. 

## 1.17.37 - 2025-11-14

### Changed

- Transaction Control: Rolled out to MySQL/MariaDB, SQL Server, Oracle, DB2, ClickHouse, and Snowflake. #368
- PostgreSQL: Added Foreign Data Wrapper (FDW) support to explorer. Foreign servers now appear at database level with their tables and user mappings. Also supported in Yugabyte, Timescale, Greenplum, and RisingWave derivatives.
- PostgreSQL: Filtered out pg_temp and pg_toast schemas from explorer.
- Explorer: Database-level containers (Schemas, Foreign Servers, etc.) are now always shown. Will require re applying any schema filters.
- Explorer: Updated connections to show refreshing icon when introspection is in progress.

### Fixed

- Commands: "Alter Table" and "Entity Relationship Diagram" commands failing when invoked from command palette without tree selection.
- PostgreSQL: Fixed foreign tables appearing under Types in explorer.
- Snowflake: Fixed SSO authentication failing in dev containers and remote environments. #814
- ClickHouse: Fallback to SHOW commands when system tables are inaccessible. #817

## 1.17.35 - 2025-11-13

### Changed

- Core Plan: Testing usage-based access for select Pro features. Core users can now use certain features up to a limited number of times per month.
- Oracle: Ability to alter packages.
- SQL Server: Statements with DECLARE, temp tables, or variable assignments now stay together as one batch unless separated by GO or blank lines. #822
- Language Server: Added Snowflake support.
- History: Added setting to enable logging of failed queries. #827

### Fixed

- ERD: Fixed position saving not persisting correctly. #829
- Results: Fixed WHERE filter input not expanding to fill available space when toolbar is constrained. #828
- MySQL: Fixed ER diagrams incorrectly showing One-to-Many relationships for foreign keys with UNIQUE constraints.

## 1.17.34 - 2025-11-11

### Changed

- Export: You can now export a table, view, or filter directly from the explorer in the right click context menu. #559 #796
- Language Server: Added multi-schema search path support for completions and semantic validation (PostgreSQL search_path, Oracle multi-schema access, SQL Server schema resolution). #773

### Fixed

- CockroachDB: Fixed introspection error when connecting via zero-config with postgres:// protocol by auto-detecting CockroachDB and switching to the correct driver. #823
- Language Server: Fixed ClickHouse parser to support trailing commas in CREATE TABLE column lists. #818
- Language Server: Fixed Trino and ClickHouse UPDATE/DELETE WHERE completions not suggesting table columns.
- Language Server: Fixed ClickHouse UNION queries requiring ALL keyword when optional syntax is valid.
- Language Server: Fixed ClickHouse ORDER BY WITH FILL syntax not being recognized. #795

## 1.17.33 - 2025-11-11

### Changed

- Oracle: Added preliminary support for packages in database explorer.

### Fixed

- Explorer: Fixed sequence/identity column default values being truncated in database tree (missing closing bracket after type cast). #807
- SQLite: Fixed introspection error when database contains orphaned views (views referencing dropped tables). #819
- MySQL/MariaDB: Fixed backup and restore failing over SSH tunnels by forcing TCP protocol to prevent socket connection attempts. #808
- PostgreSQL: Fixed SSL connection failures with servers using ECDSA P-521 certificates (secp521r1) by appending missing signature algorithm to BoringSSL defaults. #777
- Snowflake: Added debug logging to help diagnose connection issues. #814

## 1.17.32 - 2025-11-07

### Changed

- Notebooks: Added Python cell support with Jupyter kernel integration and SQL-to-Python result injection using @var annotations. #621
- Team Seats: Added role management with Owner, Admin, and Member roles for team subscriptions. Admins can manage seats while only owners can change roles.

### Fixed

- Activation: Fixed web and email activation causing account section to not display license details. #810
- ClickHouse: Fixed connection failure when connecting to servers with readonly mode enforced at credential/server level. #817

## 1.17.31 - 2025-11-06

### Changed

- Transaction Control: Manual transaction management with auto-commit toggle, commit/rollback actions, and uncommitted change tracking for supported databases. #368
- CSV/Excel/Parquet/Avro: Now supports opening a folder of files and loading all files as tables in a single connection.
- ERD: Added multi-table selection support #812

### Fixed

- PostgreSQL: Fixed backup failing on macOS due to pgAdmin 4.app extraction errors in the PostgreSQL tools package.
- SQLite: Fixed sqlean extension not loading due to incorrect required check and filename handling.
- Connection Tree: Fixed tables starting with underscore not appearing in tree view.
- PostgreSQL: Fixed DDL scripting for external tables (FDW). #806
- Language Server: Fixed incorrect suggestions for CTEs in autocomplete. #204
- Zero Config: Fixed postgres:// protocol not being recognized in .env files for PostgreSQL connection discovery. #813

## 1.17.30 - 2025-11-05

### Changed

- Table Tabs: Added customizable tab title setting `dbcode.tabTitle.format` format with template variables for tables and views. #579
- SQL Formatting: Added support for `.sql-formatter.json` configuration files in workspace folders
- SQL Formatting: Added `tabulateAlias` option to align AS keywords in column lists for improved readability. #103
- Settings: Added Formatting section to specify default formatting configuration.

### Fixed

- SQL Parser: Fixed comments after semicolons being treated as separate statements causing execution errors.
- SQL Server: Fixed semicolons now treated as statement boundaries alongside GO delimiters. #802

## 1.17.29 - 2025-11-03

### Changed

- Scratch Files: Added "none" rotation option for persistent scratch files without timestamp.
- Language Server: Added Clickhouse support. #795
- PostgreSQL: Added support for external tables (FDW). #800
- Filters: Can now be edited/deleted from the explorer, and maintain sync with the results grid.

### Fixed

- Export: Fixed grid data not visible in webpage/notebook exports. #799
- Filters: Fixed filters duplicating when saved and not updating across panels and notebooks. #790
- Hover: Fixed table column preview formatting with improved layout, smart column hiding, and better alignment. #797
- PostgreSQL: PostGIS geometry columns now display as readable EWKT format instead of raw hex in result grids.
- Language Server: Fixed case-insensitive column name matching in both editor and grid WHERE filters. #792 #773
- Language Server: Fixed partial keyword matching in autocomplete suggestions. #792

## 1.17.27 - 2025-11-01

### Fixed

- ClickHouse: Fixed infinity and NaN values displaying as null in query results. #794
- Language Server: Fixed diagnostics incorrectly showing for unsupported dialects like ClickHouse. #795
- Editor: Fixed "No SQL to execute" error when executing queries in files without assigned connections. #798
- Results: Fixed initial loading performance. #789
- PostgreSQL: Fixed table row counts showing stale data by using pg_stat_all_tables when available. #791

## 1.17.26 - 2025-10-27

### Fixed

- Results: Fixed tooltip sizing and formatting for JSON content.
- Results: Fixed json cell editor saving JSON with whitespace instead of condensed format.
- SQLite: Fixed attached databases showing main database's tables instead of their own tables. #784
- Filters: Fixed WHERE clause filters not including schema qualification, causing "table not found" errors. #787
- Connection: Fixed USE statement not triggering database context switch after parser update.

## 1.17.25 - 2025-10-26

### Changed

- Language Server: Included SQLite support.
- Connections: Added file-based post-connection SQL support. #784

### Fixed

- ERD: Fixed incorrect cardinality display for junction tables with composite primary keys. #785
- SQLite: Fixed ATTACH DATABASE and DETACH DATABASE statements not being recognized to refresh the explorer. #784
- SQLite: Fixed introspection error when database has read-only file permissions. #783

## 1.17.24 - 2025-10-24

### Changed

- Language Server: Included MySQL and Trino support. 
- Filters: Table filters that are saved can now be loaded directly from the explorer. 

### Fixed

- ClickHouse: Fixed CREATE FUNCTION statement boundary parsing. #781
- Results: Fixed JSON columns being double-stringified when opening grid selections in editor with JSON format.
- Results: Fixed cell editor treating formatting-only changes as data modifications for JSON and XML content.
- Notebooks: Fixed result grid disappearing when clicking refresh or save dropdown menus. #780

## 1.17.23 - 2025-10-23

### Changed

- Results: Added ability to save filters and re use on tables. 
- Language Server: Added PL/SQL and T-SQL dialect support to the experimental language server for autocomplete and syntax validation.

### Fixed

- Monaco Editor: Fixed theme initialization crash when VS Code themes contain non-string color values.
- Language Server: Disable diagnostics for unsupported dialects to prevent false positives. #772
- Themes: Adjusted some colors from the VSCode theme css provided. #776

## 1.17.18 - 2025-10-21

### Changed

- Results: Added SQL based where filter to results. #745
- Files: Added custom editor support for data and database files (CSV, XLSX, Parquet, Avro, SQLite, DuckDB) - users can now use "Open With..." to open files in DBCode. #764

### Fixed

- Autocomplete: No longer suggests items immediately after typing a comma - now requires at least one character to be typed for context-aware suggestions. #765
- Editor: Fixed DECLARE block parsing. #772

## 1.17.17 - 2025-10-20

### Changed

- Editor: Opening SQL now reuses existing untitled files for the same connection instead of creating multiple tabs.
- Editor: Added [scratch files](https://dbcode.io/docs/query/scratch-files) for persistent SQL files organized by connection with configurable rotation (hourly/daily/weekly/monthly) and automatic cleanup.
- Editor: Reworked statement boundary parsing to better handle functions, procedures, and other complex SQL constructs. #768 #767
- Connection Roles: Added new statement types for transactions, maintenance, grant/revoke, set/use.
- Explorer: Added table search to right click context menu in explorer, supports multiple table selection.
- Oracle: Added "Include Oracle Maintained Schemas" option to show system schemas (SYS, SYSTEM, etc.). #769
- Redis: Added support for executing statements in the editor.
- Results: Added "Open" to context menu to open data directly in editor. #630

### Fixed

- Parameters: Fixed parameter detection incorrectly interpreting string concatenation operator (`||`) as parameter definitions. #770
- Redis: Follows pagination correctly when loading keyspaces.
- Results: CSV and Excel exports now respect the grid's column order, including user-reordered columns.
- Table Editing: Not correctly handling tables with columns already set to null.

## 1.17.16 - 2025-10-15

### Changed

- Snowflake: Added support for dynamic tables, hybrid tables, transient tables, external tables and materialized views. #113

### Fixed

- All databases: Added more sql keywords to the escape list. #763
- MySQL: Fixed timestamp values in SQL INSERT exports including timezone suffix that MySQL doesn't accept. #761
- Oracle: Fixed schema detection failing when connecting with system accounts (SYSTEM, SYS, etc.). #760
- SQLite/D1: Fixed introspection error when database metadata references non-existent tables. #667
- Snowflake: Warehouse and Security Role now fetch from the server. #762

## 1.17.15 - 2025-10-13

### Changed

- MongoDB: Added authentication database (authSource) option to connection settings. #752

### Fixed

- RisingWave: Fixed connection errors with RisingWave versions below 2.0 due to missing information_schema support. #753
- Results: Expansion now handles more complex nested data, along with correctly displaying row numbers and background stripes. #710
- Bigquery: Fixed JSON data types being quoted. #710

## 1.17.13 - 2025-10-11

### Changed

- ERD: Can now choose to display multiple schemas in the diagram. #744
- Import: You can now create a new table when importing. #529
- Import: Now supports importing from parquet and avro files. 

### Fixed

- ERD: Filtering to start a specific table was not showing tables that did not contain that table's name.

## 1.17.12 - 2025-10-08

### Changed

- File Formats: CSV, Parquet, and Excel files now save changes back to disk after editing. #751
- Explorer: Added create capability for database objects (triggers, views, procedures, functions, indexes) with dialect-specific SQL across all supported databases. #67
- Results: Added Parquet export format. #730
- Results: Added option to expand a JSON column into unique keys or rows if an array. #710
- Notebooks: Added python language support. #621

### Fixed

- Results: Fixed "Export - All" to automatically fetch all rows when row limit is reached. #750

## 1.17.11 - 2025-10-06

### Changed

- MCP/Copilot: Added separate `dbcode-execute-dml` and `dbcode-execute-ddl` tools for granular permission control. #739
- MCP: **Breaking Change** - Legacy auth modes (Bearer, Querystring) and depreciated SSE transport removed. OAuth provides automatic discovert and secure authentication with approval dialogs for MCP clients, and no need to set query strings, tokens etc. URL has also been changed to http://localhost:PORT/mcp.
- MongoDB: Added create, drop, and rename capabilities to MongoDB collections, matching functionality available for SQL database tables. #66

### Fixed

- Connections: Fixed refresh not updating schema metadata when database structure changes (table field types, new databases, etc.). #747
- Azure/SQL Server: Stored procedures and functions were not scriptable. #743

## 1.17.10 - 2025-10-03

### Changed

- Sign in: Added web based sign in option including support for Google. #742

### Fixed

- Results: Fixed type collision issue when using data formatters that caused some values to not display.

## 1.17.9 - 2025-10-02

### Changed

- Backup/Restore: Added backup and restore functionality for PostgreSQL MySQL, SQLite, and DuckDB to start to the right click context menu of their databases (uses native tools). #195

## 1.17.8 - 2025-10-01

### Changed

- Definition Provider: Added setting `dbcode.definitionProvider.defaultAction` to control Cmd/Ctrl+Click behavior on tables/views - choose between opening definition (default) or data viewer. #739
- Results: Data lookup formatters now support cross-database and cross-schema lookups.

## 1.17.7 - 2025-09-30

### Changed

- Scripting: now supports tables, triggers, indexes for most databases (Postgres, Oracle, Snowflake, SQL Server still work in progress). #389
- Copilot: Drag tables to copilot to provide it the table create statement and other context. #723

## 1.17.6 - 2025-09-30

### Changed

- Results: Added data lookup formatters (lookup a value from another table based on the current column value).
- Clickhouse: Removed from preview. #111

### Fixed

- MySQL/MariaDB: Fixed DATETIME columns being incorrectly timezone-shifted when displayed in Locale format. #85
- MySQL/MariaDB: Added charset and collation connection settings to configure character encoding. #227
- Results: Fixed Locale date format displaying incorrect datetime values when timezone conversion was applied.
- Inspector: Map view now renders PostGIS geometry columns delivered as EWKB hex. #738

## 1.17.4 - 2025-09-28

### Changed

- Editor: Added Copy Query command and default shortcut to copy the active SQL statement without executing it. #732
- SQL Export: Multi-row INSERT statements now emit as a single batch when the target dialect supports it, while Oracle and other single-row engines still receive individual statements.
- Clickhouse: Added connection option to set driver settings.
- SQLite: Updated better-sqlite3-multiple-ciphers to 12.4.1 (SQLite - 3.50.4). #727

### Fixed

- Results Grid: Filter dropdown menus stay open when activated after keyboard shortcut updates.

## 1.17.3 - 2025-09-24

### Changed

- Connections: Post-connection SQL execution option added to connection config (requires Pro/Team). #729

### Fixed

- Redshift: Could not open additional connections while introspection was running. 

## 1.17.2 - 2025-09-22

### Changed

- Connections: Added Copy Connection String to context menu of connections. #550
- Connections: Support variable substitution in SSL/TLS certificate paths. #728
- Redshift: Introspection now surfaces distribution/sort keys.

### Fixed

- Results Grid: Ensure keyboard shortcuts work even when focus is on the toolbar or empty grid space.

## 1.17.0 - 2025-09-19

### Changed

- Athena: Added initial support for Athena. #279
- Trino: Added view support, as well as execution metadata. #279
- Execution Plans: Modified plan format to be more driver based, added support for all existing databases that can produce plans. #376

### Fixed

- Results Grid: Inline edits now close when you click empty grid space, including Monaco-backed editors.

## 1.16.15 - 2025-09-18

### Changed

- Editor: Go to definition (cmd/ctrl+click) on tables, views, procedures, functions, etc now opens the alter intent.
- Editor: Right click on tables, views, etc to select open and open with limit options.
- Firebase: Fixed date handling, removed from preview. 

### Fixed

- Scripting: restored explicit column expansion for the `SELECT` script option. #726
- Roles: classify CALL/EXEC statements as EXECUTE rather than unknown. #725

## 1.16.14 - 2025-09-15

### Changed

- View Editing: View editing is now supported for databases that support it.
- Inspector: the inspector panel now has a map icon, which will render geo data on a map. #566

### Fixed

- Results: Date filters were not loading with fully loaded data. #721
- History: Fixed issue where truncated SQL was being used when loading or copying queries from the tree view instead of full SQL. #720
- LibSQL: Not correctly detecting libc on linux systems causing failure to download the native bindings. #718
- Chat: Fixed issue where where VSCode was trying to infer the default connection, and it was not set. #656

## 1.16.13 - 2025-09-12

### Changed

- Execution Plans: Added DuckDB and BigQuery support.
- Execution Plans: Added config option to aggregate grouped column values.

### Fixed

- History: Fixed crash with large history files (300MB+) by removing dedicated search index. #715


## 1.16.12 - 2025-09-10

### Changed

- Script Generation: Added advanced DML script options - MERGE, INSERT ON CONFLICT (UPSERT), UPDATE FROM, and DELETE USING. #349
- Script Generation: Improved SQL formatting with clauses on separate lines for better readability
- Execution Plans: Improved charts. #376
- Execution Plans: Added Clickhouse, libSQL, Snowflake support
- Execution Plans: Added icons for explain, analyze to the editor title menu section when supported. 
- Keyboard Shortcut: Changed shortcut to shift+ctrl+cmd/windows+o to choose database (or connection) when in a SQL file. #690

### Fixed

- BigQuery: Fixed introspection error for dataset names containing hyphens. #701
- Script Generation: Fixed issue where identity/auto-increment columns were incorrectly included in INSERT statements. #349
- Script Generation: Fixed issue where default value functions like CURRENT_TIMESTAMP were being incorrectly quoted. #349

## 1.16.11 - 2025-09-10

### Changed

- Connection Groups: Added custom sorting via drag & drop. Groups can now be reordered by dragging them to new positions. #707
- History: Added search, added table open. 
- History: Added [multi-device sync](https://dbcode.io/docs/query/history-sync). #709
- History: Converted storage format to binary crdt format.

### Fixed

- Results Grid: Cell editor now closes when clicking outside of it, and can be closed with Ctrl/Cmd+Enter. #107

## 1.16.8 - 2025-09-04

### Changed

- Execution Plans: Initial basic chart support added. #376
- Results Grid: Database selector now automatically syncs with the active editor's connection. #708

### Fixed

- Execution Plans: Added basic support for MySQL plans. #376. 
- Editor: Right click execute with DBCode was throwing an error. #705

## 1.16.7 - 2025-09-03

### Changed

- Code Completion: Experimental LS is now complete for Postgres and MariaDB dialects. 
- Exports/Share: Web page format now supports a title, date and optional SQL inclusion, along with updated rendering style.
- Execution Plans: Export and Share support added. #376
- Execution Plans: Preliminary support for Oracle added, more stats from SQL Server. #376

### Fixed

- Oracle: Fixed environment switching issue where service names were propagating between connections and environments were not properly isolated. #703
- Results Grid: Fixed text jumping issue when hovering over cells with relationship icons. #695
- SQL Server: Fixed inconsistent decimal formatting. #689

## 1.16.6 - 2025-09-01

### Changed

- Execution Plans: Initial preview of execution plan support has been added. #376. 
- Connection Pinning: Added Oracle, DB2, ClickHouse, and Snowflake (with SSO token caching) support for connection pinning to maintain session state across query executions. #663
- BigQuery: Use table list api when opening a table (only possible when no sorting or filtering applied). #693
- BigQuery: Added support for dry run query execution. #693
- BigQuery: Always show bytes billed, even if 0. #693
- BigQuery: Added BI Engine information to the meta data display when present. #693

## 1.16.5 - 2025-08-29

### Changed

- Keyboard Shortcut: shift+cmd/ctrl+d shift+cmd/ctrl+b will open up selector to choose database (or connection) when in a SQL file. #690
- Connection Pinning: Added MariaDB, and MySQL to pin a connection to the editor. #663
- Connection Settings: Added [variable substitution](https://dbcode.io/docs/connections/variables) support for file paths in connection configurations. Supports `${workspaceFolder}`, `${workspaceRoot}`, `${home}`, `${env:VARIABLE_NAME}`, and relative paths. #683
- USE Command: Will update displayed database when database supports USE command and connection pinning.
- Bigquery: Added Bytes billed metadata. #693

## 1.16.4 - 2025-08-25

### Changed

- Results: Added keyboard shortcuts to the tooltips.

### Fixed

- SQLite: Fixed issue where primary keys were not detected when not present in PRAGMA_index_list.
- Cassandra: Fixed SSL certificate validation errors. #640
- Oracle: Fixed crash when using Instant Client after initialization. #674

## 1.16.3 - 2025-08-24

### Changed

- Firebase: Added support for editing sub collections. 
- Firebase: Added support for multiple Firestore databases.
- Code Completion: Experimental LS now provides table/column context and CTE understanding.

### Fixed

- Trino: Fixed map, array, and row types displaying as "[object Object]" in query results. #670

## 1.16.2 - 2025-08-22

### Changed

- Firebase: Handles setting (undefined) for a value to make the key undefined.
- MongoDB: Handles setting (undefined) for a value to make the key undefined.

### Fixed

- Added groups to escaped identifier list.

## 1.16.1 - 2025-08-20

### Changed

- Result: Editor now auto formats and focuses when opened, as well as auto detecting language.
- Firebase: Will destructure data into keys where possible allowing specific key editing.
- Code Completion: Will use new experimental language server if enabled. 

### Fixed

- SQL Server: Fixed BIT columns incorrectly exported as 'true'/'false' instead of 1/0 in SQL Insert statements. #658

## 1.16.0 - 2025-08-19

### Changed

- Firebase: Added initial preview support for Firestore and Realtime (editing not supported yet, might be some bugs.) #295
- Syntax validation: Fixed semantic validation not working, enhanced grammar support, added fallback ANSI grammar.

## 1.15.0 - 2025-08-17

### Changed

- Parquet: Added support for parquet files. #177
- Avro: Added support for Avro files. 
- Redis: Added editing support (update, delete, insert), as well as editor logic for hash/sets. #39
- CSV and Excel: Underlying files will be watched for changes, and re-load the data if the underlying file changes.

### Fixed

- Tunnels: Will now better handle reconnecting, and if it fails, will close connections that were using them to avoid connections attempting to use closed tunnels.
- Notebooks: Fixed issue with canceling and connection pinning. #663

## 1.14.30 - 2025-08-14

### Changed

- Syntax validation: Experimental support for SQL syntax validation added (Postgres and Maria/MySQL initially).

### Fixed

- Postgres: Would not format data types correctly on initial table load in some cases. #107
- Excel: Was not filtering reserved words in sheet names. #659

## 1.14.29 - 2025-08-08

### Changed

- Results: VSCode editor now used in JSON/XML datatypes, and can be opened on any field using the open in editor icon (replaces old open in editor). #107
- Connection Pinning: Will now destroy a connection if keep alive statement fails. #578 #648

### Fixed

- Trino: Uses line numbers in errors to reduce highlighting when present.
- Export: Fixed issue with SQL Insert statement export. #655
- Inspector: Show correct data types in the JSON view.
- Inspector: Added proper editor to JSON and XML data types. #107

## 1.14.28 - 2025-08-07

### Changed

- Results: Support for data [formatting](https://dbcode.io/docs/data/formatters) completed.
- Inspector: Updated to use VSCode editor.

### Fixed

- DB2: Fixed issue with SSL connections. #652

## 1.14.26 - 2025-08-06

### Changed

- Results: Added support for data [formatting](https://dbcode.io/docs/data/formatters) (work in progress).
- Results: Selecting a full row and pressing delete/backspace will now delete the row, rather than clear the contents (cmd/ctrl+delete/backspace will delete partially selected row). 

### Fixed

- Dragging a table to a new window did not load the data. 
- Greenplum: Fixed introspection issue. #651
- Doris: Fixed introspection issue. #645
- Results: Fixed issue with sorting other columns, when primary key sorting setting was enabled.

## 1.14.25 - 2025-08-02

### Fixed

- Autocomplete: Fixed issue where it was not working for some databases. #643
- Redshift: Removed JSON method from introspection. #644

## 1.14.24 - 2025-08-01

### Changed

- Connection Pinning: Added support in notebooks, and for Postgres. #578
- Redshift: Added support for external tables (Spectrum). #613

### Fixed

- Postgres: Introspection does not get columns for partitioned tables (redundant).
- Postgres: Don't change schemas for non user based SQL execution. #507
- Oracle: Fixed syntax error being displayed rather than driver error in certain cases.

## 1.14.23 - 2025-07-30

### Changed

- Export/Share: Added support for tab delimiters in CSV export.

### Fixed

- Improved introspection performance for large schemas (1000+ schemas)

## 1.14.22 - 2025-07-28

### Fixed

- Explorer mapping columns to incorrect tables in some cases. #628
- IBM DB2: Added latest bindings. #636
- MySQL/MariaDB: Filtering for year was using date rather than number. #633
- Postgres: Updated to support AWS Aurora DSQL. #637
- Parameters: The data type dropdown was not always visible.

## 1.14.21 - 2025-07-24

### Changed

- Data: Transpose mode finalized. #554

### Fixed

- Oracle: executing of begin.. end; blocks fixed. #619

## 1.14.20 - 2025-07-21

### Fixed

- Notebooks: Restore cell height and chart width saved with output. #623
- SQL Parsing: Better handling of begin.. end; blocks. #619
- Supabase: Fixed issue when projects did not use branches. #624

## 1.14.19 - 2025-07-18

### Changed

- Data: Transpose mode improved, cmd/ctrl+t to toggle transpose mode, undo still needs work when switching modes. #554

## 1.14.18 - 2025-07-17

### Changed

- Data: Transpose mode improved, some issues with switching modes with pending edits still to be resolved. #554
- Inspector: Added form view with editing support, search and copy feature, and support for transposed results.
- Results: Simplified selection UX, allowing for duplicating partial rows.
- SQLite: Added support for an idle timeout. #615

### Fixed

- Added index as an escaped identifier. #620
- Results: Reduced row heights when a smaller font size is used.

## 1.14.17 - 2025-07-14

### Changed

- Data: Transpose icon added to allow transposing the data in the results grid (in preview, still working on it). #554
- SQL Server/Azure: System tables are now grouped into their own System Tables section in the explorer if present. 

### Fixed

- Autocomplete: Aliased tables across databases which did not support schemas were not being handled correctly.
- Connection Pinning: Added keep alive for SQL Server. #611

## 1.14.16 - 2025-07-10

### Changed

- ERD: Now part of the core features.
- Notebook Export: Now part of the core features.
- Export/Share: Last used theme is now remembered.

### Fixed

- MCP: Autostart was prompting to sign in/activate, even when already signed in. #610
- Results: Refreshing table data with schema changes was not reflecting updated schema (eg new columns not being shown).
- Notebook Export: Fixed issue with formatting of tables.

## 1.14.15 - 2025-07-03

### Changed

- ERD: Added option to change the connecting line style, and remember the choice.
- API: Updated connections will run change detection and re connect if details like port, password, etc change. #568

### Fixed

- Postgres: Fixed issue with introspection not getting default values.
- Postgres: Fixed issue with introspection not getting foreign key columns.
- Yugabyte: Fixed introspection issue. #591
- Editor: Fixed parsing create package statements.

## 1.14.14 - 2025-06-29

### Changed

- Export: Remember CSV settings for the next export. #599
- ERD: Will remember the position of tables if they are re arranged.

### Fixed

- MCP: Autostart was not always working.
- ERD: Improved cardinality display.

## 1.14.13 - 2025-06-24

### Changed

- Editor: Connections are now pinned to the editor for re use. Supporting temp tables, and other temporary objects/commands. (SQL Server only to start with). #578 
- SQLite: Added memory option for creating a memory only database. #595

### Fixed

- Offline license display in the account section now, including ability to remove the license.
- Using an offline license is only possible now when not being signed into an account.

## 1.14.12 - 2025-06-23

### Changed

- Setting: Added a setting (useExecuteCodeLens) to control if the execute code lens is shown in the editor. #358 #586
- DuckDB: Updated driver to 1.3.1. #592
- ERD: Any open diagrams will automatically update on changes to related schema/database. #383
- ERD: Hovering over a table will show its relationships.
- ERD: Added option to filter the columns displayed in the diagram to only show key columns or just table names.

### Fixed

- DBCode icon was not showing if the panel display was set to show icons only. 
- StarRocks: Fixed issue with introspection. #585
- SQLite: Fixed sqlean extension not being loaded correctly on windows. #593
- Results: Improved web page export, added maximize button.

## 1.14.11 - 2025-06-18

### Changed

- ERD: Supports keyword search, clicking a table to highlight relations, cardinality shown on connections, (sharing a work in progress). #329
- Connection Import: You can now import connections from Azure Data Studio, pgAdmin or CSV files. #494
- Autocomplete: Will now offer join syntax when adding joins. #204
- API: Added an API for other extensions to use. #568
- Export: Added option to suppress quotes in csv export. #589

### Fixed

- Bigquery: Not filtering columns in the explorer for external tables. #580
- Notebook: Fix export not rendering charts. #206
- Parser/Autocomplete: Improved more syntax understanding.
- MCP: Added required to parameter descriptions where appropriate. #581
- Postgres: Fixed datatype issue.. #514 #491

## 1.14.10 - 2025-06-13

### Changed

- Notebook: Export now supports file uploads for images, videos etc, as well as compressing document content.

## 1.14.9 - 2025-06-13

### Changed

- Notebook: Export completed. #206
- Sharing: Support for custom S3 compatible bucket/custom domain name. #207
- Export / Sharing: Web Page option added allowing to export functional results grid. 

## 1.14.7 - 2025-06-11

### Changed

- Notebook: Export UI improved, preview of HTML export in palce, results and charts not hydrated yet. #206
- Results: Re worked the share panel to include export, and allow custom delimiter for CSV. #547
- DuckDB: Updated driver to 1.30. #573
- Oracle: Capturing dbms_output.put_line statements to output tab. #574

### Fixed

- Parameters: Incorrectly picking up parameters in some quoted strings. #575

## 1.14.6 - 2025-06-09

### Changed

- Setting: Wrap Cell Text: Control if cell text should be wrapped by default. #565
- Results: Right click a column heading to select to wrap/unwrap text. #565

### Fixed

- Trino: Used jdbc schema where possible. #571
- MCP Server: Made query string auth more reliable in Cursor. #567
- SQLite: Fixed explain plan execution. #570
- Oracle: Introspection error. #543
- Notebook Export: Fixed PDF formatting for tables and code blocks, enabled PDF encryption. #206

## 1.14.5 - 2025-06-06

### Changed

- Results: Added option to count all rows when red row count is shown. #509
- SQLite: Added sqlite-js and sqlean extensions.
- Editor: If you use the keyboard shortcut, or execute icon without the cursor in an active statement, you will be prompted to confirm executing the whole document. 

## 1.14.1 - 2025-06-05

### Changed

- Import: Auto match columns based on name. #555

### Fixed

- SQL Server: Windows Authentication was broken after version 1.13.17. #563

## 1.14.0 - 2025-06-04

### Changed

- Azure Synapse: Added support for Synapse. #544
- Explorer: Added right click options to create, drop and rename schemas where applicable.
- Colors: Added dbcode.activeStatementBackground and dbcode.activeStatementBackground. #542

### Fixed

- Postgres: Re worked detection of support for using internal PG functions in introspection. #548
- Clickhouse: Decode map data types #562 

## 1.13.18 - 2025-06-03

### Changed

- Query Parameters: Support reuse of parameters.. eg &actorId||1||number can be re used in the same query as just &actorId

### Fixed

- Postgres: Introspection was failing on 9.3 #551
- SQL Server: Support Microsoft Fabric SQL Servers. #382
- Query Parameters: Fixed dates with time in them. 
- Results: Removed contains and other non support filter types on UUID columns.

## 1.13.17 - 2025-05-27

### Fixed

- Clickhouse: Re working this to pick up the standard ones as a fallback. #538
- SQL Server: Introspection performance improvements. #425
- SQL: Various engines need backslash \ escaped in string literals. #540

## 1.13.16 - 2025-05-27

### Fixed

- Supabase: Was not correctly switching projects for db account creation. #536
- Clickhouse: Catch a few more non standard SQL statements that need to run through the command path. #538
- Redis: Show empty keyspace is none are found. #535

## 1.13.14 - 2025-05-24

### Fixed

- Postgres: Was not handling search path's with escape characters "\$user". #537
- Notebooks: Export was incorrectly ordering code blocks. #206
- Notebooks: Not always restoring output in some cases when output was saved with the notebook. 

## 1.13.13 - 2025-05-22

### Changed

- Accounts: Added support for offline/air gapped licenses [More](https://dbcode.io/docs/accounts/offline-license). #486

### Fixed

- BigQuery: Was not handling structs (the driver internally calls them record's as it turns out). #533

## 1.13.12 - 2025-05-21

### Fixed

- Oracle: Introspection was hanging on some versions. #160
- Snowflake: Fixed issue with manual authentication. 
- Redshift: Fixed issue moving across schemas. #493
- Notebook: Export code blocks now style correctly. #206

## 1.13.11 - 2025-05-20

### Changed

- Notebook: Export now supports PDF. #206

### Fixed

- SQL: Added from as a reserved word. #531
- Postgres: Fixed compatibility with 9.2 #530

## 1.13.10 - 2025-05-19

### Changed

- Snowflake: Added support for security role in the connection. #271

### Fixed

- Stored Procedures: Were not editable. #525
- Clickhouse: Support for passing format null to ignore results, fixing more statements with non standard result returns. #526
- Definition Provider: Handle database.schema notation, also handle quoted identifiers. #528
- Redis: Fixed opening All Keys. #522

## 1.13.9 - 2025-05-19

### Fixed

- Excel: Will now ignore type conversion errors, and make cell null #521
- Postgres: Don't use information_schema to get tables/views, it was filtering out tables the user did not have permissions for. #512

## 1.13.8 - 2025-05-18

### Changed

- Notebook: Export feature has been added in preview, cannot save pdf/publish yet, chart rendering is still a work in progress. #206
- Favorites: Add items from the DB Explorer, files and text to save items as favorites in the current workspace.

### Fixed

- Clickhouse: Delete and insert queries were failing. #518
- Cloud providers: Fixed issue with expanding some providers. #517

## 1.13.5 - 2025-05-15

### Changed

- SQL Server: Included support for SQL Server 2012 and above. #487

### Fixed

- Oracle: 12.1 support fixed, also fixed an error with primary key mapping. #160, #505 #499
- Output tab: Was too big in notebook output. #513

## 1.13.3 - 2025-05-15

### Changed

- DB Explorer: Is now decoupled from connections, should be faster, and be more explicit about when connections are connecting/refreshing.

### Fixed

- SQLite: Better detection of when to use raw method. #511
- Results: Inserts cross schema were not reflecting the correct schema. #510

## 1.13.2 - 2025-05-13

### Changed

- New schema storage model.
- Clickhouse: Now has a request timeout setting in the configuration. #508

### Fixed

- Oracle: Changed compatibility to 12.1.0
- Explorer in some cases could miss map columns to a table.

## 1.13.1 - 2025-05-13

### Changed

- Cassandra: Moved to new introspection model.
- Mongo: Moved to new introspection model.
- Files associated to connections will be remembered per workspace. #412
- Removed the @dbcode Chat Participant in favor of copilot tools and providing context.
- Setting: Workspace Connection: You can set a workspaces default connection, it will be stored in settings and used in quick open, and Copilot Tools. #237
- Copilot/MCP: Added a tool that will get the default connection that if configured for a workspace.

### Fixed

- Oracle: Getting support for 12c sorted. #160
- Right click opening files in windows was incorrectly setting file path.

## 1.13.0 - 2025-05-11

### Changed

- Trino: Preview support added. #172
- DuckDB: Supports using a memory only database. #501

### Fixed

- Definition on hover will match schemas regardless of case. #488
- Clickhouse: Datatypes are better supported. #462 #463
- Create Database: Was not working in the context menu.

## 1.12.7 - 2025-05-09

### Changed

- Oracle: Moved to new introspection model.

### Fixed

- Oracle: Fixed byte sequence error. #477 #456 
- Oracle: Use version rather than version_full. #160 
- Fixed: Sample database no longer includes extension version in the path. #498

## 1.12.6 - 2025-05-09

### Changed

- Tab Reuse: Changed to follow VSCode enabled limit and limit value, will recycle only if limit editable and tab limit reached. 
- Output tab: Shows the execution history and output statements for Databases that support them (SQL Server, Postgres).
- Allow air gapped computers to provide required packages manually. #486

### Fixed

- Clickhouse: Support describe statements

## 1.12.5 - 2025-05-07

### Changed

- Accounts: Added a refresh to the account section to refresh information and not require a logout/in.

### Fixed

- Autocomplete: Fixed issue with alias not always being matched. #484
- CockroachDB: Error with cluster id caused by SSL configuration in #445
- Tab Reuse: if workbench.list.openMode is set to doubleClick tabs wont be re used, since no way to track the double click, and without it only one tab can be opened.

## 1.12.4 - 2025-05-05

### Fixed

- Postgres: Was not handling infinity/-infinity dates. #482
- Quick Script: Was not setting connection on the new file. #349
- Open new file: Was not working when executed from the command pallet instead of the tree. #483

## 1.12.3 - 2025-05-02

### Changed

- SSL: Configurations that are discovered now use the OS ssh command. #445
- Drop items from the explorer onto the tree to script them. #348

## 1.12.2 - 2025-04-30

### Changed

- Quick Script: Select, Insert, Update, Delete scripts can be generated from the context menu of items like tables, views. #349
- Item Filter: Now supports SQL like and not like like filter values eg: not like pg_temp%. #461

### Fixed 

- Postgres: Introspection bug. #416

## 1.12.1 - 2025-04-29

### Changed

- External Tables: Now listed in their own section. #472 
- Tunnels: Added host and port connection test.
- DB2: Out of preview #82

### Fixed

- Connection Add/Edit: Disabled connection test if a tunnel was used. 
- Azure: Better support for Synapse databases. #471

## 1.12.0 - 2025-04-26

### Changed

- Microsoft Dataverse (Power platform): Added support. #458
- RisingWave: Added Support. #465

### Fixed

- Snowflake: Handle an empty error. #448
- Azure: Better support for SQL Server variants that don't support system_columns. #460

## 1.11.12 - 2025-04-24

### Changed

- Reuse tabs when opening tables and views. Follows VSCode reuse based on single or double click. #211
- Connection Add/Edit: Added DNS and Port connection test. 

## 1.11.11 - 2025-04-24

### Changed

- Tunnels: Added support for ProxyCommand in ssh.config. #445
- Tunnels: Fixed auth methods. #257

### Fixed

- Snowflake: Handle an empty error. #448

## 1.11.10 - 2025-04-23

### Fixed

- Race condition on first time initialization. #457

## 1.11.9 - 2025-04-22

### Fixed

- Connection Add/Edit: Fixed responsive issues on small screens. #447
- Turso: Removed user_version statement. #446
- Escaped more SQL Keywords. #444
- FileStore: Added logging to filestore operations. #440 #425
- Clickhouse: Enabled request/response compression. #111
- Postgres: Handle switching to schemas that need escaping. #439

## 1.11.8 - 2025-04-14

### Changed

- Setting: Wrap Tabs. Controls if tabs are wrapped or scrolled (default) when there are more than can be displayed.

### Fixed

- Large Schema Performance: Much improved. #425 #378
- Table Editing: Don't quote the default value. #437

## 1.11.6 - 2025-04-12

### Fixed

- Improved filter icon showing toggled state, and key column data type icons when toggling filter.
- SQL statements not being added to the tabs. #418
- Improved simplified Chinese translation. #427
- Better handling of databases with no access for configured authentication. #421
- Snowflake: Fixed introspection issue. #422

## 1.11.5 - 2025-04-11

### Changed

- Passwords: Expose the config key values as environment variables to the password command. #428

### Fixed

- Results: Adding rows would not work with null values. #430

## 1.11.4 - 2025-04-09

### Changed

- SSH Tunnel: Prevent auto close if no active connections.

### Fixed

- Results: Allow tabs to wrap. #418
- Results: Reduced size of quick search to allow more tab space, added visual tab separators.
- Quick Open: Remembers last used connection, shows path, shows all items once inside a connection level and user starts typing. #237
- SQL Server: Updated databases to show when the user account does not have access. #421
- Snowflake: Fixed introspection issue. #422

## 1.11.2 - 2025-04-09

### Changed

- Welcome Panel: Re designed.
- Connection: Re designed the add and edit screens.
- Tunnel: Re designed the add and edit screens.

### Fixed

- Editor: Looses focus when executing statements. #420

## 1.11.1 - 2025-04-07

### Changed

- Quick Open: Open tables, views, stored procs and other entities that can be clicked on in the explorer via the keyboard shortcut ctrl+windows+o (Mac: cltr+cmd+o). #237
- New Connection: Revised layout, added search feature.
- DB Explorer: Added column names to the index description.
- Results: Esc key will now close relationship sub results in reverse order to how they were opened.

### Fixed

- Passwords: When generated by a command, the output is now trimmed to remove whitespace characters. #415
- SQL: Don't treat numbers with leading 0's as strings. #409
- Results: Fixed horizontal scrolling with the wheel when not full rows. 

## 1.11.0 - 2025-04-04

### Changed

- ClickHouse: Preview support released. #111

### Fixed

- Zero Config: Handle drive paths on windows correctly. #408
- SQL Server: Detect unicode characters before N quoting. #409
- DB Explorer: Don't fetch databases if we already have them on another connection. #405
- Timescale: Filtered out internal timescale schema. #378
- Postgres: Improved types discovered on introspection. #378

## 1.10.7 - 2025-04-03

### Fixed

- Postgres: Inherited tables now show in the table list. #406
- Postgres: Databases sizes are now fetched in the background. #405
- Postgres: Improved introspection speed on foreign keys. #378
- Trae: Fixed loading in TRAE VSCode fork. #404
- Results: Fixed theme color mapping in the inspector. #341
- Notebooks: Failed to save outputs when results still executing. #381

## 1.10.6 - 2025-04-02

### Changed

- Results: Added an Inspector to the right hand tools. #341
- Results: Removed Filters from the right hand tools.
- Results: Filter or exclude selected values via context menu. #401
- Setting: Result Location. Control where results are shown (panel, beside editor, below). #77

### Fixed

- Azure: Insufficient permissions to system views/columns. #361

## 1.10.4 - 2025-03-30

### Changed

- Notebook: Cells can be now be locked to specific connections, different to the other cells in the noteboook. #308
- DB Picker: Added path details, back button, made sticky while loading.

### Fixed
 
- Notebook: Failed to render in some cases.

## 1.10.3 - 2025-03-28

### Fixed

- Relationships: Browsing across relationships now work correctly with binary foreign key fields.
- SQL: Added more keywords to the escape list for identifiers. #385
- Results: Insert file on binary field only shows when editing the cell.
- Postgres: Performance regression with large number of schemas. #378

## 1.10.2 - 2025-03-28

### Fixed

- Reduced bundle size, increased loading performance slightly.
- Postgres: Regression on data type handling. #396 #397
- package.json: Updated configuration schema. #395

## 1.10.0 - 2025-03-27

### Changed

- Greenplum: Added support for Greenplum. #392
- Postgres: Moved to new introspection model, improves performance, added support for table partitions and row level security. #278 #165 #378
- Postgres: Support versions 9.2 and above.

### Fixed

- Inline completion: Fixed cross database not suggesting columns in select again. #157
- MongoDB: Was not working with the advanced filter.
- MongoDB: Fixed mixed datatype. #393

## 1.9.5 - 2025-03-26

### Changed

- Added toolbar icon to open current SQL in the editor (including applied filters/sorting).
- Added separators to the toolbar for better visual separation.

### Fixed

- Advanced Filter: Use equals and not equals symbols, rather than words.
- Editor: Insert statement parameters are now highlighted if the cursor is in a value. #352
- Autocomplete: Was not working with escaped identifiers in dot notation. #391
- .vscode folder: Wont be created unless connections are stored in the workspace. #391

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
