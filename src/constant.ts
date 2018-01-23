namespace tooq {
    export enum Collate {
        utf8_bin = "utf8_bin",
        utf8mb4_unicode_ci = "utf8mb4_unicode_ci",
    }

    export enum Engine {
        ARCHIVE = "ARCHIVE",
        BLACKHOLE = "BLACKHOLE",
        CSV = "CSV",
        FEDERATED = "FEDERATED",
        INNODB = "INNODB",
        MEMORY = "MEMORY",
        MRG_MYISAM = "MRG_MYISAM",
        MYISAM = "MYISAM",
        PERFORMANCE_SCHEMA = "PERFORMANCE_SCHEMA",
        ROCKSDB = "ROCKSDB",
    }

    export enum Parser {
        mecab = "mecab",
        ngram = "ngram",
    }

    export class ColumnType {
        static BIGINT = "BIGINT"
        static BOOL = "BOOL"
        static DOUBLE = "DOUBLE"
        static JSON = "JSON"
        static TEXT = "TEXT"
        static VARCHAR(length: number) {
            return "VARCHAR(" + length + ")"
        }
    }
}
