build:
		mvn clean install
run:
		mvn spring-boot:run

build_optimized:
		mvn clean install -Poptimize

run_optimized:
		mvn spring-boot:run -Poptimize

.PHONY: build run build_optimized run_optimized