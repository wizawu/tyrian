declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        interface Config {
                            CHAR_TABLE_SIZE: int
                            VANILLA: boolean
                            INTERNAL_ENC_CASE_FOLD_MULTI_CHAR: int
                            ENC_CASE_FOLD_MIN: int
                            ENC_CASE_FOLD_DEFAULT: int
                            USE_MONOMANIAC_CHECK_CAPTURES_IN_ENDLESS_REPEAT: boolean
                            USE_NEWLINE_AT_END_OF_STRING_HAS_EMPTY_LINE: boolean
                            USE_WARNING_REDUNDANT_NESTED_REPEAT_OPERATOR: boolean
                            CASE_FOLD_IS_APPLIED_INSIDE_NEGATIVE_CCLASS: boolean
                            USE_MATCH_RANGE_MUST_BE_INSIDE_OF_SPECIFIED_RANGE: boolean
                            USE_VARIABLE_META_CHARS: boolean
                            USE_WORD_BEGIN_END: boolean
                            USE_POSIX_API_REGION_OPTION: boolean
                            USE_FIND_LONGEST_SEARCH_ALL_OF_RANGE: boolean
                            NREGION: int
                            MAX_BACKREF_NUM: int
                            MAX_REPEAT_NUM: int
                            MAX_MULTI_BYTE_RANGES_NUM: int
                            USE_WARN: boolean
                            USE_PARSE_TREE_NODE_RECYCLE: boolean
                            USE_OP_PUSH_OR_JUMP_EXACT: boolean
                            USE_SHARED_CCLASS_TABLE: boolean
                            USE_QTFR_PEEK_NEXT: boolean
                            INIT_MATCH_STACK_SIZE: int
                            DEFAULT_MATCH_STACK_LIMIT_SIZE: int
                            NUMBER_OF_POOLED_STACKS: int
                            DONT_OPTIMIZE: boolean
                            USE_STRING_TEMPLATES: boolean
                            NON_UNICODE_SDW: boolean
                            log: java.io.PrintStream
                            err: java.io.PrintStream
                            DEBUG_ALL: boolean
                            DEBUG: boolean
                            DEBUG_PARSE_TREE: boolean
                            DEBUG_PARSE_TREE_RAW: boolean
                            DEBUG_COMPILE: boolean
                            DEBUG_COMPILE_BYTE_CODE_INFO: boolean
                            DEBUG_SEARCH: boolean
                            DEBUG_MATCH: boolean
                        }
                    }
                }
            }
        }
    }
}