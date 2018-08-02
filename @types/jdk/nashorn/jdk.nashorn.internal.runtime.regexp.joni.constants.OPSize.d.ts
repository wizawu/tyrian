declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace constants {
                            interface OPSize {
                                OPCODE: int
                                RELADDR: int
                                ABSADDR: int
                                LENGTH: int
                                MEMNUM: int
                                STATE_CHECK_NUM: int
                                REPEATNUM: int
                                OPTION: int
                                CODE_POINT: int
                                POINTER: int
                                INDEX: int
                                ANYCHAR_STAR: int
                                ANYCHAR_STAR_PEEK_NEXT: int
                                JUMP: int
                                PUSH: int
                                POP: int
                                PUSH_OR_JUMP_EXACT1: int
                                PUSH_IF_PEEK_NEXT: int
                                REPEAT_INC: int
                                REPEAT_INC_NG: int
                                PUSH_POS: int
                                PUSH_POS_NOT: int
                                POP_POS: int
                                FAIL_POS: int
                                SET_OPTION: int
                                SET_OPTION_PUSH: int
                                FAIL: int
                                MEMORY_START: int
                                MEMORY_START_PUSH: int
                                MEMORY_END_PUSH: int
                                MEMORY_END_PUSH_REC: int
                                MEMORY_END: int
                                MEMORY_END_REC: int
                                PUSH_STOP_BT: int
                                POP_STOP_BT: int
                                NULL_CHECK_START: int
                                NULL_CHECK_END: int
                                LOOK_BEHIND: int
                                PUSH_LOOK_BEHIND_NOT: int
                                FAIL_LOOK_BEHIND_NOT: int
                                CALL: int
                                RETURN: int
                                STATE_CHECK: int
                                STATE_CHECK_PUSH: int
                                STATE_CHECK_PUSH_OR_JUMP: int
                                STATE_CHECK_ANYCHAR_STAR: int
                            }
                        }
                    }
                }
            }
        }
    }
}