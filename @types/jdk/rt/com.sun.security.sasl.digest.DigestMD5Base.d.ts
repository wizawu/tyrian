declare namespace com {
    namespace sun {
        namespace security {
            namespace sasl {
                namespace digest {
abstract class DigestMD5Base extends com.sun.security.sasl.util.AbstractSaslImpl {
    protected static MAX_CHALLENGE_LENGTH: int
    protected static MAX_RESPONSE_LENGTH: int
    protected static DEFAULT_MAXBUF: int
    protected static DES3: int
    protected static RC4: int
    protected static DES: int
    protected static RC4_56: int
    protected static RC4_40: int
    protected static CIPHER_TOKENS: java.lang.String[]
    protected static DES_3_STRENGTH: byte
    protected static RC4_STRENGTH: byte
    protected static DES_STRENGTH: byte
    protected static RC4_56_STRENGTH: byte
    protected static RC4_40_STRENGTH: byte
    protected static UNSET: byte
    protected static CIPHER_MASKS: byte[]
    protected static EMPTY_BYTE_ARRAY: byte[]
    protected step: int
    protected cbh: javax.security.auth.callback.CallbackHandler
    protected secCtx: com.sun.security.sasl.digest.SecurityCtx
    protected H_A1: byte[]
    protected nonce: byte[]
    protected negotiatedStrength: string
    protected negotiatedCipher: string
    protected negotiatedQop: string
    protected negotiatedRealm: string
    protected useUTF8: boolean
    protected encoding: string
    protected digestUri: string
    protected authzid: string
    protected constructor(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string, arg2: int, arg3: java.lang.String | string, arg4: javax.security.auth.callback.CallbackHandler | javax.security.auth.callback.CallbackHandler$$Lambda)
    public getMechanismName(): string
    public unwrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public wrap(arg0: byte[], arg1: int, arg2: int): byte[]
    public dispose(): void
    public getNegotiatedProperty(arg0: java.lang.String | string): java.lang.Object
    protected static generateNonce(): byte[]
    protected static writeQuotedStringValue(arg0: java.io.ByteArrayOutputStream, arg1: byte[]): void
    protected static quotedStringValue(arg0: java.lang.String | string): string
    protected binaryToHex(arg0: byte[]): byte[]
    protected stringToByte_8859_1(arg0: java.lang.String | string): byte[]
    protected static getPlatformCiphers(): byte[]
    protected generateResponseValue(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: char[], arg6: byte[], arg7: byte[], arg8: int, arg9: byte[]): byte[]
    protected static nonceCountToHex(arg0: int): string
    protected static parseDirectives(arg0: byte[], arg1: java.lang.String[], arg2: java.util.List<byte[]>, arg3: int): byte[][]
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}