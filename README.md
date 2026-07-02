# DBCode - SQL & Database Client for VS Code

<p align="center">
	<a href="https://marketplace.visualstudio.com/items?itemName=DBCode.dbcode"><img src="https://vsmarketplacebadges.dev/installs-short/DBCode.dbcode.svg?label=Marketplace%20Installs&color=blue" alt="VS Code Marketplace Installs"/></a>
	<a href="https://open-vsx.org/extension/DBCode/dbcode"><img src="https://img.shields.io/open-vsx/dt/DBCode/dbcode?label=OpenVSX%20Downloads&color=blue" alt="OpenVSX Downloads"/></a>
	<a href="https://marketplace.visualstudio.com/items?itemName=DBCode.dbcode&ssr=false#review-details"><img src="https://vsmarketplacebadges.dev/rating-short/DBCode.dbcode.svg?label=Rating&color=blue" alt="Rating"/></a>
	<a href="https://discord.gg/FvAzEAHb9w"><img src="https://img.shields.io/discord/1257023271002570804?label=Discord&color=blue&logo=discord&logoColor=white" alt="Discord"/></a>
</p>

<p align="center"><strong>A modern database client for VS Code, Cursor, and Windsurf - with first-class Copilot and MCP integration.</strong></p>

<p align="center">Write SQL with IntelliSense, edit table data in place, and manage 80+ databases without leaving your editor. SQL Notebooks, auto-generated ER diagrams, charts, and secure report sharing built in.</p>

<p align="center"><sub>Available on the <a href="https://marketplace.visualstudio.com/items?itemName=DBCode.dbcode">VS Code Marketplace</a> and <a href="https://open-vsx.org/extension/DBCode/dbcode">OpenVSX</a> (for Cursor, Windsurf, and other VS Code forks).</sub></p>

<p align="center">
	<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL"/>
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL"/>
	<img src="https://img.shields.io/badge/SQL%20Server-CC2927?style=flat&logo=mssqlserver&logoColor=white" alt="SQL Server"/>
	<img src="https://img.shields.io/badge/SQLite-003B57?style=flat&logo=sqlite&logoColor=white" alt="SQLite"/>
	<img src="https://img.shields.io/badge/Oracle-F80000?style=flat&logo=oracle&logoColor=white" alt="Oracle"/>
	<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB"/>
	<img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Redis"/>
	<img src="https://img.shields.io/badge/DuckDB-FFF000?style=flat&logo=duckdb&logoColor=black" alt="DuckDB"/>
	<img src="https://img.shields.io/badge/Snowflake-29B5E8?style=flat&logo=snowflake&logoColor=white" alt="Snowflake"/>
	<img src="https://img.shields.io/badge/BigQuery-669DF6?style=flat&logo=googlebigquery&logoColor=white" alt="BigQuery"/>
	<img src="https://img.shields.io/badge/Databricks-FF3621?style=flat&logo=databricks&logoColor=white" alt="Databricks"/>
	<img src="https://img.shields.io/badge/ClickHouse-FFCC01?style=flat&logo=clickhouse&logoColor=black" alt="ClickHouse"/>
	<img src="https://img.shields.io/badge/Cassandra-1287B1?style=flat&logo=apachecassandra&logoColor=white" alt="Cassandra"/>
	<img src="https://img.shields.io/badge/Elasticsearch-005571?style=flat&logo=elasticsearch&logoColor=white" alt="Elasticsearch"/>
	<img src="https://img.shields.io/badge/Neo4j-4581C3?style=flat&logo=neo4j&logoColor=white" alt="Neo4j"/>
	<img src="https://img.shields.io/badge/Firebase-DD2C00?style=flat&logo=firebase&logoColor=white" alt="Firebase"/>
	<img src="https://img.shields.io/badge/DynamoDB-4053D6?style=flat&logo=amazondynamodb&logoColor=white" alt="DynamoDB"/>
	<img src="https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white" alt="MariaDB"/>
</p>

<p align="center">
	<a href="https://dbcode.io">80+ supported databases, warehouses, lakehouses, and file formats</a>
</p>

- **SQL databases**: PostgreSQL, MySQL, SQL Server, SQLite, MariaDB, Oracle, Azure SQL, IBM DB2, IBM i (AS/400), CockroachDB, TiDB, TimescaleDB, YugabyteDB, SingleStore, H2, Firebird, Apache Derby, Microsoft Access, SAP ASE (Sybase), Dameng, KingbaseES, libSQL, PGlite, Cloudflare D1, Google Cloud Spanner
- **Warehouses & analytics**: Snowflake, BigQuery, Redshift, Databricks, ClickHouse, DuckDB, MotherDuck, Amazon Athena, Azure Synapse, Microsoft Fabric, Teradata, Vertica, Netezza, Exasol, Greenplum, Apache Doris, StarRocks, Apache Druid, Apache Pinot, Apache Hive, Apache Impala, Trino, Cube
- **Lakehouses**: Apache Iceberg, DuckLake
- **NoSQL & document**: MongoDB, Amazon DocumentDB, Apache CouchDB, Couchbase, RavenDB, Firebase, DynamoDB, Cassandra, ScyllaDB, Aerospike, Elasticsearch, OpenSearch, SurrealDB, TypeDB, Redis, Memcached
- **Graph & vector**: Neo4j, Memgraph, Pinecone, Chroma, Milvus, Qdrant, Weaviate, LanceDB
- **Streaming & time series**: InfluxDB, QuestDB, RisingWave, Apache Kafka, RabbitMQ
- **SaaS & app platforms**: Salesforce, Microsoft Dataverse, Bunny
- **Files**: CSV, Excel, Parquet, Avro

## Data Viewing & Editing

<img width="100%" alt="VS Code database GUI - filter, sort, group, and edit data" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/editing.gif">

- Filter, sort, and group data with a few clicks
- Edit rows directly: insert, update, delete without writing SQL
- Changes verified before execution so you don't have a production horror story

## AI & Copilot Integration

<img width="100%" alt="GitHub Copilot database queries - natural language to SQL" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/copilot.gif">

Query your data with natural language. Ask schema questions, generate queries, create tables.

## Entity Relationship Diagrams (ERD)

<img width="100%" alt="Auto-generated ER diagrams from database schema" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/erd.gif">

Auto-generated diagrams from your live database schema. Export as PDF, HTML or PNG.

## Foreign Key Navigation

<img width="100%" alt="Navigate database foreign key relationships" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/relationships.gif">

Click any foreign key value to jump to the referenced row. Navigate relationships without writing JOINs.

## SQL Editor with IntelliSense & Autocomplete

<img width="100%" alt="VS Code SQL editor with intellisense and autocomplete" src="https://github.com/dbcodeio/public/assets/1918994/650632b0-da26-4b98-9f66-5138a7db1e7e">

Full SQL editor with database-specific syntax highlighting, autocomplete, and inline signature help.

<img width="100%" alt="SQL autocomplete with table and column intellisense" src="https://github.com/dbcodeio/public/assets/1918994/1efd912b-7750-47d0-a2e9-7aaaff0b0c52">

- Database-specific SQL keywords and syntax
- Table, view, and procedure autocomplete with column types

## Secure Report Sharing

<img height="300" alt="Encrypted database report sharing" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/share.png">

Share query results as encrypted reports. No credentials or raw data exposed.

## SQL Notebooks

<img width="100%" alt="VS Code database notebooks - SQL and Python" src="https://github.com/dbcodeio/public/assets/1918994/6295585e-f13f-46b7-98e1-80e850485db1">

SQL and Python cells in VS Code Notebooks. Query, analyze, and document in one place with Jupyter kernel integration.

## Stored Procedures & Functions

<img width="100%" alt="Edit stored procedures and functions in VS Code" src="https://github.com/dbcodeio/public/assets/1918994/dae92d32-13b7-4f90-8bcb-67116a5468cd">

Edit and deploy database logic directly from VS Code. Full syntax support for PL/pgSQL, T-SQL, PL/SQL, and more.

## Data Visualization

<img width="100%" alt="Database query result charts and graphs" src="https://github.com/dbcodeio/public/assets/1918994/d1d33ee9-9b3b-408f-9477-f208cf2adf87">

Transform query results into charts and graphs. Bar, line, pie, scatter, and more.

## Data Compare

Compare data between tables, databases, or connections. See differences side-by-side, generate sync scripts, or apply changes directly. [Learn more](https://dbcode.io/docs/data/compare)

## Zero Config Connections

Automatically discovers database connections from your project's `.env`, `application.properties`, `database.yml`, `settings.py`, and other config files. Supports Laravel, Django, Spring Boot, Node.js, Rails, and more. [Learn more](https://dbcode.io/docs/connections/zero-config)

## Query Execution Plans (EXPLAIN)

Visualize EXPLAIN and ANALYZE output as interactive node graphs. Identify slow operations, see row estimates vs actuals, and drill into cost breakdowns. Supported for PostgreSQL, MySQL, SQL Server, and more. [Learn more](https://dbcode.io/docs/query/execution-plans)

## More Features

**Data**
- **Import/Export**: CSV, Excel, JSON, Parquet, Avro
- **Backup/Restore**: Native tools for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB
- **File Formats**: Open and edit CSV, Excel, Parquet, Avro files directly
- **Data Formatters**: Lookup values from other tables, expand JSON columns
- **[Inferred Relationships](https://dbcode.io/docs/data/relationships)**: Define relationships for databases without foreign keys (MongoDB, DynamoDB)
- **[Data Search](https://dbcode.io/docs/data/search)**: Search across all columns in a table

**Query & Analysis**
- **Transaction Control**: Manual commit/rollback with auto-commit toggle
- **SQL Filters**: WHERE clause filtering with saved filters
- **Query Parameters**: Reuse queries with different inputs
- **[Query History](https://dbcode.io/docs/query/history)**: Full history with search, re-execute, and [sync across devices](https://dbcode.io/docs/query/history-sync)

**Connectivity**
- **[Auth Profiles](https://dbcode.io/docs/authentication-profiles)**: OAuth, AWS SSO, 1Password, HashiCorp Vault
- **[SSL Auto Config](https://dbcode.io/docs/connections/auto-ssl)**: Automatic SSL for known hosts
- **[SSH Tunnels](https://dbcode.io/docs/connections/ssh-tunnels)**: Manual config or auto-discovery from SSH config
- **Command Tunnels**: Local proxy tools (cloud-sql-auth-proxy, kubectl port-forward, AWS SSM)

**AI**
- **Copilot Chat**: Drag tables into Copilot, natural language queries
- **[MCP Integration](https://dbcode.io/docs/ai/mcp)**: Model Context Protocol for AI tools with full schema context
- **Inline Completion**: AI-powered SQL code completion

**VS Code Integration**
- **Theme Support**: Full compatibility with VS Code themes
- **Localization**: Available in all VS Code supported languages

[All Features](https://dbcode.io/features/) · [Documentation](https://dbcode.io/docs)

## Works with VS Code, Cursor & Windsurf

DBCode runs anywhere VS Code does. Install from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=DBCode.dbcode), or from [OpenVSX](https://open-vsx.org/extension/DBCode/dbcode) for Cursor, Windsurf, VSCodium, and other VS Code forks. Your connections, saved queries, and AI integration work the same in every editor.

## Coming from DBeaver, DataGrip, TablePlus, or SQLTools?

- **From DBeaver?** The same multi-database coverage - Postgres, MySQL, SQL Server, Oracle, and 80+ more - with native AI built in, and no separate Java app to run.
- **From DataGrip?** Power-user features like execution plans, data compare, and stored procedure editing, without leaving your editor or paying JetBrains pricing.
- **From TablePlus?** Cross-platform and integrated: no separate app to alt-tab to, with Copilot and MCP built in.
- **From SQLTools?** Everything you use it for, plus inline data editing, ER diagrams, NoSQL support, and native AI - one extension, no per-database driver installs.

[See the full comparison →](https://dbcode.io/compare)

## Pricing

Core features are free, forever. Some advanced features require a subscription. See [Pricing](https://dbcode.io/pricing).


## Telemetry

Anonymous usage data is collected when VS Code telemetry is enabled. Telemetry respects your VS Code settings if disabled there, we collect nothing. See our [privacy policy](https://dbcode.io/legal/privacy-policy/).
