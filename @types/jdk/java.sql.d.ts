declare namespace java {
    namespace sql {
        interface Array {
            getBaseTypeName(): string
            getBaseType(): int
            getArray(): java.lang.Object
            getArray(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getArray(arg0: long, arg1: int): java.lang.Object
            getArray(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getResultSet(): java.sql.ResultSet
            getResultSet(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.sql.ResultSet
            getResultSet(arg0: long, arg1: int): java.sql.ResultSet
            getResultSet(arg0: long, arg1: int, arg2: java.util.Map<java.lang.String, java.lang.Class<any>>): java.sql.ResultSet
            free(): void
        }
        class BatchUpdateException extends java.sql.SQLException {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int[])
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int[])
            public constructor(arg0: java.lang.String | string, arg1: int[])
            public constructor(arg0: int[])
            public constructor()
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: int[], arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: int[], arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int[], arg3: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int[], arg4: java.lang.Throwable)
            public getUpdateCounts(): int[]
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: long[], arg4: java.lang.Throwable)
            public getLargeUpdateCounts(): long[]
            public static class: java.lang.Class<any>
        }
        interface Blob {
            length(): long
            getBytes(arg0: long, arg1: int): byte[]
            getBinaryStream(): java.io.InputStream
            position(arg0: byte[], arg1: long): long
            position(arg0: java.sql.Blob, arg1: long): long
            setBytes(arg0: long, arg1: byte[]): int
            setBytes(arg0: long, arg1: byte[], arg2: int, arg3: int): int
            setBinaryStream(arg0: long): java.io.OutputStream
            truncate(arg0: long): void
            free(): void
            getBinaryStream(arg0: long, arg1: long): java.io.InputStream
        }
        interface CallableStatement extends java.sql.PreparedStatement {
            registerOutParameter(arg0: int, arg1: int): void
            registerOutParameter(arg0: int, arg1: int, arg2: int): void
            wasNull(): boolean
            getString(arg0: int): string
            getBoolean(arg0: int): boolean
            getByte(arg0: int): byte
            getShort(arg0: int): short
            getInt(arg0: int): int
            getLong(arg0: int): long
            getFloat(arg0: int): float
            getDouble(arg0: int): double
            getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
            getBytes(arg0: int): byte[]
            getDate(arg0: int): java.sql.Date
            getTime(arg0: int): java.sql.Time
            getTimestamp(arg0: int): java.sql.Timestamp
            getObject(arg0: int): java.lang.Object
            getBigDecimal(arg0: int): java.math.BigDecimal
            getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: int): java.sql.Ref
            getBlob(arg0: int): java.sql.Blob
            getClob(arg0: int): java.sql.Clob
            getArray(arg0: int): java.sql.Array
            getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
            getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
            getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
            registerOutParameter(arg0: int, arg1: int, arg2: java.lang.String | string): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int, arg2: int): void
            registerOutParameter(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
            getURL(arg0: int): java.net.URL
            setURL(arg0: java.lang.String | string, arg1: java.net.URL): void
            setNull(arg0: java.lang.String | string, arg1: int): void
            setBoolean(arg0: java.lang.String | string, arg1: boolean): void
            setByte(arg0: java.lang.String | string, arg1: byte): void
            setShort(arg0: java.lang.String | string, arg1: short): void
            setInt(arg0: java.lang.String | string, arg1: int): void
            setLong(arg0: java.lang.String | string, arg1: long): void
            setFloat(arg0: java.lang.String | string, arg1: float): void
            setDouble(arg0: java.lang.String | string, arg1: double): void
            setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
            setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setBytes(arg0: java.lang.String | string, arg1: byte[]): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
            setNull(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
            getString(arg0: java.lang.String | string): string
            getBoolean(arg0: java.lang.String | string): boolean
            getByte(arg0: java.lang.String | string): byte
            getShort(arg0: java.lang.String | string): short
            getInt(arg0: java.lang.String | string): int
            getLong(arg0: java.lang.String | string): long
            getFloat(arg0: java.lang.String | string): float
            getDouble(arg0: java.lang.String | string): double
            getBytes(arg0: java.lang.String | string): byte[]
            getDate(arg0: java.lang.String | string): java.sql.Date
            getTime(arg0: java.lang.String | string): java.sql.Time
            getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
            getObject(arg0: java.lang.String | string): java.lang.Object
            getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
            getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: java.lang.String | string): java.sql.Ref
            getBlob(arg0: java.lang.String | string): java.sql.Blob
            getClob(arg0: java.lang.String | string): java.sql.Clob
            getArray(arg0: java.lang.String | string): java.sql.Array
            getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
            getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
            getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
            getURL(arg0: java.lang.String | string): java.net.URL
            getRowId(arg0: int): java.sql.RowId
            getRowId(arg0: java.lang.String | string): java.sql.RowId
            setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
            setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            getNClob(arg0: int): java.sql.NClob
            getNClob(arg0: java.lang.String | string): java.sql.NClob
            setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
            getSQLXML(arg0: int): java.sql.SQLXML
            getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
            getNString(arg0: int): string
            getNString(arg0: java.lang.String | string): string
            getNCharacterStream(arg0: int): java.io.Reader
            getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
            getCharacterStream(arg0: int): java.io.Reader
            getCharacterStream(arg0: java.lang.String | string): java.io.Reader
            setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
            setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
            getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType): void
            registerOutParameter(arg0: int, arg1: java.sql.SQLType): void
            registerOutParameter(arg0: int, arg1: java.sql.SQLType, arg2: int): void
            registerOutParameter(arg0: int, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
            registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType): void
            registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: int): void
            registerOutParameter(arg0: java.lang.String | string, arg1: java.sql.SQLType, arg2: java.lang.String | string): void
        }
        class ClientInfoStatus extends java.lang.Enum<java.sql.ClientInfoStatus> {
            public static REASON_UNKNOWN: java.sql.ClientInfoStatus
            public static REASON_UNKNOWN_PROPERTY: java.sql.ClientInfoStatus
            public static REASON_VALUE_INVALID: java.sql.ClientInfoStatus
            public static REASON_VALUE_TRUNCATED: java.sql.ClientInfoStatus
            public static values(): java.sql.ClientInfoStatus[]
            public static valueOf(arg0: java.lang.String | string): java.sql.ClientInfoStatus
            public static class: java.lang.Class<any>
        }
        interface Clob {
            length(): long
            getSubString(arg0: long, arg1: int): string
            getCharacterStream(): java.io.Reader
            getAsciiStream(): java.io.InputStream
            position(arg0: java.lang.String | string, arg1: long): long
            position(arg0: java.sql.Clob, arg1: long): long
            setString(arg0: long, arg1: java.lang.String | string): int
            setString(arg0: long, arg1: java.lang.String | string, arg2: int, arg3: int): int
            setAsciiStream(arg0: long): java.io.OutputStream
            setCharacterStream(arg0: long): java.io.Writer
            truncate(arg0: long): void
            free(): void
            getCharacterStream(arg0: long, arg1: long): java.io.Reader
        }
        interface Connection extends java.sql.Wrapper , java.lang.AutoCloseable {
            TRANSACTION_NONE: int
            TRANSACTION_READ_UNCOMMITTED: int
            TRANSACTION_READ_COMMITTED: int
            TRANSACTION_REPEATABLE_READ: int
            TRANSACTION_SERIALIZABLE: int
            createStatement(): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string): java.sql.CallableStatement
            nativeSQL(arg0: java.lang.String | string): string
            setAutoCommit(arg0: boolean): void
            getAutoCommit(): boolean
            commit(): void
            rollback(): void
            close(): void
            isClosed(): boolean
            getMetaData(): java.sql.DatabaseMetaData
            setReadOnly(arg0: boolean): void
            isReadOnly(): boolean
            setCatalog(arg0: java.lang.String | string): void
            getCatalog(): string
            setTransactionIsolation(arg0: int): void
            getTransactionIsolation(): int
            getWarnings(): java.sql.SQLWarning
            clearWarnings(): void
            createStatement(arg0: int, arg1: int): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string, arg1: int, arg2: int): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string, arg1: int, arg2: int): java.sql.CallableStatement
            getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<any>>
            setTypeMap(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): void
            setHoldability(arg0: int): void
            getHoldability(): int
            setSavepoint(): java.sql.Savepoint
            setSavepoint(arg0: java.lang.String | string): java.sql.Savepoint
            rollback(arg0: java.sql.Savepoint): void
            releaseSavepoint(arg0: java.sql.Savepoint): void
            createStatement(arg0: int, arg1: int, arg2: int): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.sql.CallableStatement
            prepareStatement(arg0: java.lang.String | string, arg1: int): java.sql.PreparedStatement
            prepareStatement(arg0: java.lang.String | string, arg1: int[]): java.sql.PreparedStatement
            prepareStatement(arg0: java.lang.String | string, arg1: java.lang.String[]): java.sql.PreparedStatement
            createClob(): java.sql.Clob
            createBlob(): java.sql.Blob
            createNClob(): java.sql.NClob
            createSQLXML(): java.sql.SQLXML
            isValid(arg0: int): boolean
            setClientInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setClientInfo(arg0: java.util.Properties): void
            getClientInfo(arg0: java.lang.String | string): string
            getClientInfo(): java.util.Properties
            createArrayOf(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Array
            createStruct(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Struct
            setSchema(arg0: java.lang.String | string): void
            getSchema(): string
            abort(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
            setNetworkTimeout(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda, arg1: int): void
            getNetworkTimeout(): int
        }
        class DataTruncation extends java.sql.SQLWarning {
            public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: int, arg4: int)
            public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: int, arg4: int, arg5: java.lang.Throwable)
            public getIndex(): int
            public getParameter(): boolean
            public getRead(): boolean
            public getDataSize(): int
            public getTransferSize(): int
            public static class: java.lang.Class<any>
        }
        interface DatabaseMetaData extends java.sql.Wrapper {
            procedureResultUnknown: int
            procedureNoResult: int
            procedureReturnsResult: int
            procedureColumnUnknown: int
            procedureColumnIn: int
            procedureColumnInOut: int
            procedureColumnOut: int
            procedureColumnReturn: int
            procedureColumnResult: int
            procedureNoNulls: int
            procedureNullable: int
            procedureNullableUnknown: int
            columnNoNulls: int
            columnNullable: int
            columnNullableUnknown: int
            bestRowTemporary: int
            bestRowTransaction: int
            bestRowSession: int
            bestRowUnknown: int
            bestRowNotPseudo: int
            bestRowPseudo: int
            versionColumnUnknown: int
            versionColumnNotPseudo: int
            versionColumnPseudo: int
            importedKeyCascade: int
            importedKeyRestrict: int
            importedKeySetNull: int
            importedKeyNoAction: int
            importedKeySetDefault: int
            importedKeyInitiallyDeferred: int
            importedKeyInitiallyImmediate: int
            importedKeyNotDeferrable: int
            typeNoNulls: int
            typeNullable: int
            typeNullableUnknown: int
            typePredNone: int
            typePredChar: int
            typePredBasic: int
            typeSearchable: int
            tableIndexStatistic: short
            tableIndexClustered: short
            tableIndexHashed: short
            tableIndexOther: short
            attributeNoNulls: short
            attributeNullable: short
            attributeNullableUnknown: short
            sqlStateXOpen: int
            sqlStateSQL: int
            sqlStateSQL99: int
            functionColumnUnknown: int
            functionColumnIn: int
            functionColumnInOut: int
            functionColumnOut: int
            functionReturn: int
            functionColumnResult: int
            functionNoNulls: int
            functionNullable: int
            functionNullableUnknown: int
            functionResultUnknown: int
            functionNoTable: int
            functionReturnsTable: int
            allProceduresAreCallable(): boolean
            allTablesAreSelectable(): boolean
            getURL(): string
            getUserName(): string
            isReadOnly(): boolean
            nullsAreSortedHigh(): boolean
            nullsAreSortedLow(): boolean
            nullsAreSortedAtStart(): boolean
            nullsAreSortedAtEnd(): boolean
            getDatabaseProductName(): string
            getDatabaseProductVersion(): string
            getDriverName(): string
            getDriverVersion(): string
            getDriverMajorVersion(): int
            getDriverMinorVersion(): int
            usesLocalFiles(): boolean
            usesLocalFilePerTable(): boolean
            supportsMixedCaseIdentifiers(): boolean
            storesUpperCaseIdentifiers(): boolean
            storesLowerCaseIdentifiers(): boolean
            storesMixedCaseIdentifiers(): boolean
            supportsMixedCaseQuotedIdentifiers(): boolean
            storesUpperCaseQuotedIdentifiers(): boolean
            storesLowerCaseQuotedIdentifiers(): boolean
            storesMixedCaseQuotedIdentifiers(): boolean
            getIdentifierQuoteString(): string
            getSQLKeywords(): string
            getNumericFunctions(): string
            getStringFunctions(): string
            getSystemFunctions(): string
            getTimeDateFunctions(): string
            getSearchStringEscape(): string
            getExtraNameCharacters(): string
            supportsAlterTableWithAddColumn(): boolean
            supportsAlterTableWithDropColumn(): boolean
            supportsColumnAliasing(): boolean
            nullPlusNonNullIsNull(): boolean
            supportsConvert(): boolean
            supportsConvert(arg0: int, arg1: int): boolean
            supportsTableCorrelationNames(): boolean
            supportsDifferentTableCorrelationNames(): boolean
            supportsExpressionsInOrderBy(): boolean
            supportsOrderByUnrelated(): boolean
            supportsGroupBy(): boolean
            supportsGroupByUnrelated(): boolean
            supportsGroupByBeyondSelect(): boolean
            supportsLikeEscapeClause(): boolean
            supportsMultipleResultSets(): boolean
            supportsMultipleTransactions(): boolean
            supportsNonNullableColumns(): boolean
            supportsMinimumSQLGrammar(): boolean
            supportsCoreSQLGrammar(): boolean
            supportsExtendedSQLGrammar(): boolean
            supportsANSI92EntryLevelSQL(): boolean
            supportsANSI92IntermediateSQL(): boolean
            supportsANSI92FullSQL(): boolean
            supportsIntegrityEnhancementFacility(): boolean
            supportsOuterJoins(): boolean
            supportsFullOuterJoins(): boolean
            supportsLimitedOuterJoins(): boolean
            getSchemaTerm(): string
            getProcedureTerm(): string
            getCatalogTerm(): string
            isCatalogAtStart(): boolean
            getCatalogSeparator(): string
            supportsSchemasInDataManipulation(): boolean
            supportsSchemasInProcedureCalls(): boolean
            supportsSchemasInTableDefinitions(): boolean
            supportsSchemasInIndexDefinitions(): boolean
            supportsSchemasInPrivilegeDefinitions(): boolean
            supportsCatalogsInDataManipulation(): boolean
            supportsCatalogsInProcedureCalls(): boolean
            supportsCatalogsInTableDefinitions(): boolean
            supportsCatalogsInIndexDefinitions(): boolean
            supportsCatalogsInPrivilegeDefinitions(): boolean
            supportsPositionedDelete(): boolean
            supportsPositionedUpdate(): boolean
            supportsSelectForUpdate(): boolean
            supportsStoredProcedures(): boolean
            supportsSubqueriesInComparisons(): boolean
            supportsSubqueriesInExists(): boolean
            supportsSubqueriesInIns(): boolean
            supportsSubqueriesInQuantifieds(): boolean
            supportsCorrelatedSubqueries(): boolean
            supportsUnion(): boolean
            supportsUnionAll(): boolean
            supportsOpenCursorsAcrossCommit(): boolean
            supportsOpenCursorsAcrossRollback(): boolean
            supportsOpenStatementsAcrossCommit(): boolean
            supportsOpenStatementsAcrossRollback(): boolean
            getMaxBinaryLiteralLength(): int
            getMaxCharLiteralLength(): int
            getMaxColumnNameLength(): int
            getMaxColumnsInGroupBy(): int
            getMaxColumnsInIndex(): int
            getMaxColumnsInOrderBy(): int
            getMaxColumnsInSelect(): int
            getMaxColumnsInTable(): int
            getMaxConnections(): int
            getMaxCursorNameLength(): int
            getMaxIndexLength(): int
            getMaxSchemaNameLength(): int
            getMaxProcedureNameLength(): int
            getMaxCatalogNameLength(): int
            getMaxRowSize(): int
            doesMaxRowSizeIncludeBlobs(): boolean
            getMaxStatementLength(): int
            getMaxStatements(): int
            getMaxTableNameLength(): int
            getMaxTablesInSelect(): int
            getMaxUserNameLength(): int
            getDefaultTransactionIsolation(): int
            supportsTransactions(): boolean
            supportsTransactionIsolationLevel(arg0: int): boolean
            supportsDataDefinitionAndDataManipulationTransactions(): boolean
            supportsDataManipulationTransactionsOnly(): boolean
            dataDefinitionCausesTransactionCommit(): boolean
            dataDefinitionIgnoredInTransactions(): boolean
            getProcedures(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getProcedureColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            getTables(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String[]): java.sql.ResultSet
            getSchemas(): java.sql.ResultSet
            getCatalogs(): java.sql.ResultSet
            getTableTypes(): java.sql.ResultSet
            getColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            getColumnPrivileges(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            getTablePrivileges(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getBestRowIdentifier(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int, arg4: boolean): java.sql.ResultSet
            getVersionColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getPrimaryKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getImportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getExportedKeys(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getCrossReference(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): java.sql.ResultSet
            getTypeInfo(): java.sql.ResultSet
            getIndexInfo(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: boolean, arg4: boolean): java.sql.ResultSet
            supportsResultSetType(arg0: int): boolean
            supportsResultSetConcurrency(arg0: int, arg1: int): boolean
            ownUpdatesAreVisible(arg0: int): boolean
            ownDeletesAreVisible(arg0: int): boolean
            ownInsertsAreVisible(arg0: int): boolean
            othersUpdatesAreVisible(arg0: int): boolean
            othersDeletesAreVisible(arg0: int): boolean
            othersInsertsAreVisible(arg0: int): boolean
            updatesAreDetected(arg0: int): boolean
            deletesAreDetected(arg0: int): boolean
            insertsAreDetected(arg0: int): boolean
            supportsBatchUpdates(): boolean
            getUDTs(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: int[]): java.sql.ResultSet
            getConnection(): java.sql.Connection
            supportsSavepoints(): boolean
            supportsNamedParameters(): boolean
            supportsMultipleOpenResults(): boolean
            supportsGetGeneratedKeys(): boolean
            getSuperTypes(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getSuperTables(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getAttributes(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            supportsResultSetHoldability(arg0: int): boolean
            getResultSetHoldability(): int
            getDatabaseMajorVersion(): int
            getDatabaseMinorVersion(): int
            getJDBCMajorVersion(): int
            getJDBCMinorVersion(): int
            getSQLStateType(): int
            locatorsUpdateCopy(): boolean
            supportsStatementPooling(): boolean
            getRowIdLifetime(): java.sql.RowIdLifetime
            getSchemas(arg0: java.lang.String | string, arg1: java.lang.String | string): java.sql.ResultSet
            supportsStoredFunctionsUsingCallSyntax(): boolean
            autoCommitFailureClosesAllResultSets(): boolean
            getClientInfoProperties(): java.sql.ResultSet
            getFunctions(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.ResultSet
            getFunctionColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            getPseudoColumns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): java.sql.ResultSet
            generatedKeyAlwaysReturned(): boolean
            getMaxLogicalLobSize(): long
            supportsRefCursors(): boolean
        }
        class Date extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public static valueOf(arg0: java.lang.String | string): java.sql.Date
            public toString(): string
            public getHours(): int
            public getMinutes(): int
            public getSeconds(): int
            public setHours(arg0: int): void
            public setMinutes(arg0: int): void
            public setSeconds(arg0: int): void
            public static valueOf(arg0: java.time.LocalDate): java.sql.Date
            public toLocalDate(): java.time.LocalDate
            public toInstant(): java.time.Instant
            public static class: java.lang.Class<any>
        }
        interface Driver {
            connect(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.Connection
            acceptsURL(arg0: java.lang.String | string): boolean
            getPropertyInfo(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.DriverPropertyInfo[]
            getMajorVersion(): int
            getMinorVersion(): int
            jdbcCompliant(): boolean
            getParentLogger(): java.util.logging.Logger
        }
        interface DriverAction {
            deregister(): void
        }
        interface DriverAction$$Lambda {
            (): void
        }
        class DriverManager {
            public static getLogWriter(): java.io.PrintWriter
            public static setLogWriter(arg0: java.io.PrintWriter): void
            public static getConnection(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.Connection
            public static getConnection(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): java.sql.Connection
            public static getConnection(arg0: java.lang.String | string): java.sql.Connection
            public static getDriver(arg0: java.lang.String | string): java.sql.Driver
            public static registerDriver(arg0: java.sql.Driver): void
            public static registerDriver(arg0: java.sql.Driver, arg1: java.sql.DriverAction | java.sql.DriverAction$$Lambda): void
            public static deregisterDriver(arg0: java.sql.Driver): void
            public static getDrivers(): java.util.Enumeration<java.sql.Driver>
            public static setLoginTimeout(arg0: int): void
            public static getLoginTimeout(): int
            public static setLogStream(arg0: java.io.PrintStream): void
            public static getLogStream(): java.io.PrintStream
            public static println(arg0: java.lang.String | string): void
            public static class: java.lang.Class<any>
        }
        class DriverPropertyInfo {
            public name: string
            public description: string
            public required: boolean
            public value: string
            public choices: java.lang.String[]
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class JDBCType extends java.lang.Enum<java.sql.JDBCType> implements java.sql.SQLType {
            public static BIT: java.sql.JDBCType
            public static TINYINT: java.sql.JDBCType
            public static SMALLINT: java.sql.JDBCType
            public static INTEGER: java.sql.JDBCType
            public static BIGINT: java.sql.JDBCType
            public static FLOAT: java.sql.JDBCType
            public static REAL: java.sql.JDBCType
            public static DOUBLE: java.sql.JDBCType
            public static NUMERIC: java.sql.JDBCType
            public static DECIMAL: java.sql.JDBCType
            public static CHAR: java.sql.JDBCType
            public static VARCHAR: java.sql.JDBCType
            public static LONGVARCHAR: java.sql.JDBCType
            public static DATE: java.sql.JDBCType
            public static TIME: java.sql.JDBCType
            public static TIMESTAMP: java.sql.JDBCType
            public static BINARY: java.sql.JDBCType
            public static VARBINARY: java.sql.JDBCType
            public static LONGVARBINARY: java.sql.JDBCType
            public static NULL: java.sql.JDBCType
            public static OTHER: java.sql.JDBCType
            public static JAVA_OBJECT: java.sql.JDBCType
            public static DISTINCT: java.sql.JDBCType
            public static STRUCT: java.sql.JDBCType
            public static ARRAY: java.sql.JDBCType
            public static BLOB: java.sql.JDBCType
            public static CLOB: java.sql.JDBCType
            public static REF: java.sql.JDBCType
            public static DATALINK: java.sql.JDBCType
            public static BOOLEAN: java.sql.JDBCType
            public static ROWID: java.sql.JDBCType
            public static NCHAR: java.sql.JDBCType
            public static NVARCHAR: java.sql.JDBCType
            public static LONGNVARCHAR: java.sql.JDBCType
            public static NCLOB: java.sql.JDBCType
            public static SQLXML: java.sql.JDBCType
            public static REF_CURSOR: java.sql.JDBCType
            public static TIME_WITH_TIMEZONE: java.sql.JDBCType
            public static TIMESTAMP_WITH_TIMEZONE: java.sql.JDBCType
            public static values(): java.sql.JDBCType[]
            public static valueOf(arg0: java.lang.String | string): java.sql.JDBCType
            public getName(): string
            public getVendor(): string
            public getVendorTypeNumber(): java.lang.Integer
            public static valueOf(arg0: int): java.sql.JDBCType
            public static class: java.lang.Class<any>
        }
        interface NClob extends java.sql.Clob {
        }
        interface ParameterMetaData extends java.sql.Wrapper {
            parameterNoNulls: int
            parameterNullable: int
            parameterNullableUnknown: int
            parameterModeUnknown: int
            parameterModeIn: int
            parameterModeInOut: int
            parameterModeOut: int
            getParameterCount(): int
            isNullable(arg0: int): int
            isSigned(arg0: int): boolean
            getPrecision(arg0: int): int
            getScale(arg0: int): int
            getParameterType(arg0: int): int
            getParameterTypeName(arg0: int): string
            getParameterClassName(arg0: int): string
            getParameterMode(arg0: int): int
        }
        interface PreparedStatement extends java.sql.Statement {
            executeQuery(): java.sql.ResultSet
            executeUpdate(): int
            setNull(arg0: int, arg1: int): void
            setBoolean(arg0: int, arg1: boolean): void
            setByte(arg0: int, arg1: byte): void
            setShort(arg0: int, arg1: short): void
            setInt(arg0: int, arg1: int): void
            setLong(arg0: int, arg1: long): void
            setFloat(arg0: int, arg1: float): void
            setDouble(arg0: int, arg1: double): void
            setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
            setString(arg0: int, arg1: java.lang.String | string): void
            setBytes(arg0: int, arg1: byte[]): void
            setDate(arg0: int, arg1: java.sql.Date): void
            setTime(arg0: int, arg1: java.sql.Time): void
            setTimestamp(arg0: int, arg1: java.sql.Timestamp): void
            setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            setUnicodeStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            clearParameters(): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: int): void
            setObject(arg0: int, arg1: java.lang.Object): void
            execute(): boolean
            addBatch(): void
            setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
            setRef(arg0: int, arg1: java.sql.Ref): void
            setBlob(arg0: int, arg1: java.sql.Blob): void
            setClob(arg0: int, arg1: java.sql.Clob): void
            setArray(arg0: int, arg1: java.sql.Array): void
            getMetaData(): java.sql.ResultSetMetaData
            setDate(arg0: int, arg1: java.sql.Date, arg2: java.util.Calendar): void
            setTime(arg0: int, arg1: java.sql.Time, arg2: java.util.Calendar): void
            setTimestamp(arg0: int, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
            setNull(arg0: int, arg1: int, arg2: java.lang.String | string): void
            setURL(arg0: int, arg1: java.net.URL): void
            getParameterMetaData(): java.sql.ParameterMetaData
            setRowId(arg0: int, arg1: java.sql.RowId): void
            setNString(arg0: int, arg1: java.lang.String | string): void
            setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
            setNClob(arg0: int, arg1: java.sql.NClob): void
            setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
            setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
            setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
            setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
            setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
            setAsciiStream(arg0: int, arg1: java.io.InputStream): void
            setBinaryStream(arg0: int, arg1: java.io.InputStream): void
            setCharacterStream(arg0: int, arg1: java.io.Reader): void
            setNCharacterStream(arg0: int, arg1: java.io.Reader): void
            setClob(arg0: int, arg1: java.io.Reader): void
            setBlob(arg0: int, arg1: java.io.InputStream): void
            setNClob(arg0: int, arg1: java.io.Reader): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType): void
            executeLargeUpdate(): long
        }
        class PseudoColumnUsage extends java.lang.Enum<java.sql.PseudoColumnUsage> {
            public static SELECT_LIST_ONLY: java.sql.PseudoColumnUsage
            public static WHERE_CLAUSE_ONLY: java.sql.PseudoColumnUsage
            public static NO_USAGE_RESTRICTIONS: java.sql.PseudoColumnUsage
            public static USAGE_UNKNOWN: java.sql.PseudoColumnUsage
            public static values(): java.sql.PseudoColumnUsage[]
            public static valueOf(arg0: java.lang.String | string): java.sql.PseudoColumnUsage
            public static class: java.lang.Class<any>
        }
        interface Ref {
            getBaseTypeName(): string
            getObject(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getObject(): java.lang.Object
            setObject(arg0: java.lang.Object): void
        }
        interface ResultSet extends java.sql.Wrapper , java.lang.AutoCloseable {
            FETCH_FORWARD: int
            FETCH_REVERSE: int
            FETCH_UNKNOWN: int
            TYPE_FORWARD_ONLY: int
            TYPE_SCROLL_INSENSITIVE: int
            TYPE_SCROLL_SENSITIVE: int
            CONCUR_READ_ONLY: int
            CONCUR_UPDATABLE: int
            HOLD_CURSORS_OVER_COMMIT: int
            CLOSE_CURSORS_AT_COMMIT: int
            next(): boolean
            close(): void
            wasNull(): boolean
            getString(arg0: int): string
            getBoolean(arg0: int): boolean
            getByte(arg0: int): byte
            getShort(arg0: int): short
            getInt(arg0: int): int
            getLong(arg0: int): long
            getFloat(arg0: int): float
            getDouble(arg0: int): double
            getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
            getBytes(arg0: int): byte[]
            getDate(arg0: int): java.sql.Date
            getTime(arg0: int): java.sql.Time
            getTimestamp(arg0: int): java.sql.Timestamp
            getAsciiStream(arg0: int): java.io.InputStream
            getUnicodeStream(arg0: int): java.io.InputStream
            getBinaryStream(arg0: int): java.io.InputStream
            getString(arg0: java.lang.String | string): string
            getBoolean(arg0: java.lang.String | string): boolean
            getByte(arg0: java.lang.String | string): byte
            getShort(arg0: java.lang.String | string): short
            getInt(arg0: java.lang.String | string): int
            getLong(arg0: java.lang.String | string): long
            getFloat(arg0: java.lang.String | string): float
            getDouble(arg0: java.lang.String | string): double
            getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
            getBytes(arg0: java.lang.String | string): byte[]
            getDate(arg0: java.lang.String | string): java.sql.Date
            getTime(arg0: java.lang.String | string): java.sql.Time
            getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
            getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
            getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
            getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
            getWarnings(): java.sql.SQLWarning
            clearWarnings(): void
            getCursorName(): string
            getMetaData(): java.sql.ResultSetMetaData
            getObject(arg0: int): java.lang.Object
            getObject(arg0: java.lang.String | string): java.lang.Object
            findColumn(arg0: java.lang.String | string): int
            getCharacterStream(arg0: int): java.io.Reader
            getCharacterStream(arg0: java.lang.String | string): java.io.Reader
            getBigDecimal(arg0: int): java.math.BigDecimal
            getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
            isBeforeFirst(): boolean
            isAfterLast(): boolean
            isFirst(): boolean
            isLast(): boolean
            beforeFirst(): void
            afterLast(): void
            first(): boolean
            last(): boolean
            getRow(): int
            absolute(arg0: int): boolean
            relative(arg0: int): boolean
            previous(): boolean
            setFetchDirection(arg0: int): void
            getFetchDirection(): int
            setFetchSize(arg0: int): void
            getFetchSize(): int
            getType(): int
            getConcurrency(): int
            rowUpdated(): boolean
            rowInserted(): boolean
            rowDeleted(): boolean
            updateNull(arg0: int): void
            updateBoolean(arg0: int, arg1: boolean): void
            updateByte(arg0: int, arg1: byte): void
            updateShort(arg0: int, arg1: short): void
            updateInt(arg0: int, arg1: int): void
            updateLong(arg0: int, arg1: long): void
            updateFloat(arg0: int, arg1: float): void
            updateDouble(arg0: int, arg1: double): void
            updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
            updateString(arg0: int, arg1: java.lang.String | string): void
            updateBytes(arg0: int, arg1: byte[]): void
            updateDate(arg0: int, arg1: java.sql.Date): void
            updateTime(arg0: int, arg1: java.sql.Time): void
            updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
            updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
            updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
            updateObject(arg0: int, arg1: java.lang.Object): void
            updateNull(arg0: java.lang.String | string): void
            updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
            updateByte(arg0: java.lang.String | string, arg1: byte): void
            updateShort(arg0: java.lang.String | string, arg1: short): void
            updateInt(arg0: java.lang.String | string, arg1: int): void
            updateLong(arg0: java.lang.String | string, arg1: long): void
            updateFloat(arg0: java.lang.String | string, arg1: float): void
            updateDouble(arg0: java.lang.String | string, arg1: double): void
            updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
            updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
            updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
            updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
            updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
            updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
            updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
            updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
            insertRow(): void
            updateRow(): void
            deleteRow(): void
            refreshRow(): void
            cancelRowUpdates(): void
            moveToInsertRow(): void
            moveToCurrentRow(): void
            getStatement(): java.sql.Statement
            getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: int): java.sql.Ref
            getBlob(arg0: int): java.sql.Blob
            getClob(arg0: int): java.sql.Clob
            getArray(arg0: int): java.sql.Array
            getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
            getRef(arg0: java.lang.String | string): java.sql.Ref
            getBlob(arg0: java.lang.String | string): java.sql.Blob
            getClob(arg0: java.lang.String | string): java.sql.Clob
            getArray(arg0: java.lang.String | string): java.sql.Array
            getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
            getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
            getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
            getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
            getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
            getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
            getURL(arg0: int): java.net.URL
            getURL(arg0: java.lang.String | string): java.net.URL
            updateRef(arg0: int, arg1: java.sql.Ref): void
            updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
            updateBlob(arg0: int, arg1: java.sql.Blob): void
            updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
            updateClob(arg0: int, arg1: java.sql.Clob): void
            updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
            updateArray(arg0: int, arg1: java.sql.Array): void
            updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
            getRowId(arg0: int): java.sql.RowId
            getRowId(arg0: java.lang.String | string): java.sql.RowId
            updateRowId(arg0: int, arg1: java.sql.RowId): void
            updateRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
            getHoldability(): int
            isClosed(): boolean
            updateNString(arg0: int, arg1: java.lang.String | string): void
            updateNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            updateNClob(arg0: int, arg1: java.sql.NClob): void
            updateNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
            getNClob(arg0: int): java.sql.NClob
            getNClob(arg0: java.lang.String | string): java.sql.NClob
            getSQLXML(arg0: int): java.sql.SQLXML
            getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
            updateSQLXML(arg0: int, arg1: java.sql.SQLXML): void
            updateSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
            getNString(arg0: int): string
            getNString(arg0: java.lang.String | string): string
            getNCharacterStream(arg0: int): java.io.Reader
            getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
            updateNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
            updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
            updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
            updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
            updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            updateBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
            updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            updateClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            updateClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            updateNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            updateNCharacterStream(arg0: int, arg1: java.io.Reader): void
            updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            updateAsciiStream(arg0: int, arg1: java.io.InputStream): void
            updateBinaryStream(arg0: int, arg1: java.io.InputStream): void
            updateCharacterStream(arg0: int, arg1: java.io.Reader): void
            updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            updateBlob(arg0: int, arg1: java.io.InputStream): void
            updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            updateClob(arg0: int, arg1: java.io.Reader): void
            updateClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            updateNClob(arg0: int, arg1: java.io.Reader): void
            updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
            getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
            updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
            updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
            updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType): void
            updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType): void
        }
        interface ResultSetMetaData extends java.sql.Wrapper {
            columnNoNulls: int
            columnNullable: int
            columnNullableUnknown: int
            getColumnCount(): int
            isAutoIncrement(arg0: int): boolean
            isCaseSensitive(arg0: int): boolean
            isSearchable(arg0: int): boolean
            isCurrency(arg0: int): boolean
            isNullable(arg0: int): int
            isSigned(arg0: int): boolean
            getColumnDisplaySize(arg0: int): int
            getColumnLabel(arg0: int): string
            getColumnName(arg0: int): string
            getSchemaName(arg0: int): string
            getPrecision(arg0: int): int
            getScale(arg0: int): int
            getTableName(arg0: int): string
            getCatalogName(arg0: int): string
            getColumnType(arg0: int): int
            getColumnTypeName(arg0: int): string
            isReadOnly(arg0: int): boolean
            isWritable(arg0: int): boolean
            isDefinitelyWritable(arg0: int): boolean
            getColumnClassName(arg0: int): string
        }
        interface RowId {
            equals(arg0: java.lang.Object): boolean
            getBytes(): byte[]
            toString(): string
            hashCode(): int
        }
        class RowIdLifetime extends java.lang.Enum<java.sql.RowIdLifetime> {
            public static ROWID_UNSUPPORTED: java.sql.RowIdLifetime
            public static ROWID_VALID_OTHER: java.sql.RowIdLifetime
            public static ROWID_VALID_SESSION: java.sql.RowIdLifetime
            public static ROWID_VALID_TRANSACTION: java.sql.RowIdLifetime
            public static ROWID_VALID_FOREVER: java.sql.RowIdLifetime
            public static values(): java.sql.RowIdLifetime[]
            public static valueOf(arg0: java.lang.String | string): java.sql.RowIdLifetime
            public static class: java.lang.Class<any>
        }
        class SQLClientInfoException extends java.sql.SQLException {
            public constructor()
            public constructor(arg0: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg3: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg4: java.lang.Throwable)
            public getFailedProperties(): java.util.Map<java.lang.String, java.sql.ClientInfoStatus>
            public static class: java.lang.Class<any>
        }
        interface SQLData {
            getSQLTypeName(): string
            readSQL(arg0: java.sql.SQLInput, arg1: java.lang.String | string): void
            writeSQL(arg0: java.sql.SQLOutput): void
        }
        class SQLDataException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLException extends java.lang.Exception implements java.lang.Iterable<java.lang.Throwable> {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public getSQLState(): string
            public getErrorCode(): int
            public getNextException(): java.sql.SQLException
            public setNextException(arg0: java.sql.SQLException): void
            public iterator(): java.util.Iterator<java.lang.Throwable>
            public static class: java.lang.Class<any>
        }
        class SQLFeatureNotSupportedException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        interface SQLInput {
            readString(): string
            readBoolean(): boolean
            readByte(): byte
            readShort(): short
            readInt(): int
            readLong(): long
            readFloat(): float
            readDouble(): double
            readBigDecimal(): java.math.BigDecimal
            readBytes(): byte[]
            readDate(): java.sql.Date
            readTime(): java.sql.Time
            readTimestamp(): java.sql.Timestamp
            readCharacterStream(): java.io.Reader
            readAsciiStream(): java.io.InputStream
            readBinaryStream(): java.io.InputStream
            readObject(): java.lang.Object
            readRef(): java.sql.Ref
            readBlob(): java.sql.Blob
            readClob(): java.sql.Clob
            readArray(): java.sql.Array
            wasNull(): boolean
            readURL(): java.net.URL
            readNClob(): java.sql.NClob
            readNString(): string
            readSQLXML(): java.sql.SQLXML
            readRowId(): java.sql.RowId
            readObject<T>(arg0: java.lang.Class<T>): T
        }
        class SQLIntegrityConstraintViolationException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLInvalidAuthorizationSpecException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLNonTransientConnectionException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLNonTransientException extends java.sql.SQLException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        interface SQLOutput {
            writeString(arg0: java.lang.String | string): void
            writeBoolean(arg0: boolean): void
            writeByte(arg0: byte): void
            writeShort(arg0: short): void
            writeInt(arg0: int): void
            writeLong(arg0: long): void
            writeFloat(arg0: float): void
            writeDouble(arg0: double): void
            writeBigDecimal(arg0: java.math.BigDecimal): void
            writeBytes(arg0: byte[]): void
            writeDate(arg0: java.sql.Date): void
            writeTime(arg0: java.sql.Time): void
            writeTimestamp(arg0: java.sql.Timestamp): void
            writeCharacterStream(arg0: java.io.Reader): void
            writeAsciiStream(arg0: java.io.InputStream): void
            writeBinaryStream(arg0: java.io.InputStream): void
            writeObject(arg0: java.sql.SQLData): void
            writeRef(arg0: java.sql.Ref): void
            writeBlob(arg0: java.sql.Blob): void
            writeClob(arg0: java.sql.Clob): void
            writeStruct(arg0: java.sql.Struct): void
            writeArray(arg0: java.sql.Array): void
            writeURL(arg0: java.net.URL): void
            writeNString(arg0: java.lang.String | string): void
            writeNClob(arg0: java.sql.NClob): void
            writeRowId(arg0: java.sql.RowId): void
            writeSQLXML(arg0: java.sql.SQLXML): void
            writeObject(arg0: java.lang.Object, arg1: java.sql.SQLType): void
        }
        class SQLPermission extends java.security.BasicPermission {
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class SQLRecoverableException extends java.sql.SQLException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLSyntaxErrorException extends java.sql.SQLNonTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLTimeoutException extends java.sql.SQLTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLTransactionRollbackException extends java.sql.SQLTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLTransientConnectionException extends java.sql.SQLTransientException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        class SQLTransientException extends java.sql.SQLException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public static class: java.lang.Class<any>
        }
        interface SQLType {
            getName(): string
            getVendor(): string
            getVendorTypeNumber(): java.lang.Integer
        }
        class SQLWarning extends java.sql.SQLException {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public constructor(arg0: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
            public getNextWarning(): java.sql.SQLWarning
            public setNextWarning(arg0: java.sql.SQLWarning): void
            public static class: java.lang.Class<any>
        }
        interface SQLXML {
            free(): void
            getBinaryStream(): java.io.InputStream
            setBinaryStream(): java.io.OutputStream
            getCharacterStream(): java.io.Reader
            setCharacterStream(): java.io.Writer
            getString(): string
            setString(arg0: java.lang.String | string): void
            getSource<T extends javax.xml.transform.Source>(arg0: java.lang.Class<T>): T
            setResult<T extends javax.xml.transform.Result>(arg0: java.lang.Class<T>): T
        }
        interface Savepoint {
            getSavepointId(): int
            getSavepointName(): string
        }
        interface Statement extends java.sql.Wrapper , java.lang.AutoCloseable {
            CLOSE_CURRENT_RESULT: int
            KEEP_CURRENT_RESULT: int
            CLOSE_ALL_RESULTS: int
            SUCCESS_NO_INFO: int
            EXECUTE_FAILED: int
            RETURN_GENERATED_KEYS: int
            NO_GENERATED_KEYS: int
            executeQuery(arg0: java.lang.String | string): java.sql.ResultSet
            executeUpdate(arg0: java.lang.String | string): int
            close(): void
            getMaxFieldSize(): int
            setMaxFieldSize(arg0: int): void
            getMaxRows(): int
            setMaxRows(arg0: int): void
            setEscapeProcessing(arg0: boolean): void
            getQueryTimeout(): int
            setQueryTimeout(arg0: int): void
            cancel(): void
            getWarnings(): java.sql.SQLWarning
            clearWarnings(): void
            setCursorName(arg0: java.lang.String | string): void
            execute(arg0: java.lang.String | string): boolean
            getResultSet(): java.sql.ResultSet
            getUpdateCount(): int
            getMoreResults(): boolean
            setFetchDirection(arg0: int): void
            getFetchDirection(): int
            setFetchSize(arg0: int): void
            getFetchSize(): int
            getResultSetConcurrency(): int
            getResultSetType(): int
            addBatch(arg0: java.lang.String | string): void
            clearBatch(): void
            executeBatch(): int[]
            getConnection(): java.sql.Connection
            getMoreResults(arg0: int): boolean
            getGeneratedKeys(): java.sql.ResultSet
            executeUpdate(arg0: java.lang.String | string, arg1: int): int
            executeUpdate(arg0: java.lang.String | string, arg1: int[]): int
            executeUpdate(arg0: java.lang.String | string, arg1: java.lang.String[]): int
            execute(arg0: java.lang.String | string, arg1: int): boolean
            execute(arg0: java.lang.String | string, arg1: int[]): boolean
            execute(arg0: java.lang.String | string, arg1: java.lang.String[]): boolean
            getResultSetHoldability(): int
            isClosed(): boolean
            setPoolable(arg0: boolean): void
            isPoolable(): boolean
            closeOnCompletion(): void
            isCloseOnCompletion(): boolean
            getLargeUpdateCount(): long
            setLargeMaxRows(arg0: long): void
            getLargeMaxRows(): long
            executeLargeBatch(): long[]
            executeLargeUpdate(arg0: java.lang.String | string): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: int): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: int[]): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: java.lang.String[]): long
        }
        interface Struct {
            getSQLTypeName(): string
            getAttributes(): java.lang.Object[]
            getAttributes(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object[]
        }
        class Time extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public static valueOf(arg0: java.lang.String | string): java.sql.Time
            public toString(): string
            public getYear(): int
            public getMonth(): int
            public getDay(): int
            public getDate(): int
            public setYear(arg0: int): void
            public setMonth(arg0: int): void
            public setDate(arg0: int): void
            public static valueOf(arg0: java.time.LocalTime): java.sql.Time
            public toLocalTime(): java.time.LocalTime
            public toInstant(): java.time.Instant
            public static class: java.lang.Class<any>
        }
        class Timestamp extends java.util.Date {
            public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int, arg6: int)
            public constructor(arg0: long)
            public setTime(arg0: long): void
            public getTime(): long
            public static valueOf(arg0: java.lang.String | string): java.sql.Timestamp
            public toString(): string
            public getNanos(): int
            public setNanos(arg0: int): void
            public equals(arg0: java.sql.Timestamp): boolean
            public equals(arg0: java.lang.Object): boolean
            public before(arg0: java.sql.Timestamp): boolean
            public after(arg0: java.sql.Timestamp): boolean
            public compareTo(arg0: java.sql.Timestamp): int
            public compareTo(arg0: java.util.Date): int
            public hashCode(): int
            public static valueOf(arg0: java.time.LocalDateTime): java.sql.Timestamp
            public toLocalDateTime(): java.time.LocalDateTime
            public static from(arg0: java.time.Instant): java.sql.Timestamp
            public toInstant(): java.time.Instant
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
        class Types {
            public static BIT: int
            public static TINYINT: int
            public static SMALLINT: int
            public static INTEGER: int
            public static BIGINT: int
            public static FLOAT: int
            public static REAL: int
            public static DOUBLE: int
            public static NUMERIC: int
            public static DECIMAL: int
            public static CHAR: int
            public static VARCHAR: int
            public static LONGVARCHAR: int
            public static DATE: int
            public static TIME: int
            public static TIMESTAMP: int
            public static BINARY: int
            public static VARBINARY: int
            public static LONGVARBINARY: int
            public static NULL: int
            public static OTHER: int
            public static JAVA_OBJECT: int
            public static DISTINCT: int
            public static STRUCT: int
            public static ARRAY: int
            public static BLOB: int
            public static CLOB: int
            public static REF: int
            public static DATALINK: int
            public static BOOLEAN: int
            public static ROWID: int
            public static NCHAR: int
            public static NVARCHAR: int
            public static LONGNVARCHAR: int
            public static NCLOB: int
            public static SQLXML: int
            public static REF_CURSOR: int
            public static TIME_WITH_TIMEZONE: int
            public static TIMESTAMP_WITH_TIMEZONE: int
            public static class: java.lang.Class<any>
        }
        interface Wrapper {
            unwrap<T>(arg0: java.lang.Class<T>): T
            isWrapperFor(arg0: java.lang.Class<any>): boolean
        }
    }
}
declare namespace javax {
    namespace sql {
        interface CommonDataSource {
            getLogWriter(): java.io.PrintWriter
            setLogWriter(arg0: java.io.PrintWriter): void
            setLoginTimeout(arg0: int): void
            getLoginTimeout(): int
            getParentLogger(): java.util.logging.Logger
        }
        class ConnectionEvent extends java.util.EventObject {
            public constructor(arg0: javax.sql.PooledConnection)
            public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.SQLException)
            public getSQLException(): java.sql.SQLException
            public static class: java.lang.Class<any>
        }
        interface ConnectionEventListener extends java.util.EventListener {
            connectionClosed(arg0: javax.sql.ConnectionEvent): void
            connectionErrorOccurred(arg0: javax.sql.ConnectionEvent): void
        }
        interface ConnectionPoolDataSource extends javax.sql.CommonDataSource {
            getPooledConnection(): javax.sql.PooledConnection
            getPooledConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.PooledConnection
        }
        interface DataSource extends javax.sql.CommonDataSource , java.sql.Wrapper {
            getConnection(): java.sql.Connection
            getConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): java.sql.Connection
        }
        interface PooledConnection {
            getConnection(): java.sql.Connection
            close(): void
            addConnectionEventListener(arg0: javax.sql.ConnectionEventListener): void
            removeConnectionEventListener(arg0: javax.sql.ConnectionEventListener): void
            addStatementEventListener(arg0: javax.sql.StatementEventListener): void
            removeStatementEventListener(arg0: javax.sql.StatementEventListener): void
        }
        interface RowSet extends java.sql.ResultSet {
            getUrl(): string
            setUrl(arg0: java.lang.String | string): void
            getDataSourceName(): string
            setDataSourceName(arg0: java.lang.String | string): void
            getUsername(): string
            setUsername(arg0: java.lang.String | string): void
            getPassword(): string
            setPassword(arg0: java.lang.String | string): void
            getTransactionIsolation(): int
            setTransactionIsolation(arg0: int): void
            getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<any>>
            setTypeMap(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): void
            getCommand(): string
            setCommand(arg0: java.lang.String | string): void
            isReadOnly(): boolean
            setReadOnly(arg0: boolean): void
            getMaxFieldSize(): int
            setMaxFieldSize(arg0: int): void
            getMaxRows(): int
            setMaxRows(arg0: int): void
            getEscapeProcessing(): boolean
            setEscapeProcessing(arg0: boolean): void
            getQueryTimeout(): int
            setQueryTimeout(arg0: int): void
            setType(arg0: int): void
            setConcurrency(arg0: int): void
            setNull(arg0: int, arg1: int): void
            setNull(arg0: java.lang.String | string, arg1: int): void
            setNull(arg0: int, arg1: int, arg2: java.lang.String | string): void
            setNull(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
            setBoolean(arg0: int, arg1: boolean): void
            setBoolean(arg0: java.lang.String | string, arg1: boolean): void
            setByte(arg0: int, arg1: byte): void
            setByte(arg0: java.lang.String | string, arg1: byte): void
            setShort(arg0: int, arg1: short): void
            setShort(arg0: java.lang.String | string, arg1: short): void
            setInt(arg0: int, arg1: int): void
            setInt(arg0: java.lang.String | string, arg1: int): void
            setLong(arg0: int, arg1: long): void
            setLong(arg0: java.lang.String | string, arg1: long): void
            setFloat(arg0: int, arg1: float): void
            setFloat(arg0: java.lang.String | string, arg1: float): void
            setDouble(arg0: int, arg1: double): void
            setDouble(arg0: java.lang.String | string, arg1: double): void
            setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
            setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
            setString(arg0: int, arg1: java.lang.String | string): void
            setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setBytes(arg0: int, arg1: byte[]): void
            setBytes(arg0: java.lang.String | string, arg1: byte[]): void
            setDate(arg0: int, arg1: java.sql.Date): void
            setTime(arg0: int, arg1: java.sql.Time): void
            setTimestamp(arg0: int, arg1: java.sql.Timestamp): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
            setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
            setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
            setAsciiStream(arg0: int, arg1: java.io.InputStream): void
            setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setBinaryStream(arg0: int, arg1: java.io.InputStream): void
            setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setCharacterStream(arg0: int, arg1: java.io.Reader): void
            setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setNCharacterStream(arg0: int, arg1: java.io.Reader): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int, arg3: int): void
            setObject(arg0: int, arg1: java.lang.Object, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
            setObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
            setObject(arg0: int, arg1: java.lang.Object): void
            setRef(arg0: int, arg1: java.sql.Ref): void
            setBlob(arg0: int, arg1: java.sql.Blob): void
            setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
            setBlob(arg0: int, arg1: java.io.InputStream): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
            setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
            setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
            setClob(arg0: int, arg1: java.sql.Clob): void
            setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            setClob(arg0: int, arg1: java.io.Reader): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
            setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setArray(arg0: int, arg1: java.sql.Array): void
            setDate(arg0: int, arg1: java.sql.Date, arg2: java.util.Calendar): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
            setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
            setTime(arg0: int, arg1: java.sql.Time, arg2: java.util.Calendar): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
            setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
            setTimestamp(arg0: int, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
            setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
            clearParameters(): void
            execute(): void
            addRowSetListener(arg0: javax.sql.RowSetListener): void
            removeRowSetListener(arg0: javax.sql.RowSetListener): void
            setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
            setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
            setRowId(arg0: int, arg1: java.sql.RowId): void
            setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
            setNString(arg0: int, arg1: java.lang.String | string): void
            setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
            setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
            setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
            setNClob(arg0: int, arg1: java.sql.NClob): void
            setNClob(arg0: int, arg1: java.io.Reader): void
            setURL(arg0: int, arg1: java.net.URL): void
        }
        class RowSetEvent extends java.util.EventObject {
            public constructor(arg0: javax.sql.RowSet)
            public static class: java.lang.Class<any>
        }
        interface RowSetInternal {
            getParams(): java.lang.Object[]
            getConnection(): java.sql.Connection
            setMetaData(arg0: javax.sql.RowSetMetaData): void
            getOriginal(): java.sql.ResultSet
            getOriginalRow(): java.sql.ResultSet
        }
        interface RowSetListener extends java.util.EventListener {
            rowSetChanged(arg0: javax.sql.RowSetEvent): void
            rowChanged(arg0: javax.sql.RowSetEvent): void
            cursorMoved(arg0: javax.sql.RowSetEvent): void
        }
        interface RowSetMetaData extends java.sql.ResultSetMetaData {
            setColumnCount(arg0: int): void
            setAutoIncrement(arg0: int, arg1: boolean): void
            setCaseSensitive(arg0: int, arg1: boolean): void
            setSearchable(arg0: int, arg1: boolean): void
            setCurrency(arg0: int, arg1: boolean): void
            setNullable(arg0: int, arg1: int): void
            setSigned(arg0: int, arg1: boolean): void
            setColumnDisplaySize(arg0: int, arg1: int): void
            setColumnLabel(arg0: int, arg1: java.lang.String | string): void
            setColumnName(arg0: int, arg1: java.lang.String | string): void
            setSchemaName(arg0: int, arg1: java.lang.String | string): void
            setPrecision(arg0: int, arg1: int): void
            setScale(arg0: int, arg1: int): void
            setTableName(arg0: int, arg1: java.lang.String | string): void
            setCatalogName(arg0: int, arg1: java.lang.String | string): void
            setColumnType(arg0: int, arg1: int): void
            setColumnTypeName(arg0: int, arg1: java.lang.String | string): void
        }
        interface RowSetReader {
            readData(arg0: javax.sql.RowSetInternal): void
        }
        interface RowSetReader$$Lambda {
            (arg0: javax.sql.RowSetInternal): void
        }
        interface RowSetWriter {
            writeData(arg0: javax.sql.RowSetInternal): boolean
        }
        interface RowSetWriter$$Lambda {
            (arg0: javax.sql.RowSetInternal): boolean
        }
        class StatementEvent extends java.util.EventObject {
            public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.PreparedStatement)
            public constructor(arg0: javax.sql.PooledConnection, arg1: java.sql.PreparedStatement, arg2: java.sql.SQLException)
            public getStatement(): java.sql.PreparedStatement
            public getSQLException(): java.sql.SQLException
            public static class: java.lang.Class<any>
        }
        interface StatementEventListener extends java.util.EventListener {
            statementClosed(arg0: javax.sql.StatementEvent): void
            statementErrorOccurred(arg0: javax.sql.StatementEvent): void
        }
        interface XAConnection extends javax.sql.PooledConnection {
            getXAResource(): javax.transaction.xa.XAResource
        }
        interface XADataSource extends javax.sql.CommonDataSource {
            getXAConnection(): javax.sql.XAConnection
            getXAConnection(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.sql.XAConnection
        }
    }
}
