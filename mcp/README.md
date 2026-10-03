# DBCode MCP server

Let your AI agent query your databases through [DBCode](https://dbcode.io), using the connections you already have in DBCode.

DBCode works with 90+ databases, including PostgreSQL, MySQL, SQL Server, Oracle, SQLite, MongoDB, ClickHouse and Snowflake.

## Requirements

- The DBCode extension, installed in VS Code, Cursor, Windsurf, Antigravity or Kiro. [Install DBCode](https://dbcode.io/docs/get-started/install).
- Node.js 22.14 or newer.

## Setup

### Claude Code

```bash
claude mcp add dbcode -- npx -y @dbcode/mcp
```

### Cursor, Windsurf, Claude Desktop and other clients

Add this to the client's MCP configuration:

```json
{
  "mcpServers": {
    "dbcode": {
      "command": "npx",
      "args": ["-y", "@dbcode/mcp"]
    }
  }
}
```

Cursor, VS Code, Windsurf, Antigravity and Kiro can also connect DBCode to their built-in agent without this package. See [DBCode's MCP docs](https://dbcode.io/docs/ai/mcp).

## How it works

The package finds the newest DBCode installed on your machine and starts its MCP server. When an editor with DBCode is open, the agent works through it. With no editor open, the server reads your saved DBCode connections directly.

If you use DBCode in more than one editor, choose which editor's connections the agent sees with `--app`:

```json
"args": ["-y", "@dbcode/mcp", "--app", "Cursor"]
```

Values: `Code`, `Code - Insiders`, `Cursor`, `Windsurf`, `VSCodium`, `Antigravity`, `Kiro`.
