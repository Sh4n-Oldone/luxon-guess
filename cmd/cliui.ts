import chalk from 'chalk';

import pkg from '../package.json';

export function warning(message: string): void {
	console.log(chalk`{yellow WARNING:} ${message}`);
}

export function info(message: string): void {
	console.log(chalk`{cyan INFO:} ${message}`);
}

export function error(message: string): void {
	console.log(chalk`{red ERROR:} ${message}`);
}

export function display(message: string): void {
	console.log(chalk`{bold.white ${message}}`);
}

export function showHelp(): void {
	console.log(
	chalk`
	{bold.cyan moment-guess} - {blue Utility for guessing date's format}

	{bold USAGE}

	{bold $} {cyan npx moment-guess} --date {yellow 2020-10-10}
	{bold $} {cyan npx moment-guess} --version
	{bold $} {cyan npx moment-guess} --help

	{bold OPTIONS}

	-h, --help                          Shows this help message

	-v, --version                       Displays the current version of moment-guess

	-d, --date                          Displays the provided date's format
	`
	);
}

export function showUsage(): void {
	console.log(
	chalk`
	{bold USAGE}

	{bold $} {cyan npx moment-guess} --date {yellow 2020-10-10}
	{bold $} {cyan npx moment-guess} --version
	{bold $} {cyan npx moment-guess} --help
	`
	);
}

export function showVersion(): void {
	console.log(chalk`{bold.white ${pkg.version}}`);
}
