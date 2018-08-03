declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                class PrinterStateReason extends javax.print.attribute.EnumSyntax implements javax.print.attribute.Attribute {
                    public static readonly OTHER: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MEDIA_NEEDED: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MEDIA_JAM: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MOVING_TO_PAUSED: javax.print.attribute.standard.PrinterStateReason
                    public static readonly PAUSED: javax.print.attribute.standard.PrinterStateReason
                    public static readonly SHUTDOWN: javax.print.attribute.standard.PrinterStateReason
                    public static readonly CONNECTING_TO_DEVICE: javax.print.attribute.standard.PrinterStateReason
                    public static readonly TIMED_OUT: javax.print.attribute.standard.PrinterStateReason
                    public static readonly STOPPING: javax.print.attribute.standard.PrinterStateReason
                    public static readonly STOPPED_PARTLY: javax.print.attribute.standard.PrinterStateReason
                    public static readonly TONER_LOW: javax.print.attribute.standard.PrinterStateReason
                    public static readonly TONER_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    public static readonly SPOOL_AREA_FULL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly COVER_OPEN: javax.print.attribute.standard.PrinterStateReason
                    public static readonly INTERLOCK_OPEN: javax.print.attribute.standard.PrinterStateReason
                    public static readonly DOOR_OPEN: javax.print.attribute.standard.PrinterStateReason
                    public static readonly INPUT_TRAY_MISSING: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MEDIA_LOW: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MEDIA_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    public static readonly OUTPUT_TRAY_MISSING: javax.print.attribute.standard.PrinterStateReason
                    public static readonly OUTPUT_AREA_ALMOST_FULL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly OUTPUT_AREA_FULL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MARKER_SUPPLY_LOW: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MARKER_SUPPLY_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MARKER_WASTE_ALMOST_FULL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly MARKER_WASTE_FULL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly FUSER_OVER_TEMP: javax.print.attribute.standard.PrinterStateReason
                    public static readonly FUSER_UNDER_TEMP: javax.print.attribute.standard.PrinterStateReason
                    public static readonly OPC_NEAR_EOL: javax.print.attribute.standard.PrinterStateReason
                    public static readonly OPC_LIFE_OVER: javax.print.attribute.standard.PrinterStateReason
                    public static readonly DEVELOPER_LOW: javax.print.attribute.standard.PrinterStateReason
                    public static readonly DEVELOPER_EMPTY: javax.print.attribute.standard.PrinterStateReason
                    public static readonly INTERPRETER_RESOURCE_UNAVAILABLE: javax.print.attribute.standard.PrinterStateReason
                    protected constructor(arg0: int)
                    protected getStringTable(): java.lang.String[]
                    protected getEnumValueTable(): javax.print.attribute.EnumSyntax[]
                    public getCategory(): java.lang.Class<javax.print.attribute.Attribute>
                    public getName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}