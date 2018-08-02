declare namespace java {
    namespace net {
abstract class Authenticator {
    public constructor()
    public static setDefault(arg0: java.net.Authenticator): void
    public static requestPasswordAuthentication(arg0: java.net.InetAddress, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): java.net.PasswordAuthentication
    public static requestPasswordAuthentication(arg0: java.lang.String | string, arg1: java.net.InetAddress, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string): java.net.PasswordAuthentication
    public static requestPasswordAuthentication(arg0: java.lang.String | string, arg1: java.net.InetAddress, arg2: int, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.net.URL, arg7: java.net.Authenticator$RequestorType): java.net.PasswordAuthentication
    protected getRequestingHost(): string
    protected getRequestingSite(): java.net.InetAddress
    protected getRequestingPort(): int
    protected getRequestingProtocol(): string
    protected getRequestingPrompt(): string
    protected getRequestingScheme(): string
    protected getPasswordAuthentication(): java.net.PasswordAuthentication
    protected getRequestingURL(): java.net.URL
    protected getRequestorType(): java.net.Authenticator$RequestorType
    public static class: java.lang.Class<any>
}

    }
}