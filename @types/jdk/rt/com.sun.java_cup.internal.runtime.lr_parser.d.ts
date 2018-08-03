declare namespace com {
    namespace sun {
        namespace java_cup {
            namespace internal {
                namespace runtime {
                    abstract class lr_parser {
                        protected static readonly _error_sync_size: int
                        protected _done_parsing: boolean
                        protected tos: int
                        protected cur_token: com.sun.java_cup.internal.runtime.Symbol
                        protected stack: java.util.Stack
                        protected production_tab: short[][]
                        protected action_tab: short[][]
                        protected reduce_tab: short[][]
                        protected lookahead: com.sun.java_cup.internal.runtime.Symbol[]
                        protected lookahead_pos: int
                        public constructor()
                        public constructor(arg0: com.sun.java_cup.internal.runtime.Scanner | com.sun.java_cup.internal.runtime.Scanner$$Lambda)
                        protected error_sync_size(): int
                        public abstract production_table(): short[][]
                        public abstract action_table(): short[][]
                        public abstract reduce_table(): short[][]
                        public abstract start_state(): int
                        public abstract start_production(): int
                        public abstract EOF_sym(): int
                        public abstract error_sym(): int
                        public done_parsing(): void
                        public setScanner(arg0: com.sun.java_cup.internal.runtime.Scanner | com.sun.java_cup.internal.runtime.Scanner$$Lambda): void
                        public getScanner(): com.sun.java_cup.internal.runtime.Scanner
                        public abstract do_action(arg0: int, arg1: com.sun.java_cup.internal.runtime.lr_parser, arg2: java.util.Stack, arg3: int): com.sun.java_cup.internal.runtime.Symbol
                        public user_init(): void
                        protected abstract init_actions(): void
                        public scan(): com.sun.java_cup.internal.runtime.Symbol
                        public report_fatal_error(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public report_error(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public syntax_error(arg0: com.sun.java_cup.internal.runtime.Symbol): void
                        public unrecovered_syntax_error(arg0: com.sun.java_cup.internal.runtime.Symbol): void
                        protected get_action(arg0: int, arg1: int): short
                        protected get_reduce(arg0: int, arg1: int): short
                        public parse(): com.sun.java_cup.internal.runtime.Symbol
                        public debug_message(arg0: java.lang.String | string): void
                        public dump_stack(): void
                        public debug_reduce(arg0: int, arg1: int, arg2: int): void
                        public debug_shift(arg0: com.sun.java_cup.internal.runtime.Symbol): void
                        public debug_stack(): void
                        public debug_parse(): com.sun.java_cup.internal.runtime.Symbol
                        protected error_recovery(arg0: boolean): boolean
                        protected shift_under_error(): boolean
                        protected find_recovery_config(arg0: boolean): boolean
                        protected read_lookahead(): void
                        protected cur_err_token(): com.sun.java_cup.internal.runtime.Symbol
                        protected advance_lookahead(): boolean
                        protected restart_lookahead(): void
                        protected try_parse_ahead(arg0: boolean): boolean
                        protected parse_lookahead(arg0: boolean): void
                        protected static unpackFromStrings(arg0: java.lang.String[]): short[][]
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}