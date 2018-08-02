declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace constants {
interface OPCode {
    FINISH: int
    END: int
    EXACT1: int
    EXACT2: int
    EXACT3: int
    EXACT4: int
    EXACT5: int
    EXACTN: int
    EXACT1_IC: int
    EXACTN_IC: int
    CCLASS: int
    CCLASS_MB: int
    CCLASS_MIX: int
    CCLASS_NOT: int
    CCLASS_MB_NOT: int
    CCLASS_MIX_NOT: int
    CCLASS_NODE: int
    ANYCHAR: int
    ANYCHAR_ML: int
    ANYCHAR_STAR: int
    ANYCHAR_ML_STAR: int
    ANYCHAR_STAR_PEEK_NEXT: int
    ANYCHAR_ML_STAR_PEEK_NEXT: int
    WORD: int
    NOT_WORD: int
    WORD_BOUND: int
    NOT_WORD_BOUND: int
    WORD_BEGIN: int
    WORD_END: int
    BEGIN_BUF: int
    END_BUF: int
    BEGIN_LINE: int
    END_LINE: int
    SEMI_END_BUF: int
    BEGIN_POSITION: int
    BACKREF1: int
    BACKREF2: int
    BACKREFN: int
    BACKREFN_IC: int
    BACKREF_MULTI: int
    BACKREF_MULTI_IC: int
    BACKREF_WITH_LEVEL: int
    MEMORY_START: int
    MEMORY_START_PUSH: int
    MEMORY_END_PUSH: int
    MEMORY_END_PUSH_REC: int
    MEMORY_END: int
    MEMORY_END_REC: int
    FAIL: int
    JUMP: int
    PUSH: int
    POP: int
    PUSH_OR_JUMP_EXACT1: int
    PUSH_IF_PEEK_NEXT: int
    REPEAT: int
    REPEAT_NG: int
    REPEAT_INC: int
    REPEAT_INC_NG: int
    REPEAT_INC_SG: int
    REPEAT_INC_NG_SG: int
    NULL_CHECK_START: int
    NULL_CHECK_END: int
    NULL_CHECK_END_MEMST: int
    NULL_CHECK_END_MEMST_PUSH: int
    PUSH_POS: int
    POP_POS: int
    PUSH_POS_NOT: int
    FAIL_POS: int
    PUSH_STOP_BT: int
    POP_STOP_BT: int
    LOOK_BEHIND: int
    PUSH_LOOK_BEHIND_NOT: int
    FAIL_LOOK_BEHIND_NOT: int
    CALL: int
    RETURN: int
    STATE_CHECK_PUSH: int
    STATE_CHECK_PUSH_OR_JUMP: int
    STATE_CHECK: int
    STATE_CHECK_ANYCHAR_STAR: int
    STATE_CHECK_ANYCHAR_ML_STAR: int
    SET_OPTION_PUSH: int
    SET_OPTION: int
}

                        }
                    }
                }
            }
        }
    }
}