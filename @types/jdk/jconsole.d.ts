declare namespace com {
    namespace sun {
        namespace tools {
            namespace jconsole {
                abstract class JConsolePlugin {
                    protected constructor()
                    public setContext(arg0: com.sun.tools.jconsole.JConsoleContext): void
                    public getContext(): com.sun.tools.jconsole.JConsoleContext
                    public getTabs(): java.util.Map<java.lang.String, javax.swing.JPanel>
                    public newSwingWorker(): javax.swing.SwingWorker<any, any>
                    public dispose(): void
                    public addContextPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                    public removeContextPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                }
                interface JConsoleContext {
                    CONNECTION_STATE_PROPERTY: java.lang.String
                    getMBeanServerConnection(): javax.management.MBeanServerConnection
                    getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState
                    addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                    removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                }
                
            }
            
        }
        
    }
    
}
declare namespace sun {
    namespace tools {
        namespace jconsole {
            class Version {
                public constructor()
                public static print(arg0: java.io.PrintStream): void
                public static printFullVersion(arg0: java.io.PrintStream): void
                static getVersion(): java.lang.String
            }
            class AboutDialog extends sun.tools.jconsole.InternalDialog {
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public showDialog(): void
                static showAboutDialog(arg0: sun.tools.jconsole.JConsole): void
                static browseUserGuide(arg0: sun.tools.jconsole.JConsole): void
                static isBrowseSupported(): boolean
                browse(arg0: java.lang.String): void
                static access$000(arg0: sun.tools.jconsole.AboutDialog): javax.swing.JLabel
            }
            class ClassTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener {
                loadedClassesMeter: sun.tools.jconsole.PlotterPanel
                timeComboBox: sun.tools.jconsole.TimeComboBox
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                getOverviewPanels(): sun.tools.jconsole.OverviewPanel[]
                static access$000(arg0: sun.tools.jconsole.ClassTab): sun.tools.jconsole.ClassTab$ClassOverviewPanel
                static access$200(arg0: sun.tools.jconsole.ClassTab): javax.swing.JCheckBox
                static access$300(arg0: sun.tools.jconsole.ClassTab): sun.tools.jconsole.HTMLPane
            }
            class LabeledComponent extends javax.swing.JPanel {
                rightPanel: javax.swing.JPanel
                labelStr: java.lang.String
                valueLabelStr: java.lang.String
                compoundStr: java.lang.String
                label: javax.swing.JLabel
                comp: javax.swing.JComponent
                constructor(...args: any[])
                public setLabel(arg0: java.lang.String): void
                public setValueLabel(arg0: java.lang.String): void
                public static layout(arg0: java.awt.Container): void
            }
            class MemoryTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener , java.awt.event.ItemListener {
                plotterChoice: javax.swing.JComboBox<sun.tools.jconsole.Plotter>
                timeComboBox: sun.tools.jconsole.TimeComboBox
                gcButton: javax.swing.JButton
                plotterPanel: sun.tools.jconsole.PlotterPanel
                bottomPanel: javax.swing.JPanel
                details: sun.tools.jconsole.HTMLPane
                poolChart: sun.tools.jconsole.MemoryTab$PoolChart
                plotterList: java.util.ArrayList<sun.tools.jconsole.Plotter>
                heapPlotter: sun.tools.jconsole.Plotter
                nonHeapPlotter: sun.tools.jconsole.Plotter
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public gc(): void
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                getOverviewPanels(): sun.tools.jconsole.OverviewPanel[]
                static access$000(arg0: sun.tools.jconsole.MemoryTab): void
                static access$100(arg0: sun.tools.jconsole.MemoryTab): java.lang.String
                static access$200(arg0: sun.tools.jconsole.MemoryTab): sun.tools.jconsole.MemoryTab$MemoryOverviewPanel
                static access$400(): java.awt.Color
            }
            class Messages {
                public static ONE_DAY: java.lang.String
                public static ONE_HOUR: java.lang.String
                public static ONE_MIN: java.lang.String
                public static ONE_MONTH: java.lang.String
                public static ONE_YEAR: java.lang.String
                public static TWO_HOURS: java.lang.String
                public static THREE_HOURS: java.lang.String
                public static THREE_MONTHS: java.lang.String
                public static FIVE_MIN: java.lang.String
                public static SIX_HOURS: java.lang.String
                public static SIX_MONTHS: java.lang.String
                public static SEVEN_DAYS: java.lang.String
                public static TEN_MIN: java.lang.String
                public static TWELVE_HOURS: java.lang.String
                public static THIRTY_MIN: java.lang.String
                public static LESS_THAN: java.lang.String
                public static A_LOT_LESS_THAN: java.lang.String
                public static GREATER_THAN: java.lang.String
                public static ACTION_CAPITALIZED: java.lang.String
                public static ACTION_INFO_CAPITALIZED: java.lang.String
                public static ALL: java.lang.String
                public static ARCHITECTURE: java.lang.String
                public static ATTRIBUTE: java.lang.String
                public static ATTRIBUTE_VALUE: java.lang.String
                public static ATTRIBUTE_VALUES: java.lang.String
                public static ATTRIBUTES: java.lang.String
                public static BLANK: java.lang.String
                public static BLOCKED_COUNT_WAITED_COUNT: java.lang.String
                public static BOOT_CLASS_PATH: java.lang.String
                public static BORDERED_COMPONENT_MORE_OR_LESS_BUTTON_TOOLTIP: java.lang.String
                public static CPU_USAGE: java.lang.String
                public static CPU_USAGE_FORMAT: java.lang.String
                public static CANCEL: java.lang.String
                public static CASCADE: java.lang.String
                public static CHART_COLON: java.lang.String
                public static CLASS_PATH: java.lang.String
                public static CLASS_NAME: java.lang.String
                public static CLASS_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static CLASS_TAB_LOADED_CLASSES_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static CLASSES: java.lang.String
                public static CLOSE: java.lang.String
                public static COLUMN_NAME: java.lang.String
                public static COLUMN_PID: java.lang.String
                public static COMMITTED_MEMORY: java.lang.String
                public static COMMITTED_VIRTUAL_MEMORY: java.lang.String
                public static COMMITTED: java.lang.String
                public static CONNECT: java.lang.String
                public static CONNECT_DIALOG_CONNECT_BUTTON_TOOLTIP: java.lang.String
                public static CONNECT_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static CONNECT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: java.lang.String
                public static CONNECT_DIALOG_MASTHEAD_TITLE: java.lang.String
                public static CONNECT_DIALOG_STATUS_BAR_ACCESSIBLE_NAME: java.lang.String
                public static CONNECT_DIALOG_TITLE: java.lang.String
                public static CONNECTED_PUNCTUATION_CLICK_TO_DISCONNECT_: java.lang.String
                public static CONNECTION_FAILED: java.lang.String
                public static CONNECTION: java.lang.String
                public static CONNECTION_NAME: java.lang.String
                public static CONNECTION_NAME__DISCONNECTED_: java.lang.String
                public static CONSTRUCTOR: java.lang.String
                public static CURRENT_CLASSES_LOADED: java.lang.String
                public static CURRENT_HEAP_SIZE: java.lang.String
                public static CURRENT_VALUE: java.lang.String
                public static CREATE: java.lang.String
                public static DAEMON_THREADS: java.lang.String
                public static DISCONNECTED_PUNCTUATION_CLICK_TO_CONNECT_: java.lang.String
                public static DOUBLE_CLICK_TO_EXPAND_FORWARD_SLASH_COLLAPSE: java.lang.String
                public static DOUBLE_CLICK_TO_VISUALIZE: java.lang.String
                public static DESCRIPTION: java.lang.String
                public static DESCRIPTOR: java.lang.String
                public static DETAILS: java.lang.String
                public static DETECT_DEADLOCK: java.lang.String
                public static DETECT_DEADLOCK_TOOLTIP: java.lang.String
                public static DIMENSION_IS_NOT_SUPPORTED_COLON: java.lang.String
                public static DISCARD_CHART: java.lang.String
                public static DURATION_DAYS_HOURS_MINUTES: java.lang.String
                public static DURATION_HOURS_MINUTES: java.lang.String
                public static DURATION_MINUTES: java.lang.String
                public static DURATION_SECONDS: java.lang.String
                public static EMPTY_ARRAY: java.lang.String
                public static ERROR: java.lang.String
                public static ERROR_COLON_MBEANS_ALREADY_EXIST: java.lang.String
                public static ERROR_COLON_MBEANS_DO_NOT_EXIST: java.lang.String
                public static EVENT: java.lang.String
                public static EXIT: java.lang.String
                public static FAIL_TO_LOAD_PLUGIN: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_CANCEL_OPTION: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_MESSAGE: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_OK_OPTION: java.lang.String
                public static FILE_CHOOSER_FILE_EXISTS_TITLE: java.lang.String
                public static FILE_CHOOSER_SAVED_FILE: java.lang.String
                public static FILE_CHOOSER_SAVE_FAILED_MESSAGE: java.lang.String
                public static FILE_CHOOSER_SAVE_FAILED_TITLE: java.lang.String
                public static FREE_PHYSICAL_MEMORY: java.lang.String
                public static FREE_SWAP_SPACE: java.lang.String
                public static GARBAGE_COLLECTOR: java.lang.String
                public static GC_INFO: java.lang.String
                public static GC_TIME: java.lang.String
                public static GC_TIME_DETAILS: java.lang.String
                public static HEAP_MEMORY_USAGE: java.lang.String
                public static HEAP: java.lang.String
                public static HELP_ABOUT_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static HELP_ABOUT_DIALOG_JCONSOLE_VERSION: java.lang.String
                public static HELP_ABOUT_DIALOG_JAVA_VERSION: java.lang.String
                public static HELP_ABOUT_DIALOG_MASTHEAD_ACCESSIBLE_NAME: java.lang.String
                public static HELP_ABOUT_DIALOG_MASTHEAD_TITLE: java.lang.String
                public static HELP_ABOUT_DIALOG_TITLE: java.lang.String
                public static HELP_ABOUT_DIALOG_USER_GUIDE_LINK_URL: java.lang.String
                public static HELP_MENU_ABOUT_TITLE: java.lang.String
                public static HELP_MENU_USER_GUIDE_TITLE: java.lang.String
                public static HELP_MENU_TITLE: java.lang.String
                public static HOTSPOT_MBEANS_ELLIPSIS: java.lang.String
                public static HOTSPOT_MBEANS_DIALOG_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static IMPACT: java.lang.String
                public static INFO: java.lang.String
                public static INFO_CAPITALIZED: java.lang.String
                public static INSECURE: java.lang.String
                public static INVALID_PLUGIN_PATH: java.lang.String
                public static INVALID_URL: java.lang.String
                public static IS: java.lang.String
                public static JAVA_MONITORING___MANAGEMENT_CONSOLE: java.lang.String
                public static JCONSOLE_COLON_: java.lang.String
                public static JCONSOLE_VERSION: java.lang.String
                public static JCONSOLE_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static JIT_COMPILER: java.lang.String
                public static LIBRARY_PATH: java.lang.String
                public static LIVE_THREADS: java.lang.String
                public static LOADED: java.lang.String
                public static LOCAL_PROCESS_COLON: java.lang.String
                public static MASTHEAD_FONT: java.lang.String
                public static MANAGEMENT_NOT_ENABLED: java.lang.String
                public static MANAGEMENT_WILL_BE_ENABLED: java.lang.String
                public static MBEAN_ATTRIBUTE_INFO: java.lang.String
                public static MBEAN_INFO: java.lang.String
                public static MBEAN_NOTIFICATION_INFO: java.lang.String
                public static MBEAN_OPERATION_INFO: java.lang.String
                public static MBEANS: java.lang.String
                public static MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_CLEAR_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_COMPOSITE_NAVIGATION_MULTIPLE: java.lang.String
                public static MBEANS_TAB_COMPOSITE_NAVIGATION_SINGLE: java.lang.String
                public static MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON: java.lang.String
                public static MBEANS_TAB_REFRESH_ATTRIBUTES_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_SUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MBEANS_TAB_TABULAR_NAVIGATION_MULTIPLE: java.lang.String
                public static MBEANS_TAB_TABULAR_NAVIGATION_SINGLE: java.lang.String
                public static MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON: java.lang.String
                public static MBEANS_TAB_UNSUBSCRIBE_NOTIFICATIONS_BUTTON_TOOLTIP: java.lang.String
                public static MANAGE_HOTSPOT_MBEANS_IN_COLON_: java.lang.String
                public static MAX: java.lang.String
                public static MAXIMUM_HEAP_SIZE: java.lang.String
                public static MEMORY: java.lang.String
                public static MEMORY_POOL_LABEL: java.lang.String
                public static MEMORY_TAB_HEAP_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static MEMORY_TAB_NON_HEAP_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_POOL_CHART_ABOVE_THRESHOLD: java.lang.String
                public static MEMORY_TAB_POOL_CHART_ACCESSIBLE_NAME: java.lang.String
                public static MEMORY_TAB_POOL_CHART_BELOW_THRESHOLD: java.lang.String
                public static MEMORY_TAB_POOL_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static MESSAGE: java.lang.String
                public static METHOD_SUCCESSFULLY_INVOKED: java.lang.String
                public static MINIMIZE_ALL: java.lang.String
                public static MONITOR_LOCKED: java.lang.String
                public static NAME: java.lang.String
                public static NAME_STATE: java.lang.String
                public static NAME_STATE_LOCK_NAME: java.lang.String
                public static NAME_STATE_LOCK_NAME_LOCK_OWNER: java.lang.String
                public static NAME_AND_BUILD: java.lang.String
                public static NEW_CONNECTION_ELLIPSIS: java.lang.String
                public static NO_DEADLOCK_DETECTED: java.lang.String
                public static NON_HEAP_MEMORY_USAGE: java.lang.String
                public static NON_HEAP: java.lang.String
                public static NOTIFICATION: java.lang.String
                public static NOTIFICATION_BUFFER: java.lang.String
                public static NOTIFICATIONS: java.lang.String
                public static NOTIF_TYPES: java.lang.String
                public static NUMBER_OF_THREADS: java.lang.String
                public static NUMBER_OF_LOADED_CLASSES: java.lang.String
                public static NUMBER_OF_PROCESSORS: java.lang.String
                public static OBJECT_NAME: java.lang.String
                public static OPERATING_SYSTEM: java.lang.String
                public static OPERATION: java.lang.String
                public static OPERATION_INVOCATION: java.lang.String
                public static OPERATION_RETURN_VALUE: java.lang.String
                public static OPERATIONS: java.lang.String
                public static OVERVIEW: java.lang.String
                public static OVERVIEW_PANEL_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static PARAMETER: java.lang.String
                public static PASSWORD_COLON_: java.lang.String
                public static PASSWORD_ACCESSIBLE_NAME: java.lang.String
                public static PEAK: java.lang.String
                public static PERFORM_GC: java.lang.String
                public static PERFORM_GC_TOOLTIP: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME_KEY_AND_VALUE: java.lang.String
                public static PLOTTER_ACCESSIBLE_NAME_NO_DATA: java.lang.String
                public static PLOTTER_SAVE_AS_MENU_ITEM: java.lang.String
                public static PLOTTER_TIME_RANGE_MENU: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_EXIT: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_IGNORE: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_BUTTON_OK: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_MESSAGE: java.lang.String
                public static PLUGIN_EXCEPTION_DIALOG_TITLE: java.lang.String
                public static PROBLEM_ADDING_LISTENER: java.lang.String
                public static PROBLEM_DISPLAYING_MBEAN: java.lang.String
                public static PROBLEM_INVOKING: java.lang.String
                public static PROBLEM_REMOVING_LISTENER: java.lang.String
                public static PROBLEM_SETTING_ATTRIBUTE: java.lang.String
                public static PROCESS_CPU_TIME: java.lang.String
                public static READABLE: java.lang.String
                public static RECONNECT: java.lang.String
                public static REMOTE_PROCESS_COLON: java.lang.String
                public static REMOTE_PROCESS_TEXT_FIELD_ACCESSIBLE_NAME: java.lang.String
                public static RESTORE_ALL: java.lang.String
                public static RETURN_TYPE: java.lang.String
                public static SEQ_NUM: java.lang.String
                public static SIZE_BYTES: java.lang.String
                public static SIZE_GB: java.lang.String
                public static SIZE_KB: java.lang.String
                public static SIZE_MB: java.lang.String
                public static SOURCE: java.lang.String
                public static STACK_TRACE: java.lang.String
                public static SUMMARY_TAB_HEADER_DATE_TIME_FORMAT: java.lang.String
                public static SUMMARY_TAB_PENDING_FINALIZATION_LABEL: java.lang.String
                public static SUMMARY_TAB_PENDING_FINALIZATION_VALUE: java.lang.String
                public static SUMMARY_TAB_TAB_NAME: java.lang.String
                public static SUMMARY_TAB_VM_VERSION: java.lang.String
                public static THREADS: java.lang.String
                public static THREAD_TAB_INFO_LABEL_FORMAT: java.lang.String
                public static THREAD_TAB_THREAD_INFO_ACCESSIBLE_NAME: java.lang.String
                public static THREAD_TAB_THREAD_PLOTTER_ACCESSIBLE_NAME: java.lang.String
                public static THREAD_TAB_INITIAL_STACK_TRACE_MESSAGE: java.lang.String
                public static THRESHOLD: java.lang.String
                public static TILE: java.lang.String
                public static TIME_RANGE_COLON: java.lang.String
                public static TIME: java.lang.String
                public static TIME_STAMP: java.lang.String
                public static TOTAL_LOADED: java.lang.String
                public static TOTAL_CLASSES_LOADED: java.lang.String
                public static TOTAL_CLASSES_UNLOADED: java.lang.String
                public static TOTAL_COMPILE_TIME: java.lang.String
                public static TOTAL_PHYSICAL_MEMORY: java.lang.String
                public static TOTAL_THREADS_STARTED: java.lang.String
                public static TOTAL_SWAP_SPACE: java.lang.String
                public static TYPE: java.lang.String
                public static UNAVAILABLE: java.lang.String
                public static UNKNOWN_CAPITALIZED: java.lang.String
                public static UNKNOWN_HOST: java.lang.String
                public static UNREGISTER: java.lang.String
                public static UPTIME: java.lang.String
                public static USAGE_THRESHOLD: java.lang.String
                public static REMOTE_TF_USAGE: java.lang.String
                public static USED: java.lang.String
                public static USERNAME_COLON_: java.lang.String
                public static USERNAME_ACCESSIBLE_NAME: java.lang.String
                public static USER_DATA: java.lang.String
                public static VIRTUAL_MACHINE: java.lang.String
                public static VM_ARGUMENTS: java.lang.String
                public static VMINTERNAL_FRAME_ACCESSIBLE_DESCRIPTION: java.lang.String
                public static VALUE: java.lang.String
                public static VENDOR: java.lang.String
                public static VERBOSE_OUTPUT: java.lang.String
                public static VERBOSE_OUTPUT_TOOLTIP: java.lang.String
                public static VIEW: java.lang.String
                public static WINDOW: java.lang.String
                public static WINDOWS: java.lang.String
                public static WRITABLE: java.lang.String
                public static CONNECTION_FAILED1: java.lang.String
                public static CONNECTION_FAILED2: java.lang.String
                public static CONNECTION_FAILED_SSL1: java.lang.String
                public static CONNECTION_FAILED_SSL2: java.lang.String
                public static CONNECTION_LOST1: java.lang.String
                public static CONNECTING_TO1: java.lang.String
                public static CONNECTING_TO2: java.lang.String
                public static DEADLOCK_TAB: java.lang.String
                public static DEADLOCK_TAB_N: java.lang.String
                public static EXPAND: java.lang.String
                public static KBYTES: java.lang.String
                public static PLOT: java.lang.String
                public static VISUALIZE: java.lang.String
                public static ZZ_USAGE_TEXT: java.lang.String
                public constructor()
            }
            class OutputViewer {
                public constructor()
                public static init(): void
                static access$000(arg0: java.lang.String): void
            }
            class OverviewTab extends sun.tools.jconsole.Tab {
                gridPanel: javax.swing.JPanel
                timeComboBox: sun.tools.jconsole.TimeComboBox
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
            }
            class Resources {
                public static format(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.lang.String
                public static getMnemonicInt(arg0: java.lang.String): int
                public static initializeMessages(arg0: java.lang.Class<any>, arg1: java.lang.String): void
            }
            class SheetDialog {
                static showOptionDialog(arg0: sun.tools.jconsole.VMPanel, arg1: java.lang.Object, arg2: int, arg3: int, arg4: javax.swing.Icon, arg5: java.lang.Object[], arg6: java.lang.Object): javax.swing.JOptionPane
                static access$000(): java.awt.Insets
                static access$100(): java.awt.Rectangle
                static access$200(): java.awt.Rectangle
                static access$300(): java.awt.Rectangle
            }
            class HTMLPane extends javax.swing.JEditorPane {
                public constructor()
                public setHasSelection(arg0: boolean): void
                public getHasSelection(): boolean
                public setText(arg0: java.lang.String): void
            }
            class SummaryTab extends sun.tools.jconsole.Tab {
                info: sun.tools.jconsole.HTMLPane
                buf: java.lang.StringBuilder
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                formatSummary(): sun.tools.jconsole.SummaryTab$Result
                append(arg0: java.lang.String, arg1: java.lang.String): void
                getOverviewPanels(): sun.tools.jconsole.OverviewPanel[]
                static access$000(arg0: sun.tools.jconsole.SummaryTab): sun.tools.jconsole.SummaryTab$CPUOverviewPanel
            }
            class ThreadTab extends sun.tools.jconsole.Tab implements java.awt.event.ActionListener , javax.swing.event.DocumentListener , javax.swing.event.ListSelectionListener {
                threadMeter: sun.tools.jconsole.PlotterPanel
                timeComboBox: sun.tools.jconsole.TimeComboBox
                threadListTabbedPane: javax.swing.JTabbedPane
                listModel: javax.swing.DefaultListModel<java.lang.Long>
                filterTF: javax.swing.JTextField
                messageLabel: javax.swing.JLabel
                threadsSplitPane: javax.swing.JSplitPane
                nameCache: java.util.HashMap<java.lang.Long, java.lang.String>
                lastSelected: long
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                public getDeadlockedThreadIds(): java.lang.Long[][]
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                getOverviewPanels(): sun.tools.jconsole.OverviewPanel[]
                static access$000(arg0: sun.tools.jconsole.ThreadTab): sun.tools.jconsole.ThreadTab$ThreadOverviewPanel
                static access$200(arg0: sun.tools.jconsole.ThreadTab): long[]
                static access$202(arg0: sun.tools.jconsole.ThreadTab, arg1: long[]): long[]
                static access$400(): javax.swing.border.Border
            }
            class TimeComboBox extends javax.swing.JComboBox implements java.awt.event.ItemListener , java.beans.PropertyChangeListener {
                public constructor(...arg0: sun.tools.jconsole.Plotter[])
                public addPlotter(arg0: sun.tools.jconsole.Plotter): void
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
            }
            class VariableGridLayout extends java.awt.GridLayout {
                public constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: boolean, arg5: boolean)
                public setFillRow(arg0: javax.swing.JComponent, arg1: boolean): void
                public setFillColumn(arg0: javax.swing.JComponent, arg1: boolean): void
                public getFillRow(arg0: javax.swing.JComponent): boolean
                public getFillColumn(arg0: javax.swing.JComponent): boolean
                public layoutContainer(arg0: java.awt.Container): void
                public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
            }
            class CreateMBeanDialog extends sun.tools.jconsole.InternalDialog implements java.awt.event.ActionListener {
                jConsole: sun.tools.jconsole.JConsole
                connections: javax.swing.JComboBox<sun.tools.jconsole.ProxyClient>
                createMBeanButton: javax.swing.JButton
                unregisterMBeanButton: javax.swing.JButton
                cancelButton: javax.swing.JButton
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public setVisible(arg0: boolean): void
            }
            class InternalDialog extends javax.swing.JInternalFrame {
                protected statusBar: javax.swing.JLabel
                public constructor(arg0: sun.tools.jconsole.JConsole, arg1: java.lang.String, arg2: boolean)
                public setLocationRelativeTo(arg0: java.awt.Component): void
            }
            class ConnectDialog extends sun.tools.jconsole.InternalDialog implements javax.swing.event.DocumentListener , java.awt.event.FocusListener , java.awt.event.ItemListener , javax.swing.event.ListSelectionListener , java.awt.event.KeyListener {
                jConsole: sun.tools.jconsole.JConsole
                userNameTF: javax.swing.JTextField
                passwordTF: javax.swing.JTextField
                localRadioButton: javax.swing.JRadioButton
                remoteRadioButton: javax.swing.JRadioButton
                localMessageLabel: javax.swing.JLabel
                remoteMessageLabel: javax.swing.JLabel
                remoteTF: javax.swing.JTextField
                connectButton: javax.swing.JButton
                cancelButton: javax.swing.JButton
                radioButtonPanel: javax.swing.JPanel
                vmTable: javax.swing.JTable
                vmModel: sun.tools.jconsole.ConnectDialog$ManagedVmTableModel
                localTableScrollPane: javax.swing.JScrollPane
                public constructor(arg0: sun.tools.jconsole.JConsole)
                public revalidate(): void
                public static getLabelWidth(arg0: java.lang.String): int
                public setConnectionParameters(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String): void
                public itemStateChanged(arg0: java.awt.event.ItemEvent): void
                public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public keyTyped(arg0: java.awt.event.KeyEvent): void
                public setVisible(arg0: boolean): void
                public keyPressed(arg0: java.awt.event.KeyEvent): void
                public keyReleased(arg0: java.awt.event.KeyEvent): void
                public valueChanged(arg0: javax.swing.event.ListSelectionEvent): void
                public refresh(): void
                static access$000(arg0: sun.tools.jconsole.ConnectDialog): javax.swing.Action
                static access$100(arg0: sun.tools.jconsole.ConnectDialog): java.awt.Color
            }
            class Plotter extends javax.swing.JComponent implements javax.accessibility.Accessible , java.awt.event.ActionListener , java.beans.PropertyChangeListener {
                static rangeNames: java.lang.String[]
                static rangeValues: int[]
                static SECOND: long
                static MINUTE: long
                static HOUR: long
                static DAY: long
                static bgColor: java.awt.Color
                static defaultColor: java.awt.Color
                static ARRAY_SIZE_INCREMENT: int
                static $assertionsDisabled: boolean
                constructor(...args: any[])
                public setUnit(arg0: sun.tools.jconsole.Plotter$Unit): void
                public setDecimals(arg0: int): void
                public createSequence(arg0: java.lang.String, arg1: java.lang.String, arg2: java.awt.Color, arg3: boolean): void
                public setUseDashedTransitions(arg0: java.lang.String, arg1: boolean): void
                public setIsPlotted(arg0: java.lang.String, arg1: boolean): void
                public addValues(arg0: long, ...arg1: long[]): void
                public getViewRange(): int
                public setViewRange(arg0: int): void
                public getComponentPopupMenu(): javax.swing.JPopupMenu
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public paintComponent(arg0: java.awt.Graphics): void
                getValue(): long
                getLastTimeStamp(): long
                getLastValue(arg0: java.lang.String): long
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public getAccessibleContext(): javax.accessibility.AccessibleContext
                static access$100(arg0: java.lang.Object): java.lang.Object
                static access$200(arg0: sun.tools.jconsole.Plotter): java.util.ArrayList
                static access$300(arg0: sun.tools.jconsole.Plotter): sun.tools.jconsole.Plotter$Unit
                static access$400(arg0: sun.tools.jconsole.Plotter, arg1: long, arg2: boolean): java.lang.String
            }
            class Formatter {
                static SECOND: long
                static MINUTE: long
                static HOUR: long
                static DAY: long
                static cr: java.lang.String
                static timeDF: java.text.DateFormat
                constructor()
                static formatTime(arg0: long): java.lang.String
                static formatNanoTime(arg0: long): java.lang.String
                static formatClockTime(arg0: long): java.lang.String
                static formatDate(arg0: long): java.lang.String
                static formatDateTime(arg0: long): java.lang.String
                static getDateTimeFormat(arg0: java.lang.String): java.text.DateFormat
                static toExcelTime(arg0: long): double
                static formatKByteStrings(...arg0: long[]): java.lang.String[]
                static formatKBytes(arg0: long): java.lang.String
                static formatBytes<T>(...args: any[]): any
                static formatLong(arg0: long): java.lang.String
                static formatLongs(...arg0: long[]): java.lang.String[]
                static justify<T>(...args: any[]): any
                static newRow<T>(...args: any[]): any
            }
            class MemoryPoolStat {
                constructor(arg0: java.lang.String, arg1: long, arg2: java.lang.management.MemoryUsage, arg3: long, arg4: long, arg5: long, arg6: long, arg7: java.lang.management.MemoryUsage, arg8: java.lang.management.MemoryUsage)
                public getPoolName(): java.lang.String
                public getUsage(): java.lang.management.MemoryUsage
                public getUsageThreshold(): long
                public getCollectionUsageThreshold(): long
                public getLastGcId(): long
                public getLastGcStartTime(): long
                public getLastGcEndTime(): long
                public getBeforeGcUsage(): java.lang.management.MemoryUsage
                public getAfterGcUsage(): java.lang.management.MemoryUsage
            }
            class ExceptionSafePlugin extends com.sun.tools.jconsole.JConsolePlugin {
                public constructor(arg0: com.sun.tools.jconsole.JConsolePlugin)
                public getTabs(): java.util.Map<java.lang.String, javax.swing.JPanel>
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public dispose(): void
                public executeSwingWorker(arg0: javax.swing.SwingWorker<any, any>): void
            }
            class MaximizableInternalFrame extends javax.swing.JInternalFrame {
                public constructor(arg0: java.lang.String, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean)
                public updateUI(): void
                public setTitle(arg0: java.lang.String): void
                static access$000(arg0: sun.tools.jconsole.MaximizableInternalFrame): void
                static access$100(): java.lang.Object
                static access$200(): java.lang.Object
                static access$300(): java.lang.Object
                static access$400(): java.lang.Object
                static access$500(): java.lang.Object
                static access$600(): java.lang.Object
            }
            class VMInternalFrame extends sun.tools.jconsole.MaximizableInternalFrame {
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public getVMPanel(): sun.tools.jconsole.VMPanel
                public getPreferredSize(): java.awt.Dimension
            }
            class BorderedComponent extends javax.swing.JPanel implements java.awt.event.ActionListener {
                moreOrLessButton: javax.swing.JButton
                valueLabelStr: java.lang.String
                label: javax.swing.JLabel
                comp: javax.swing.JComponent
                collapsed: boolean
                constructor(...args: any[])
                public setComponent(arg0: javax.swing.JComponent): void
                public setValueLabel(arg0: java.lang.String): void
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public getMinimumSize(): java.awt.Dimension
                public doLayout(): void
            }
            class PlotterPanel extends sun.tools.jconsole.BorderedComponent {
                plotter: sun.tools.jconsole.Plotter
                constructor(...args: any[])
                public getPlotter(): sun.tools.jconsole.Plotter
                public setPlotter(arg0: sun.tools.jconsole.Plotter): void
                public getComponentPopupMenu(): javax.swing.JPopupMenu
                public getAccessibleContext(): javax.accessibility.AccessibleContext
            }
            abstract class OverviewPanel extends sun.tools.jconsole.PlotterPanel {
                static VIEW_RANGE: int
                static PLOTTER_COLOR: java.awt.Color
                constructor(...args: any[])
                public getInfoLabel(): javax.swing.JLabel
            }
            class JConsole extends javax.swing.JFrame implements java.awt.event.ActionListener , javax.swing.event.InternalFrameListener {
                static IS_GTK: boolean
                static IS_WIN: boolean
                public static ROOT_URL: java.lang.String
                static debug: boolean
                static updateLafValues(): void
                public constructor(arg0: boolean)
                public getDesktopPane(): javax.swing.JDesktopPane
                public getInternalFrames(): java.util.List<sun.tools.jconsole.VMInternalFrame>
                public actionPerformed(arg0: java.awt.event.ActionEvent): void
                public tileWindows(): void
                public cascadeWindows(): void
                addHost<T>(...args: any[]): any
                addVmid<T>(...args: any[]): any
                addUrl(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: boolean): void
                addProxyClient(arg0: sun.tools.jconsole.ProxyClient, arg1: boolean): void
                static isValidRemoteString(arg0: java.lang.String): boolean
                public internalFrameClosing(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameOpened(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameClosed(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameIconified(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameDeiconified(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameActivated(arg0: javax.swing.event.InternalFrameEvent): void
                public internalFrameDeactivated(arg0: javax.swing.event.InternalFrameEvent): void
                public static main(arg0: java.lang.String[]): void
                public static isDebug(): boolean
                public static isLocalAttachAvailable(): boolean
                static getPlugins(): java.util.List<com.sun.tools.jconsole.JConsolePlugin>
                static access$102(arg0: sun.tools.jconsole.JConsole, arg1: javax.swing.JMenuItem): javax.swing.JMenuItem
                static access$100(arg0: sun.tools.jconsole.JConsole): javax.swing.JMenuItem
                static access$202(arg0: sun.tools.jconsole.JConsole, arg1: javax.swing.JMenuItem): javax.swing.JMenuItem
                static access$200(arg0: sun.tools.jconsole.JConsole): javax.swing.JMenuItem
                static access$302(arg0: sun.tools.jconsole.JConsole, arg1: javax.swing.JMenuItem): javax.swing.JMenuItem
                static access$300(arg0: sun.tools.jconsole.JConsole): javax.swing.JMenuItem
                static access$402(arg0: sun.tools.jconsole.JConsole, arg1: javax.swing.JMenuItem): javax.swing.JMenuItem
                static access$400(arg0: sun.tools.jconsole.JConsole): javax.swing.JMenuItem
                static access$500(arg0: sun.tools.jconsole.JConsole, arg1: java.lang.Exception, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): void
                static access$600(arg0: java.lang.Exception): void
                static access$700(arg0: sun.tools.jconsole.JConsole, arg1: java.lang.Exception): java.lang.String
                static access$800(arg0: sun.tools.jconsole.JConsole, arg1: java.lang.String, arg2: java.lang.String, arg3: int, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String): void
                static access$900(): int
                static access$1000(arg0: sun.tools.jconsole.JConsole, arg1: sun.tools.jconsole.VMPanel): sun.tools.jconsole.VMInternalFrame
                static access$1300(arg0: sun.tools.jconsole.JConsole): void
            }
            class Utilities {
                public constructor()
                public static updateTransparency(arg0: javax.swing.JComponent): void
                public static newTableScrollPane(arg0: javax.swing.JComponent): javax.swing.JScrollPane
                public static setAccessibleName(arg0: javax.accessibility.Accessible, arg1: java.lang.String): void
                public static setAccessibleDescription(arg0: javax.accessibility.Accessible, arg1: java.lang.String): void
                public static ensureContrast(arg0: java.awt.Color, arg1: java.awt.Color): java.awt.Color
                public static getColorBrightness(arg0: java.awt.Color): double
            }
            class Worker extends java.lang.Thread {
                jobs: java.util.ArrayList<java.lang.Runnable>
                public constructor(arg0: java.lang.String)
                public run(): void
                public stopWorker(): void
                public add(arg0: java.lang.Runnable): void
                public queueFull(): boolean
            }
            class MemoryPoolProxy {
                static $assertionsDisabled: boolean
                public constructor(arg0: sun.tools.jconsole.ProxyClient, arg1: javax.management.ObjectName)
                public isCollectedMemoryPool(): boolean
                public getStat(): sun.tools.jconsole.MemoryPoolStat
            }
            class LocalVirtualMachine {
                public constructor(arg0: int, arg1: java.lang.String, arg2: boolean, arg3: java.lang.String)
                public vmid(): int
                public isManageable(): boolean
                public isAttachable(): boolean
                public startManagementAgent(): void
                public connectorAddress(): java.lang.String
                public displayName(): java.lang.String
                toString<T>(...args: any[]): any
                public static getAllVirtualMachines(): java.util.Map<java.lang.Integer, sun.tools.jconsole.LocalVirtualMachine>
                public static getLocalVirtualMachine(arg0: int): sun.tools.jconsole.LocalVirtualMachine
            }
            class VMPanel extends javax.swing.JTabbedPane implements java.beans.PropertyChangeListener {
                public static getTabInfos(): sun.tools.jconsole.VMPanel$TabInfo[]
                constructor(arg0: sun.tools.jconsole.ProxyClient, arg1: int)
                public setUI(arg0: javax.swing.plaf.TabbedPaneUI): void
                protected paintComponent(arg0: java.awt.Graphics): void
                public getToolTipText(arg0: java.awt.event.MouseEvent): java.lang.String
                public removeTabAt(arg0: int): void
                isConnected(): boolean
                public getUpdateInterval(): int
                getProxyClient<T>(...args: any[]): any
                public cleanUp(): void
                public connect(): void
                public disconnect(): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                updateFrameTitle(): void
                getTabs(): java.util.List<sun.tools.jconsole.Tab>
                public getHostName(): java.lang.String
                public getPort(): int
                public getUserName(): java.lang.String
                public getUrl(): java.lang.String
                public getPassword(): java.lang.String
                public getConnectionName(): java.lang.String
                public getDisplayName(): java.lang.String
                static access$000(arg0: sun.tools.jconsole.VMPanel): java.awt.Rectangle
                static access$102(arg0: sun.tools.jconsole.VMPanel, arg1: boolean): boolean
                static access$202(arg0: sun.tools.jconsole.VMPanel, arg1: boolean): boolean
                static access$300(arg0: sun.tools.jconsole.VMPanel): boolean
                static access$400(arg0: sun.tools.jconsole.VMPanel): sun.tools.jconsole.ProxyClient
                static access$500(arg0: sun.tools.jconsole.VMPanel): long
                static access$600(arg0: sun.tools.jconsole.VMPanel): javax.swing.JOptionPane
                static access$702(arg0: sun.tools.jconsole.VMPanel, arg1: javax.swing.JProgressBar): javax.swing.JProgressBar
                static access$800(arg0: sun.tools.jconsole.VMPanel): void
                static access$302(arg0: sun.tools.jconsole.VMPanel, arg1: boolean): boolean
                static access$900(arg0: sun.tools.jconsole.VMPanel): boolean
                static access$1000(arg0: sun.tools.jconsole.VMPanel): sun.tools.jconsole.VMInternalFrame
                static access$1100(arg0: sun.tools.jconsole.VMPanel): void
            }
            abstract class Tab extends javax.swing.JPanel {
                protected vmPanel: sun.tools.jconsole.VMPanel
                public constructor(arg0: sun.tools.jconsole.VMPanel, arg1: java.lang.String)
                public newSwingWorker(): javax.swing.SwingWorker<any, any>
                public update(): void
                public dispose(): void
                protected getVMPanel(): sun.tools.jconsole.VMPanel
                getOverviewPanels(): sun.tools.jconsole.OverviewPanel[]
                public workerAdd(arg0: java.lang.Runnable): void
                public getPreferredSize(): java.awt.Dimension
            }
            class MBeansTab extends sun.tools.jconsole.Tab implements javax.management.NotificationListener , java.beans.PropertyChangeListener , javax.swing.event.TreeSelectionListener , javax.swing.event.TreeWillExpandListener {
                public static getTabName(): java.lang.String
                public constructor(arg0: sun.tools.jconsole.VMPanel)
                public getDataViewer(): sun.tools.jconsole.inspector.XDataViewer
                public getTree(): sun.tools.jconsole.inspector.XTree
                public getSheet(): sun.tools.jconsole.inspector.XSheet
                public dispose(): void
                public getUpdateInterval(): int
                public getMBeanServerConnection(): javax.management.MBeanServerConnection
                public getSnapshotMBeanServerConnection(): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                public update(): void
                public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                public propertyChange(arg0: java.beans.PropertyChangeEvent): void
                public valueChanged(arg0: javax.swing.event.TreeSelectionEvent): void
                public treeWillExpand(arg0: javax.swing.event.TreeExpansionEvent): void
                public treeWillCollapse(arg0: javax.swing.event.TreeExpansionEvent): void
                static access$000(arg0: sun.tools.jconsole.MBeansTab): sun.tools.jconsole.inspector.XTree
                static access$100(arg0: sun.tools.jconsole.MBeansTab): sun.tools.jconsole.inspector.XSheet
            }
            class ProxyClient implements com.sun.tools.jconsole.JConsoleContext {
                static $assertionsDisabled: boolean
                public isSslRmiRegistry(): boolean
                public isSslRmiStub(): boolean
                public isVmConnector(): boolean
                public getConnectionState(): com.sun.tools.jconsole.JConsoleContext$ConnectionState
                flush(): void
                connect(arg0: boolean): void
                static getProxyClient<T>(...args: any[]): any
                static getConnectionName<T>(...args: any[]): any
                public connectionName(): java.lang.String
                public getDisplayName(): java.lang.String
                toString<T>(...args: any[]): any
                public getMBeanServerConnection(): javax.management.MBeanServerConnection
                public getSnapshotMBeanServerConnection(): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                public getUrl(): java.lang.String
                public getHostName(): java.lang.String
                public getPort(): int
                public getVmid(): int
                public getUserName(): java.lang.String
                public getPassword(): java.lang.String
                public disconnect(): void
                public getDomains(): java.lang.String[]
                public getMBeans(arg0: java.lang.String): java.util.Map<javax.management.ObjectName, javax.management.MBeanInfo>
                public getAttributes(arg0: javax.management.ObjectName, arg1: java.lang.String[]): javax.management.AttributeList
                public setAttribute(arg0: javax.management.ObjectName, arg1: javax.management.Attribute): void
                public invoke(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: java.lang.Object[], arg3: java.lang.String[]): java.lang.Object
                public getClassLoadingMXBean(): java.lang.management.ClassLoadingMXBean
                public getCompilationMXBean(): java.lang.management.CompilationMXBean
                public getMemoryPoolProxies(): java.util.Collection<sun.tools.jconsole.MemoryPoolProxy>
                public getGarbageCollectorMXBeans(): java.util.Collection<java.lang.management.GarbageCollectorMXBean>
                public getMemoryMXBean(): java.lang.management.MemoryMXBean
                public getRuntimeMXBean(): java.lang.management.RuntimeMXBean
                public getThreadMXBean(): java.lang.management.ThreadMXBean
                public getOperatingSystemMXBean(): java.lang.management.OperatingSystemMXBean
                public getSunOperatingSystemMXBean(): com.sun.management.OperatingSystemMXBean
                public getHotSpotDiagnosticMXBean(): com.sun.management.HotSpotDiagnosticMXBean
                public getMXBean<T>(arg0: javax.management.ObjectName, arg1: java.lang.Class<T>): T
                public findDeadlockedThreads<T>(): long[]
                public markAsDead<T>(): void
                public isDead<T>(): boolean
                isConnected<T>(): boolean
                hasPlatformMXBeans<T>(): boolean
                hasHotSpotDiagnosticMXBean<T>(): boolean
                isLockUsageSupported<T>(): boolean
                public isRegistered<T>(arg0: javax.management.ObjectName): boolean
                public addPropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
                public addWeakPropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
                public removePropertyChangeListener<T>(arg0: java.beans.PropertyChangeListener): void
            }
            namespace inspector {
                class IconManager {
                    public static MBEAN: javax.swing.Icon
                    public static MBEANSERVERDELEGATE: javax.swing.Icon
                    public static DEFAULT_XOBJECT: javax.swing.Icon
                    public constructor()
                }
                class TableSorter extends javax.swing.table.DefaultTableModel implements java.awt.event.MouseListener {
                    constructor(...args: any[])
                    public newDataAvailable(arg0: javax.swing.event.TableModelEvent): void
                    public addTableModelListener(arg0: javax.swing.event.TableModelListener): void
                    public removeTableModelListener(arg0: javax.swing.event.TableModelListener): void
                    sortByColumn<T>(...args: any[]): any
                    public getIndexOfRow(arg0: int): int
                    public addMouseListenerToHeaderInTable(arg0: javax.swing.JTable): void
                    public mouseClicked(arg0: java.awt.event.MouseEvent): void
                    public mousePressed(arg0: java.awt.event.MouseEvent): void
                    public mouseEntered(arg0: java.awt.event.MouseEvent): void
                    public mouseExited(arg0: java.awt.event.MouseEvent): void
                    public mouseReleased(arg0: java.awt.event.MouseEvent): void
                }
                class ThreadDialog implements java.lang.Runnable {
                    parentComponent: java.awt.Component
                    message: java.lang.Object
                    title: java.lang.String
                    messageType: int
                    public constructor(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.lang.String, arg3: int)
                    public run(): void
                }
                class XArrayDataViewer {
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadArray(arg0: java.lang.Object): java.awt.Component
                }
                class Utils {
                    public static getClass(arg0: java.lang.String): java.lang.Class<any>
                    public static isUniformCollection(arg0: java.util.Collection<any>, arg1: java.lang.Class<any>): boolean
                    public static canBeRenderedAsArray(arg0: java.lang.Object): boolean
                    public static isSupportedArray(arg0: java.lang.Object): boolean
                    public static getArrayClassName(arg0: java.lang.String): java.lang.String
                    public static getReadableClassName(arg0: java.lang.String): java.lang.String
                    public static isEditableType(arg0: java.lang.String): boolean
                    public static getDefaultValue(arg0: java.lang.String): java.lang.String
                    public static newStringConstructor(arg0: java.lang.String, arg1: java.lang.String): java.lang.Object
                    public static createObjectFromString(arg0: java.lang.String, arg1: java.lang.String): java.lang.Object
                    public static getParameters(arg0: sun.tools.jconsole.inspector.XTextField[], arg1: java.lang.String[]): java.lang.Object[]
                    public static getActualException(arg0: java.lang.Throwable): java.lang.Throwable
                    static access$000(): java.util.Set
                }
                class XOpenTypeViewer extends javax.swing.JPanel implements java.awt.event.ActionListener {
                    prev: javax.swing.JButton
                    incr: javax.swing.JButton
                    decr: javax.swing.JButton
                    tabularPrev: javax.swing.JButton
                    tabularNext: javax.swing.JButton
                    compositeLabel: javax.swing.JLabel
                    tabularLabel: javax.swing.JLabel
                    container: javax.swing.JScrollPane
                    current: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData
                    listener: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeDataListener
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadOpenType(arg0: java.lang.Object): java.awt.Component
                    setOpenType(arg0: sun.tools.jconsole.inspector.XOpenTypeViewer$XOpenTypeData): void
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    static access$000(): javax.swing.table.TableCellEditor
                }
                class XPlotter extends sun.tools.jconsole.Plotter {
                    table: javax.swing.JTable
                    public constructor(arg0: javax.swing.JTable, arg1: sun.tools.jconsole.Plotter$Unit)
                    public addValues(arg0: long, ...arg1: long[]): void
                }
                class XPlottingViewer extends sun.tools.jconsole.PlotterPanel implements java.awt.event.ActionListener {
                    static dispose(arg0: sun.tools.jconsole.MBeansTab): void
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static loadPlotting(arg0: sun.tools.jconsole.inspector.XMBean, arg1: java.lang.String, arg2: java.lang.Object, arg3: javax.swing.JTable, arg4: sun.tools.jconsole.MBeansTab): java.awt.Component
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public createPlotter(arg0: sun.tools.jconsole.inspector.XMBean, arg1: java.lang.String, arg2: java.lang.String, arg3: javax.swing.JTable): sun.tools.jconsole.Plotter
                    static access$000(arg0: sun.tools.jconsole.inspector.XPlottingViewer): sun.tools.jconsole.MBeansTab
                }
                class XTextFieldEditor extends sun.tools.jconsole.inspector.XTextField implements javax.swing.table.TableCellEditor {
                    protected evtListenerList: javax.swing.event.EventListenerList
                    protected changeEvent: javax.swing.event.ChangeEvent
                    public constructor()
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    protected dropSuccess(): void
                    public addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                    public removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
                    protected fireEditingStopped(): void
                    protected fireEditingCanceled(): void
                    public cancelCellEditing(): void
                    public stopCellEditing(): boolean
                    public isCellEditable(arg0: java.util.EventObject): boolean
                    public shouldSelectCell(arg0: java.util.EventObject): boolean
                    public getCellEditorValue(): java.lang.Object
                    public getTableCellEditorComponent(arg0: javax.swing.JTable, arg1: java.lang.Object, arg2: boolean, arg3: int, arg4: int): java.awt.Component
                }
                class XObject extends javax.swing.JLabel {
                    public static NULL_OBJECT: sun.tools.jconsole.inspector.XObject
                    constructor(...args: any[])
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getObject(): java.lang.Object
                    public static useHashCodeRepresentation(arg0: boolean): void
                    public static hashCodeRepresentation(): boolean
                    public setObject(arg0: java.lang.Object): void
                }
                class XTextField extends javax.swing.JPanel implements javax.swing.event.DocumentListener , java.awt.event.ActionListener {
                    protected textField: javax.swing.JTextField
                    protected static COMPATIBLE_VALUE: int
                    protected static CURRENT_VALUE: int
                    protected static NULL_VALUE: int
                    constructor(...args: any[])
                    public static setNullSelectionAllowed(arg0: boolean): void
                    public static getNullSelectionAllowed(): boolean
                    protected init(arg0: java.lang.Object, arg1: java.lang.Class<any>): void
                    public setHorizontalAlignment(arg0: int): void
                    protected buildJMenuItem(arg0: sun.tools.jconsole.inspector.XObject, arg1: int): javax.swing.JMenuItem
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    public getValue(): java.lang.Object
                    public changedUpdate(arg0: javax.swing.event.DocumentEvent): void
                    public removeUpdate(arg0: javax.swing.event.DocumentEvent): void
                    public insertUpdate(arg0: javax.swing.event.DocumentEvent): void
                }
                class OperationEntry extends javax.swing.JPanel {
                    public constructor(arg0: javax.management.MBeanOperationInfo, arg1: boolean, arg2: javax.swing.JButton, arg3: sun.tools.jconsole.inspector.XOperations)
                    public getSignature(): java.lang.String[]
                    public getParameters(): java.lang.Object[]
                    public getReturnType(): java.lang.String
                }
                class XMBeanInfo extends javax.swing.JPanel {
                    public constructor()
                    public emptyInfoTable(): void
                    public emptyDescTable(): void
                    public addMBeanInfo(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo): void
                    public addMBeanAttributeInfo(arg0: javax.management.MBeanAttributeInfo): void
                    public addMBeanOperationInfo(arg0: javax.management.MBeanOperationInfo): void
                    public addMBeanNotificationInfo(arg0: javax.management.MBeanNotificationInfo): void
                    static access$100(): java.awt.Color
                }
                class XMBeanNotifications extends javax.swing.JTable implements javax.management.NotificationListener {
                    public static NOTIFICATION_RECEIVED_EVENT: java.lang.String
                    public constructor()
                    public cancelCellEditing(): void
                    public stopCellEditing(): void
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer, arg1: int, arg2: int): java.awt.Component
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    dispose(): void
                    public getReceivedNotifications(arg0: sun.tools.jconsole.inspector.XMBean): long
                    public clearCurrentNotifications(): boolean
                    public unregisterListener(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public registerListener(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                    public disableNotifications(): void
                    public addNotificationsListener(arg0: javax.management.NotificationListener): void
                    public removeNotificationsListener(arg0: javax.management.NotificationListener): void
                    fireNotificationReceived(arg0: sun.tools.jconsole.inspector.XMBeanNotifications$XMBeanNotificationsListener, arg1: sun.tools.jconsole.inspector.XMBean, arg2: javax.swing.tree.DefaultMutableTreeNode, arg3: java.lang.Object[], arg4: long): void
                    public isListenerRegistered(arg0: sun.tools.jconsole.inspector.XMBean): boolean
                    public loadNotifications(arg0: sun.tools.jconsole.inspector.XMBean): void
                    public isTableEditable(): boolean
                    public emptyTable(): void
                    updateUserDataCell(arg0: int, arg1: int): void
                    static access$100(arg0: sun.tools.jconsole.inspector.XMBeanNotifications): java.text.SimpleDateFormat
                    static access$200(arg0: sun.tools.jconsole.inspector.XMBeanNotifications): sun.tools.jconsole.inspector.XMBeanNotifications$NotifMouseListener
                }
                abstract class XOperations extends javax.swing.JPanel implements java.awt.event.ActionListener {
                    public static OPERATION_INVOCATION_EVENT: java.lang.String
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public removeOperations(): void
                    public loadOperations(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo): void
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    performInvokeRequest(arg0: javax.swing.JButton): void
                    public addOperationsListener(arg0: javax.management.NotificationListener): void
                    public removeOperationsListener(arg0: javax.management.NotificationListener): void
                    protected updateOperations(arg0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[]
                    static access$000(arg0: sun.tools.jconsole.inspector.XOperations): sun.tools.jconsole.inspector.XMBean
                    static access$100(arg0: sun.tools.jconsole.inspector.XOperations, arg1: java.lang.String, arg2: java.lang.Object, arg3: java.lang.Object): void
                }
                class XMBeanOperations extends sun.tools.jconsole.inspector.XOperations {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    protected updateOperations(arg0: javax.management.MBeanOperationInfo[]): javax.management.MBeanOperationInfo[]
                }
                abstract class XTable extends javax.swing.JTable {
                    static NAME_COLUMN: int
                    static VALUE_COLUMN: int
                    public constructor()
                    getDefaultColor(): java.awt.Color
                    getEditableColor(): java.awt.Color
                    sortRequested(arg0: int): void
                    public getSelectedIndex(): int
                    public convertRowToIndex(arg0: int): int
                    public emptyTable(): void
                    public isTableEditable(): boolean
                    public isColumnEditable(arg0: int): boolean
                    public isReadable(arg0: int): boolean
                    public isWritable(arg0: int): boolean
                    public isCellError(arg0: int, arg1: int): boolean
                    public isAttributeViewable(arg0: int, arg1: int): boolean
                    public setTableValue(arg0: java.lang.Object, arg1: int): void
                    public getValue(arg0: int): java.lang.Object
                    public getClassName(arg0: int): java.lang.String
                    public getValueName(arg0: int): java.lang.String
                    public isReadWrite(arg0: int): boolean
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public isCellDroppable(arg0: int, arg1: int): boolean
                    public getToolTip(arg0: int, arg1: int): java.lang.String
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer, arg1: int, arg2: int): java.awt.Component
                }
                class XMBeanAttributes extends sun.tools.jconsole.inspector.XTable {
                    LOGGER: java.util.logging.Logger
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public prepareRenderer(arg0: javax.swing.table.TableCellRenderer, arg1: int, arg2: int): java.awt.Component
                    updateRowHeight(arg0: java.lang.Object, arg1: int): void
                    public getCellRenderer(arg0: int, arg1: int): javax.swing.table.TableCellRenderer
                    public cancelCellEditing(): void
                    public stopCellEditing(): void
                    public editCellAt(arg0: int, arg1: int, arg2: java.util.EventObject): boolean
                    public isCellEditable(arg0: int, arg1: int): boolean
                    public setValueAt(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public isTableEditable(): boolean
                    public setTableValue(arg0: java.lang.Object, arg1: int): void
                    public isColumnEditable(arg0: int): boolean
                    public getClassName(arg0: int): java.lang.String
                    public getValueName(arg0: int): java.lang.String
                    public getValue(arg0: int): java.lang.Object
                    public getToolTip(arg0: int, arg1: int): java.lang.String
                    public isWritable(arg0: int): boolean
                    public getRowCount(): int
                    public isReadable(arg0: int): boolean
                    public isCellError(arg0: int, arg1: int): boolean
                    public isAttributeViewable(arg0: int, arg1: int): boolean
                    public loadAttributes(arg0: sun.tools.jconsole.inspector.XMBean, arg1: javax.management.MBeanInfo): void
                    collapse(arg0: java.lang.String, arg1: java.awt.Component): void
                    updateZoomedCell(arg0: int, arg1: int): sun.tools.jconsole.inspector.XMBeanAttributes$ZoomedCell
                    public refreshAttributes(): void
                    public columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
                    sortRequested(arg0: int): void
                    public emptyTable(): void
                    removeAttributes(): void
                    protected addTableData(arg0: javax.swing.table.DefaultTableModel, arg1: sun.tools.jconsole.inspector.XMBean, arg2: javax.management.MBeanAttributeInfo[], arg3: java.util.HashMap<java.lang.String, java.lang.Object>, arg4: java.util.HashMap<java.lang.String, java.lang.Object>, arg5: java.util.HashMap<java.lang.String, java.lang.Object>): void
                    static access$000(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: sun.tools.jconsole.inspector.XMBean, arg2: javax.management.MBeanInfo): java.lang.Runnable
                    static access$102(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: sun.tools.jconsole.inspector.XMBean): sun.tools.jconsole.inspector.XMBean
                    static access$202(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: javax.management.MBeanInfo): javax.management.MBeanInfo
                    static access$302(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: javax.management.MBeanAttributeInfo[]): javax.management.MBeanAttributeInfo[]
                    static access$402(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: java.util.HashMap): java.util.HashMap
                    static access$502(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: java.util.HashMap): java.util.HashMap
                    static access$602(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: java.util.HashMap): java.util.HashMap
                    static access$700(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: javax.swing.table.DefaultTableModel): void
                    static access$800(arg0: sun.tools.jconsole.inspector.XMBeanAttributes): javax.swing.event.TableModelListener
                    static access$900(arg0: sun.tools.jconsole.inspector.XMBeanAttributes): sun.tools.jconsole.MBeansTab
                    static access$100(arg0: sun.tools.jconsole.inspector.XMBeanAttributes): sun.tools.jconsole.inspector.XMBean
                    static access$200(arg0: sun.tools.jconsole.inspector.XMBeanAttributes): javax.management.MBeanInfo
                    static access$1100(arg0: sun.tools.jconsole.inspector.XMBeanAttributes, arg1: boolean): void
                }
                class XDataViewer {
                    public static OPEN: int
                    public static ARRAY: int
                    public static NUMERIC: int
                    public static NOT_SUPPORTED: int
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public static registerForMouseEvent(arg0: java.awt.Component, arg1: java.awt.event.MouseListener): void
                    public static dispose(arg0: sun.tools.jconsole.MBeansTab): void
                    public static isViewableValue(arg0: java.lang.Object): boolean
                    public static getViewerType(arg0: java.lang.Object): int
                    public static getActionLabel(arg0: int): java.lang.String
                    public createOperationViewer(arg0: java.lang.Object, arg1: sun.tools.jconsole.inspector.XMBean): java.awt.Component
                    public static createNotificationViewer(arg0: java.lang.Object): java.awt.Component
                    public createAttributeViewer(arg0: java.lang.Object, arg1: sun.tools.jconsole.inspector.XMBean, arg2: java.lang.String, arg3: javax.swing.JTable): java.awt.Component
                }
                class XSheet extends javax.swing.JPanel implements java.awt.event.ActionListener , javax.management.NotificationListener {
                    public constructor(arg0: sun.tools.jconsole.MBeansTab)
                    public dispose(): void
                    public isMBeanNode(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public displayNode(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                    public actionPerformed(arg0: java.awt.event.ActionEvent): void
                    static access$000(arg0: sun.tools.jconsole.inspector.XSheet): sun.tools.jconsole.inspector.XMBean
                    static access$100(arg0: sun.tools.jconsole.inspector.XSheet): javax.swing.tree.DefaultMutableTreeNode
                    static access$200(arg0: sun.tools.jconsole.inspector.XSheet, arg1: javax.swing.tree.DefaultMutableTreeNode, arg2: javax.swing.tree.DefaultMutableTreeNode): boolean
                    static access$300(arg0: sun.tools.jconsole.inspector.XSheet): sun.tools.jconsole.inspector.XMBeanInfo
                    static access$400(arg0: sun.tools.jconsole.inspector.XSheet): javax.swing.JPanel
                    static access$500(arg0: sun.tools.jconsole.inspector.XSheet): javax.swing.JPanel
                    static access$600(arg0: sun.tools.jconsole.inspector.XSheet, arg1: java.lang.Object, arg2: java.lang.String): void
                    static access$002(arg0: sun.tools.jconsole.inspector.XSheet, arg1: sun.tools.jconsole.inspector.XMBean): sun.tools.jconsole.inspector.XMBean
                    static access$700(arg0: sun.tools.jconsole.inspector.XSheet): sun.tools.jconsole.inspector.XMBeanAttributes
                    static access$800(arg0: sun.tools.jconsole.inspector.XSheet): javax.swing.JButton
                    static access$900(arg0: sun.tools.jconsole.inspector.XSheet): sun.tools.jconsole.inspector.XMBeanOperations
                    static access$1000(arg0: sun.tools.jconsole.inspector.XSheet): sun.tools.jconsole.inspector.XMBeanNotifications
                    static access$1100(arg0: sun.tools.jconsole.inspector.XSheet): void
                }
                class XMBean {
                    public constructor(arg0: javax.management.ObjectName, arg1: sun.tools.jconsole.MBeansTab)
                    getMBeanServerConnection(): javax.management.MBeanServerConnection
                    getSnapshotMBeanServerConnection(): sun.tools.jconsole.ProxyClient$SnapshotMBeanServerConnection
                    public isBroadcaster(): java.lang.Boolean
                    invoke<T>(...args: any[]): any
                    public setAttribute(arg0: javax.management.Attribute): void
                    public getAttribute(arg0: java.lang.String): java.lang.Object
                    getAttributes<T>(...args: any[]): any
                    public getObjectName(): javax.management.ObjectName
                    public getMBeanInfo(): javax.management.MBeanInfo
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public getText(): java.lang.String
                    public setText(arg0: java.lang.String): void
                    public getIcon(): javax.swing.Icon
                    public setIcon(arg0: javax.swing.Icon): void
                    toString<T>(...args: any[]): any
                }
                class XTree extends javax.swing.JTree {
                    constructor(...args: any[])
                    public removeAll(): void
                    public removeMBeanFromView(arg0: javax.management.ObjectName): void
                    public hasMetadataNodes(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public isMetadataNode(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
                    public addMBeansToView(arg0: java.util.Set<javax.management.ObjectName>): void
                    public addMBeanToView(arg0: javax.management.ObjectName): void
                    public addMetadataNodes(arg0: javax.swing.tree.DefaultMutableTreeNode): void
                    static access$100(arg0: javax.management.ObjectName): java.lang.String
                    static access$200(): boolean
                    static access$300(arg0: java.lang.String, arg1: javax.management.ObjectName): java.util.Map
                }
                class XNodeInfo {
                    public constructor(arg0: sun.tools.jconsole.inspector.XNodeInfo$Type, arg1: java.lang.Object, arg2: java.lang.String, arg3: java.lang.String)
                    public getType(): sun.tools.jconsole.inspector.XNodeInfo$Type
                    public getData(): java.lang.Object
                    public getLabel(): java.lang.String
                    public getToolTipText(): java.lang.String
                    toString<T>(...args: any[]): any
                }
                class XTreeRenderer extends javax.swing.tree.DefaultTreeCellRenderer {
                    public constructor()
                    public getTreeCellRendererComponent(arg0: javax.swing.JTree, arg1: java.lang.Object, arg2: boolean, arg3: boolean, arg4: boolean, arg5: int, arg6: boolean): java.awt.Component
                }
                
            }
            
        }
        
    }
    
}
