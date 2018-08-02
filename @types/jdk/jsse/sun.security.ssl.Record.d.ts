declare namespace sun {
    namespace security {
        namespace ssl {
            interface Record {
                ct_change_cipher_spec: byte
                ct_alert: byte
                ct_handshake: byte
                ct_application_data: byte
                headerSize: int
                maxExpansion: int
                trailerSize: int
                maxDataSize: int
                maxPadding: int
                maxIVLength: int
                headerPlusMaxIVSize: int
                maxRecordSize: int
                enableCBCProtection: boolean
                maxDataSizeMinusOneByteRecord: int
                maxLargeRecordSize: int
                maxAlertRecordSize: int
                OVERFLOW_OF_INT08: int
                OVERFLOW_OF_INT16: int
                OVERFLOW_OF_INT24: int
            }
        }
    }
}