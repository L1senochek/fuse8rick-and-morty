/** @type {import('stylelint').Config} */

export default {
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
	plugins: ['stylelint-color-format'],
	rules: {
		'block-no-empty': true,
		'color-format/format': { format: 'hsla' },
		'color-no-invalid-hex': true,
	},
};
