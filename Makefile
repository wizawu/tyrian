NUGET_DIR=packages
NUGET_FLAGS=-x -o ${NUGET_DIR}

all: deps
	echo ok

deps:
	nuget install ${NUGET_FLAGS} -Version 2.0.0 Suave
	nuget install ${NUGET_FLAGS} -Version 6.9.9 MySql.Data
	nuget install ${NUGET_FLAGS} -Version 9.0.1 Newtonsoft.Json

clean:
	rm -rf ${NUGET_DIR}
