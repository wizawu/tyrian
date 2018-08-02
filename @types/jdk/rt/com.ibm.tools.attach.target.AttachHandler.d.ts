declare namespace com {
    namespace ibm {
        namespace tools {
            namespace attach {
                namespace target {
                    class AttachHandler extends java.lang.Thread {
                        public static allowAttachSelf: string
                        public run(): void
                        public connectToAttacher(): com.ibm.tools.attach.target.Attachment
                        protected terminate(arg0: boolean): boolean
                        public static waitForAttachApiInitialization(): boolean
                        public static isAttachApiInitialized(): boolean
                        public getIgnoreNotification(): java.lang.Object
                        public static getMainHandler(): com.ibm.tools.attach.target.AttachHandler
                        public static getVmId(): string
                        public static getProcessId(): long
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}