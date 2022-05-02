import * as monaco from 'monaco-editor';

// sample
// https://github.com/microsoft/monaco-editor/blob/main/samples/browser-esm-webpack-small/index.js
import 'monaco-editor/esm/vs/basic-languages/php/php.js';

self.MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
        // if (label === 'json') {
        // 	return './json.worker.bundle.js';
        // }
        // if (label === 'css' || label === 'scss' || label === 'less') {
        // 	return './css.worker.bundle.js';
        // }
        // if (label === 'html' || label === 'handlebars' || label === 'razor') {
        // 	return './html.worker.bundle.js';
        // }
        // if (label === 'typescript' || label === 'javascript') {
        // 	return './ts.worker.bundle.js';
        // }
        return './editor.worker.bundle.js';
    }
};

window.editormodel = monaco.editor.create(document.getElementById('container'), {
    value: [
        'class ctfShowUser{',
        '	public $username=\'xxxxxx\';',
        '	public $password=\'xxxxxx\';',
        '	public function checkVip(){',
        "		return $this->isVip;",
        '	}',
        '}',
        '',
        '$v = serialize(new ctfShowUser());',
        'echo $v;',
        'echo urlencode($v);',
    ].join('\n'),
    language: 'php'
});

window.editorGetText = function () {
	if(window.editormodel) {
        let text = window.editormodel.getValue();
		return text;
	}
    return "";
};

window.editorSetText = function (text) {
    if(window.editormodel) {
        window.editormodel.setValue(text);
    }
};

