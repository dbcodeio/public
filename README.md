# DBCode - Database Client for VS Code

<p align="center">
	<a href="https://dbcode.io/docs" target="_blank">DOCS</a> | <a href="https://dbcode.io/changelog" target="_blank">CHANGELOG</a> | <a href="https://discord.gg/FvAzEAHb9w" target="_blank">DISCORD</a>
</p>

<p align="center">A database manager and SQL editor built into VS Code. Browse schemas, edit data, visualize queries, and manage 50+ databases without leaving your editor.</p>

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
	<a href="https://dbcode.io">50+ supported databases, warehouses, lakehouses, and file formats</a>
</p>

## Data Viewing & Editing

<img width="100%" alt="VS Code database GUI - filter, sort, group, and edit data" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/editing.gif">

- Filter, sort, and group data with a few clicks
- Edit rows directly — insert, update, delete without writing SQL
- Changes verified before execution so you don't have a production horror story

## Copilot Integration

<img width="100%" alt="GitHub Copilot database queries - natural language to SQL" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/copilot.gif">

Query your data with natural language. Ask schema questions, generate queries, create tables.

## Entity Relationship Diagrams

<img width="100%" alt="Auto-generated ER diagrams from database schema" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/erd.gif">

Auto-generated diagrams from your live database schema. Export as PDF, HTML or PNG.

## Foreign Key Navigation

<img width="100%" alt="Navigate database foreign key relationships" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/videos/relationships.gif">

Click any foreign key value to jump to the referenced row. Navigate relationships without writing JOINs.

## SQL Editor

<img width="100%" alt="VS Code SQL editor with intellisense and autocomplete" src="https://github.com/dbcodeio/public/assets/1918994/650632b0-da26-4b98-9f66-5138a7db1e7e">

Full SQL editor with database-specific syntax highlighting, autocomplete, and inline signature help.

## SQL Intellisense

<img width="100%" alt="SQL autocomplete with table and column intellisense" src="https://github.com/dbcodeio/public/assets/1918994/1efd912b-7750-47d0-a2e9-7aaaff0b0c52">

- Database-specific SQL keywords and syntax
- Table, view, and procedure autocomplete with column types

## Secure Report Sharing

<img height="300" alt="Encrypted database report sharing" src="https://raw.githubusercontent.com/dbcodeio/public/main/public/share.png">

Share query results as encrypted reports. No credentials or raw data exposed.

## Database Notebooks

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

## Execution Plans

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

## Pricing

Core features are free, forever. Some advanced features require a subscription. See [Pricing](https://dbcode.io/pricing).


## Telemetry

Anonymous usage data is collected when VS Code telemetry is enabled. Telemetry respects your VS Code settings if disabled there, we collect nothing. See our [privacy policy](https://dbcode.io/legal/privacy-policy/).
