declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ScriptEnvironment {
                    public readonly _class_cache_size: int
                    public readonly _compile_only: boolean
                    public readonly _const_as_var: boolean
                    public readonly _callsite_flags: int
                    public readonly _debug_lines: boolean
                    public readonly _dest_dir: string
                    public readonly _dump_on_error: boolean
                    public readonly _early_lvalue_error: boolean
                    public readonly _empty_statements: boolean
                    public readonly _fullversion: boolean
                    public readonly _fx: boolean
                    public readonly _global_per_engine: boolean
                    public readonly _es6: boolean
                    public static readonly COMPILE_ONLY_OPTIMISTIC_ARG: string
                    public readonly _function_statement: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
                    public readonly _lazy_compilation: boolean
                    public readonly _optimistic_types: boolean
                    public readonly _loader_per_compile: boolean
                    public readonly _no_java: boolean
                    public readonly _no_syntax_extensions: boolean
                    public readonly _no_typed_arrays: boolean
                    public readonly _parse_only: boolean
                    public readonly _persistent_cache: boolean
                    public readonly _print_ast: boolean
                    public readonly _print_lower_ast: boolean
                    public readonly _print_code: boolean
                    public readonly _print_code_dir: string
                    public readonly _print_code_func: string
                    public readonly _print_mem_usage: boolean
                    public readonly _print_no_newline: boolean
                    public readonly _print_parse: boolean
                    public readonly _print_lower_parse: boolean
                    public readonly _print_symbols: boolean
                    public readonly _scripting: boolean
                    public readonly _strict: boolean
                    public readonly _version: boolean
                    public readonly _verify_code: boolean
                    public readonly _timezone: java.util.TimeZone
                    public readonly _locale: java.util.Locale
                    public readonly _loggers: java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.options.LoggingOption$LoggerInfo>
                    public readonly _timing: jdk.nashorn.internal.runtime.Timing
                    public constructor(arg0: jdk.nashorn.internal.runtime.options.Options, arg1: java.io.PrintWriter, arg2: java.io.PrintWriter)
                    public getOut(): java.io.PrintWriter
                    public getErr(): java.io.PrintWriter
                    public getNamespace(): jdk.nashorn.internal.codegen.Namespace
                    public getFiles(): java.util.List<java.lang.String>
                    public getArguments(): java.util.List<java.lang.String>
                    public hasLogger(arg0: java.lang.String | string): boolean
                    public isTimingEnabled(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}