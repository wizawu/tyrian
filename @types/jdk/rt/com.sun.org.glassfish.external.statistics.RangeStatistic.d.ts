declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
interface RangeStatistic extends com.sun.org.glassfish.external.statistics.Statistic {
    getHighWaterMark(): long
    getLowWaterMark(): long
    getCurrent(): long
}

                    }
                }
            }
        }
    }
}