declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
class StatisticsAccumulator {
    protected max: double
    protected min: double
    protected unit: string
    public sample(arg0: double): void
    public getValue(): string
    public toString(): string
    protected computeAverage(): double
    protected computeStandardDeviation(): double
    public constructor(arg0: java.lang.String | string)
    public unitTestValidate(arg0: java.lang.String | string, arg1: double, arg2: double, arg3: long, arg4: double, arg5: double): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}