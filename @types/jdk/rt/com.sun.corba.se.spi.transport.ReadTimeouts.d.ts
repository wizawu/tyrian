declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface ReadTimeouts {
    get_initial_time_to_wait(): int
    get_max_time_to_wait(): int
    get_backoff_factor(): double
    get_max_giop_header_time_to_wait(): int
}

                    }
                }
            }
        }
    }
}