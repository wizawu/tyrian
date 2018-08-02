declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
class ScriptEnvironment {
    public _class_cache_size: int
    public _compile_only: boolean
    public _const_as_var: boolean
    public _callsite_flags: int
    public _debug_lines: boolean
    public _dest_dir: string
    public _dump_on_error: boolean
    public _early_lvalue_error: boolean
    public _empty_statements: boolean
    public _fullversion: boolean
    public _fx: boolean
    public _global_per_engine: boolean
    public _es6: boolean
    public static COMPILE_ONLY_OPTIMISTIC_ARG: string
    public _function_statement: jdk.nashorn.internal.runtime.ScriptEnvironment$FunctionStatementBehavior
    public _lazy_compilation: boolean
    public _optimistic_types: boolean
    public _loader_per_compile: boolean
    public _no_java: boolean
    public _no_syntax_extensions: boolean
    public _no_typed_arrays: boolean
    public _parse_only: boolean
    public _persistent_cache: boolean
    public _print_ast: boolean
    public _print_lower_ast: boolean
    public _print_code: boolean
    public _print_code_dir: string
    public _print_code_func: string
    public _print_mem_usage: boolean
    public _print_no_newline: boolean
    public _print_parse: boolean
    public _print_lower_parse: boolean
    public _print_symbols: boolean
    public _scripting: boolean
    public _strict: boolean
    public _version: boolean
    public _verify_code: boolean
    public _timezone: java.util.TimeZone
    public _locale: java.util.Locale
    public _loggers: java.util.Map<java.lang.String, jdk.nashorn.internal.runtime.options.LoggingOption$LoggerInfo>
    public _timing: jdk.nashorn.internal.runtime.Timing
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