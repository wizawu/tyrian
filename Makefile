INSTALL=nuget install -x -o . -Version

deps:
	${INSTALL} 2.0.0 Suave
	${INSTALL} 6.9.9 MySql.Data
	${INSTALL} 9.0.1 Newtonsoft.Json
