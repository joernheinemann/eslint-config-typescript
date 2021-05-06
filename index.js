module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parser: "@typescript-eslint/parser",
	plugins: [
		"@typescript-eslint"
	],
	rules: {
		"indent": [
			"error",
			"tab",
			{"SwitchCase": 1, "MemberExpression": 1, "ObjectExpression": 1}
		],
		"no-mixed-spaces-and-tabs": "error",
		//"linebreak-style": ["error", "windows"],
		"quotes": [
			"error",
			"double",
			{ "allowTemplateLiterals": true }
		],
		"semi": ["error", "always"],
		"semi-style": ["error", "last"],
		"semi-spacing": [
			"error",
			{"before": false, "after": true}
		],
		"arrow-spacing": "error",
		"arrow-body-style": [
			"error",
			"always"
		],
		"curly": ["error","all"],
		"object-curly-spacing": [
			"error",
			"never"
		],
		"lines-between-class-members": [
			"error",
			"always"
		],
		"keyword-spacing":  [
			"error",
			{ "before": true, "after": true}
		],
		"space-infix-ops": "off",
		"@typescript-eslint/space-infix-ops":  [
			"error",
			{ "int32Hint": false }
		],
		"space-before-blocks": ["error","always"],
		"space-before-function-paren": [
			"error",
			{"anonymous": "never", "named": "never", "asyncArrow": "always"}
		],
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"comma-style": [
			"error",
			"last"
		],
		"comma-spacing": [
			"warn",
			{ "before": false, "after": true}
		],
		"comma-dangle": [
			"warn",
			"never"
		],
		"key-spacing": [
			"warn",
			{ "beforeColon": false,"afterColon": true }
		],
		"no-multiple-empty-lines": [
			"warn",
			{ "max": 2 }
		],
		"no-console": [
			"warn",
			{ "allow": ["warn", "error"] }
		],
		"no-else-return": ["error", {"allowElseIf": false}],
		"no-await-in-loop":"warn",
		"no-lonely-if":  "error",
		"prefer-const": "error",
		"require-await": "error",
		"no-return-await": "error",
		"@typescript-eslint/no-this-alias": "off",
		"@typescript-eslint/ban-ts-comment": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/no-var-requires": "error",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"selector": ["enum"],
				"format": ["UPPER_CASE"]
			},
			{
				"selector":["interface","class","typeAlias"],
				"format": ["PascalCase"]
			},
			{
				"selector": ["function","method"],
				"format": ["camelCase"]
			},
			{
				"selector": ["variableLike","memberLike"],
				"format": ["camelCase","UPPER_CASE","snake_case"]
			},
			{
				"selector": ["objectLiteralProperty"],
				"format": null,
				"modifiers": ["requiresQuotes"]
			}
		]
	}
}