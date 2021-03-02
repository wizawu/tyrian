declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ModuleTree extends jdk.nashorn.api.tree.Tree {
          getImportEntries(): java.util.List<jdk.nashorn.api.tree.ImportEntryTree>
          getLocalExportEntries(): java.util.List<jdk.nashorn.api.tree.ExportEntryTree>
          getIndirectExportEntries(): java.util.List<jdk.nashorn.api.tree.ExportEntryTree>
          getStarExportEntries(): java.util.List<jdk.nashorn.api.tree.ExportEntryTree>
        }

      }
    }
  }
}
