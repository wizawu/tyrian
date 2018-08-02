declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class ReadTCPTimeoutsImpl implements com.sun.corba.se.spi.transport.ReadTimeouts {
    public constructor(arg0: int, arg1: int, arg2: int, arg3: int)
    public get_initial_time_to_wait(): int
    public get_max_time_to_wait(): int
    public get_backoff_factor(): double
    public get_max_giop_header_time_to_wait(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}