declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
abstract class OperationFactory {
    public static maskErrorAction(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): com.sun.corba.se.spi.orb.Operation
    public static indexAction(arg0: int): com.sun.corba.se.spi.orb.Operation
    public static identityAction(): com.sun.corba.se.spi.orb.Operation
    public static suffixAction(): com.sun.corba.se.spi.orb.Operation
    public static valueAction(): com.sun.corba.se.spi.orb.Operation
    public static booleanAction(): com.sun.corba.se.spi.orb.Operation
    public static integerAction(): com.sun.corba.se.spi.orb.Operation
    public static stringAction(): com.sun.corba.se.spi.orb.Operation
    public static classAction(): com.sun.corba.se.spi.orb.Operation
    public static setFlagAction(): com.sun.corba.se.spi.orb.Operation
    public static URLAction(): com.sun.corba.se.spi.orb.Operation
    public static integerRangeAction(arg0: int, arg1: int): com.sun.corba.se.spi.orb.Operation
    public static listAction(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): com.sun.corba.se.spi.orb.Operation
    public static sequenceAction(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orb.Operation[]): com.sun.corba.se.spi.orb.Operation
    public static compose(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda, arg1: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): com.sun.corba.se.spi.orb.Operation
    public static mapAction(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): com.sun.corba.se.spi.orb.Operation
    public static mapSequenceAction(arg0: com.sun.corba.se.spi.orb.Operation[]): com.sun.corba.se.spi.orb.Operation
    public static convertIntegerToShort(): com.sun.corba.se.spi.orb.Operation
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}