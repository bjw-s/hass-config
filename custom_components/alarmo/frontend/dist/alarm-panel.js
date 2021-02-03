<<<<<<< HEAD
!function(e){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function t(e,t,a,i){var s,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,a):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,a,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(n<3?s(o):n>3?s(t,a,o):s(t,a))||o);return n>3&&o&&Object.defineProperty(t,a,o),o
/**
=======
(function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */}const a="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(e,t,a=null)=>{for(;t!==a;){const a=t.nextSibling;e.removeChild(t),t=a}},s=`{{lit-${String(Math.random()).slice(2)}}}`,n=`\x3c!--${s}--\x3e`,o=new RegExp(`${s}|${n}`);class r{constructor(e,t){this.parts=[],this.element=t;const a=[],i=[],n=document.createTreeWalker(t.content,133,null,!1);let r=0,l=-1,u=0;const{strings:m,values:{length:p}}=e;for(;u<p;){const e=n.nextNode();if(null!==e){if(l++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:a}=t;let i=0;for(let e=0;e<a;e++)d(t[e].name,"$lit$")&&i++;for(;i-- >0;){const t=m[u],a=h.exec(t)[2],i=a.toLowerCase()+"$lit$",s=e.getAttribute(i);e.removeAttribute(i);const n=s.split(o);this.parts.push({type:"attribute",index:l,name:a,strings:n}),u+=n.length-1}}"TEMPLATE"===e.tagName&&(i.push(e),n.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(s)>=0){const i=e.parentNode,s=t.split(o),n=s.length-1;for(let t=0;t<n;t++){let a,n=s[t];if(""===n)a=c();else{const e=h.exec(n);null!==e&&d(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),a=document.createTextNode(n)}i.insertBefore(a,e),this.parts.push({type:"node",index:++l})}""===s[n]?(i.insertBefore(c(),e),a.push(e)):e.data=s[n],u+=n}}else if(8===e.nodeType)if(e.data===s){const t=e.parentNode;null!==e.previousSibling&&l!==r||(l++,t.insertBefore(c(),e)),r=l,this.parts.push({type:"node",index:l}),null===e.nextSibling?e.data="":(a.push(e),l--),u++}else{let t=-1;for(;-1!==(t=e.data.indexOf(s,t+1));)this.parts.push({type:"node",index:-1}),u++}}else n.currentNode=i.pop()}for(const e of a)e.parentNode.removeChild(e)}}const d=(e,t)=>{const a=e.length-t.length;return a>=0&&e.slice(a)===t},l=e=>-1!==e.index,c=()=>document.createComment(""),h=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:a},parts:i}=e,s=document.createTreeWalker(a,133,null,!1);let n=p(i),o=i[n],r=-1,d=0;const l=[];let c=null;for(;s.nextNode();){r++;const e=s.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(l.push(e),null===c&&(c=e)),null!==c&&d++;void 0!==o&&o.index===r;)o.index=null!==c?-1:o.index-d,n=p(i,n),o=i[n]}l.forEach(e=>e.parentNode.removeChild(e))}const m=e=>{let t=11===e.nodeType?0:1;const a=document.createTreeWalker(e,133,null,!1);for(;a.nextNode();)t++;return t},p=(e,t=-1)=>{for(let a=t+1;a<e.length;a++){const t=e[a];if(l(t))return a}return-1};
/**
=======
     */
    /**
     * True if the custom elements polyfill is in use.
     */
    const isCEPolyfill = typeof window !== 'undefined' &&
        window.customElements != null &&
        window.customElements.polyfillWrapFlushCallback !==
            undefined;
    /**
     * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
     * `container`.
     */
    const removeNodes = (container, start, end = null) => {
        while (start !== end) {
            const n = start.nextSibling;
            container.removeChild(start);
            start = n;
        }
    };

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * An expression marker with embedded unique key to avoid collision with
     * possible text in templates.
     */
    const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
    /**
     * An expression marker used text-positions, multi-binding attributes, and
     * attributes with markup-like text values.
     */
    const nodeMarker = `<!--${marker}-->`;
    const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
    /**
     * Suffix appended to all bound attribute names.
     */
    const boundAttributeSuffix = '$lit$';
    /**
     * An updatable Template that tracks the location of dynamic parts.
     */
    class Template {
        constructor(result, element) {
            this.parts = [];
            this.element = element;
            const nodesToRemove = [];
            const stack = [];
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            // Keeps track of the last index associated with a part. We try to delete
            // unnecessary nodes, but we never want to associate two different parts
            // to the same index. They must have a constant node between.
            let lastPartIndex = 0;
            let index = -1;
            let partIndex = 0;
            const { strings, values: { length } } = result;
            while (partIndex < length) {
                const node = walker.nextNode();
                if (node === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    continue;
                }
                index++;
                if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                    if (node.hasAttributes()) {
                        const attributes = node.attributes;
                        const { length } = attributes;
                        // Per
                        // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                        // attributes are not guaranteed to be returned in document order.
                        // In particular, Edge/IE can return them out of order, so we cannot
                        // assume a correspondence between part index and attribute index.
                        let count = 0;
                        for (let i = 0; i < length; i++) {
                            if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                                count++;
                            }
                        }
                        while (count-- > 0) {
                            // Get the template literal section leading up to the first
                            // expression in this attribute
                            const stringForPart = strings[partIndex];
                            // Find the attribute name
                            const name = lastAttributeNameRegex.exec(stringForPart)[2];
                            // Find the corresponding attribute
                            // All bound attributes have had a suffix added in
                            // TemplateResult#getHTML to opt out of special attribute
                            // handling. To look up the attribute value we also need to add
                            // the suffix.
                            const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                            const attributeValue = node.getAttribute(attributeLookupName);
                            node.removeAttribute(attributeLookupName);
                            const statics = attributeValue.split(markerRegex);
                            this.parts.push({ type: 'attribute', index, name, strings: statics });
                            partIndex += statics.length - 1;
                        }
                    }
                    if (node.tagName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                }
                else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                    const data = node.data;
                    if (data.indexOf(marker) >= 0) {
                        const parent = node.parentNode;
                        const strings = data.split(markerRegex);
                        const lastIndex = strings.length - 1;
                        // Generate a new text node for each literal section
                        // These nodes are also used as the markers for node parts
                        for (let i = 0; i < lastIndex; i++) {
                            let insert;
                            let s = strings[i];
                            if (s === '') {
                                insert = createMarker();
                            }
                            else {
                                const match = lastAttributeNameRegex.exec(s);
                                if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                    s = s.slice(0, match.index) + match[1] +
                                        match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                                }
                                insert = document.createTextNode(s);
                            }
                            parent.insertBefore(insert, node);
                            this.parts.push({ type: 'node', index: ++index });
                        }
                        // If there's no text, we must insert a comment to mark our place.
                        // Else, we can trust it will stick around after cloning.
                        if (strings[lastIndex] === '') {
                            parent.insertBefore(createMarker(), node);
                            nodesToRemove.push(node);
                        }
                        else {
                            node.data = strings[lastIndex];
                        }
                        // We have a part for each match found
                        partIndex += lastIndex;
                    }
                }
                else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                    if (node.data === marker) {
                        const parent = node.parentNode;
                        // Add a new marker node to be the startNode of the Part if any of
                        // the following are true:
                        //  * We don't have a previousSibling
                        //  * The previousSibling is already the start of a previous part
                        if (node.previousSibling === null || index === lastPartIndex) {
                            index++;
                            parent.insertBefore(createMarker(), node);
                        }
                        lastPartIndex = index;
                        this.parts.push({ type: 'node', index });
                        // If we don't have a nextSibling, keep this node so we have an end.
                        // Else, we can remove it to save future costs.
                        if (node.nextSibling === null) {
                            node.data = '';
                        }
                        else {
                            nodesToRemove.push(node);
                            index--;
                        }
                        partIndex++;
                    }
                    else {
                        let i = -1;
                        while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                            // Comment node has a binding marker inside, make an inactive part
                            // The binding won't work, but subsequent bindings will
                            // TODO (justinfagnani): consider whether it's even worth it to
                            // make bindings in comments work
                            this.parts.push({ type: 'node', index: -1 });
                            partIndex++;
                        }
                    }
                }
            }
            // Remove text binding nodes after the walk to not disturb the TreeWalker
            for (const n of nodesToRemove) {
                n.parentNode.removeChild(n);
            }
        }
    }
    const endsWith = (str, suffix) => {
        const index = str.length - suffix.length;
        return index >= 0 && str.slice(index) === suffix;
    };
    const isTemplatePartActive = (part) => part.index !== -1;
    // Allows `document.createComment('')` to be renamed for a
    // small manual size-savings.
    const createMarker = () => document.createComment('');
    /**
     * This regex extracts the attribute name preceding an attribute-position
     * expression. It does this by matching the syntax allowed for attributes
     * against the string literal directly preceding the expression, assuming that
     * the expression is in an attribute-value position.
     *
     * See attributes in the HTML spec:
     * https://www.w3.org/TR/html5/syntax.html#elements-attributes
     *
     * " \x09\x0a\x0c\x0d" are HTML space characters:
     * https://www.w3.org/TR/html5/infrastructure.html#space-characters
     *
     * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
     * space character except " ".
     *
     * So an attribute is:
     *  * The name: any character except a control character, space character, ('),
     *    ("), ">", "=", or "/"
     *  * Followed by zero or more space characters
     *  * Followed by "="
     *  * Followed by zero or more space characters
     *  * Followed by:
     *    * Any character except space, ('), ("), "<", ">", "=", (`), or
     *    * (") then any non-("), or
     *    * (') then any non-(')
     */
    const lastAttributeNameRegex = 
    // eslint-disable-next-line no-control-regex
    /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
<<<<<<< HEAD
class b{constructor(e,t,a){this.__parts=[],this.template=e,this.processor=t,this.options=a}update(e){let t=0;for(const a of this.__parts)void 0!==a&&a.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=a?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let n,o=0,r=0,d=s.nextNode();for(;o<i.length;)if(n=i[o],l(n)){for(;r<n.index;)r++,"TEMPLATE"===d.nodeName&&(t.push(d),s.currentNode=d.content),null===(d=s.nextNode())&&(s.currentNode=t.pop(),d=s.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(d.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(d,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return a&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
=======
    const walkerNodeFilter = 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */;
    /**
     * Removes the list of nodes from a Template safely. In addition to removing
     * nodes from the Template, the Template part indices are updated to match
     * the mutated Template DOM.
     *
     * As the template is walked the removal state is tracked and
     * part indices are adjusted as needed.
     *
     * div
     *   div#1 (remove) <-- start removing (removing node is div#1)
     *     div
     *       div#2 (remove)  <-- continue removing (removing node is still div#1)
     *         div
     * div <-- stop removing since previous sibling is the removing node (div#1,
     * removed 4 nodes)
     */
    function removeNodesFromTemplate(template, nodesToRemove) {
        const { element: { content }, parts } = template;
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let part = parts[partIndex];
        let nodeIndex = -1;
        let removeCount = 0;
        const nodesToRemoveInTemplate = [];
        let currentRemovingNode = null;
        while (walker.nextNode()) {
            nodeIndex++;
            const node = walker.currentNode;
            // End removal if stepped past the removing node
            if (node.previousSibling === currentRemovingNode) {
                currentRemovingNode = null;
            }
            // A node to remove was found in the template
            if (nodesToRemove.has(node)) {
                nodesToRemoveInTemplate.push(node);
                // Track node we're removing
                if (currentRemovingNode === null) {
                    currentRemovingNode = node;
                }
            }
            // When removing, increment count by which to adjust subsequent part indices
            if (currentRemovingNode !== null) {
                removeCount++;
            }
            while (part !== undefined && part.index === nodeIndex) {
                // If part is in a removed node deactivate it by setting index to -1 or
                // adjust the index as needed.
                part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
                // go to the next active part.
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                part = parts[partIndex];
            }
        }
        nodesToRemoveInTemplate.forEach((n) => n.parentNode.removeChild(n));
    }
    const countNodes = (node) => {
        let count = (node.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */) ? 0 : 1;
        const walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
        while (walker.nextNode()) {
            count++;
        }
        return count;
    };
    const nextActiveIndexInTemplateParts = (parts, startIndex = -1) => {
        for (let i = startIndex + 1; i < parts.length; i++) {
            const part = parts[i];
            if (isTemplatePartActive(part)) {
                return i;
            }
        }
        return -1;
    };
    /**
     * Inserts the given node into the Template, optionally before the given
     * refNode. In addition to inserting the node into the Template, the Template
     * part indices are updated to match the mutated Template DOM.
     */
    function insertNodeIntoTemplate(template, node, refNode = null) {
        const { element: { content }, parts } = template;
        // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.
        if (refNode === null || refNode === undefined) {
            content.appendChild(node);
            return;
        }
        const walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        let partIndex = nextActiveIndexInTemplateParts(parts);
        let insertCount = 0;
        let walkerIndex = -1;
        while (walker.nextNode()) {
            walkerIndex++;
            const walkerNode = walker.currentNode;
            if (walkerNode === refNode) {
                insertCount = countNodes(node);
                refNode.parentNode.insertBefore(node, refNode);
            }
            while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
                // If we've inserted the node, simply adjust all subsequent parts
                if (insertCount > 0) {
                    while (partIndex !== -1) {
                        parts[partIndex].index += insertCount;
                        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                    }
                    return;
                }
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            }
        }
    }

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${s} `;class ${constructor(e,t,a,i){this.strings=e,this.values=t,this.type=a,this.processor=i}getHTML(){const e=this.strings.length-1;let t="",a=!1;for(let i=0;i<e;i++){const e=this.strings[i],o=e.lastIndexOf("\x3c!--");a=(o>-1||a)&&-1===e.indexOf("--\x3e",o+1);const r=h.exec(e);t+=null===r?e+(a?y:n):e.substr(0,r.index)+r[1]+r[2]+"$lit$"+r[3]+s}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}
/**
=======
     */
    const directives = new WeakMap();
    /**
     * Brands a function as a directive factory function so that lit-html will call
     * the function during template rendering, rather than passing as a value.
     *
     * A _directive_ is a function that takes a Part as an argument. It has the
     * signature: `(part: Part) => void`.
     *
     * A directive _factory_ is a function that takes arguments for data and
     * configuration and returns a directive. Users of directive usually refer to
     * the directive factory as the directive. For example, "The repeat directive".
     *
     * Usually a template author will invoke a directive factory in their template
     * with relevant arguments, which will then return a directive function.
     *
     * Here's an example of using the `repeat()` directive factory that takes an
     * array and a function to render an item:
     *
     * ```js
     * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
     * ```
     *
     * When `repeat` is invoked, it returns a directive function that closes over
     * `items` and the template function. When the outer template is rendered, the
     * return directive function is called with the Part for the expression.
     * `repeat` then performs it's custom logic to render multiple items.
     *
     * @param f The directive factory function. Must be a function that returns a
     * function of the signature `(part: Part) => void`. The returned function will
     * be called with the part object.
     *
     * @example
     *
     * import {directive, html} from 'lit-html';
     *
     * const immutable = directive((v) => (part) => {
     *   if (part.value !== v) {
     *     part.setValue(v)
     *   }
     * });
     */
    const directive = (f) => ((...args) => {
        const d = f(...args);
        directives.set(d, true);
        return d;
    });
    const isDirective = (o) => {
        return typeof o === 'function' && directives.has(o);
    };

    /**
     * @license
     * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * A sentinel value that signals that a value was handled by a directive and
     * should not be written to the DOM.
     */
    const noChange = {};
    /**
     * A sentinel value that signals a NodePart to fully clear its content.
     */
    const nothing = {};

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */const k=e=>null===e||!("object"==typeof e||"function"==typeof e),A=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class x{constructor(e,t,a){this.dirty=!0,this.element=e,this.name=t,this.strings=a,this.parts=[];for(let e=0;e<a.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1,a=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=a[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!A(e))return e}let i="";for(let s=0;s<t;s++){i+=e[s];const t=a[s];if(void 0!==t){const e=t.value;if(k(e)||!A(e))i+="string"==typeof e?e:String(e);else for(const t of e)i+="string"==typeof t?t:String(t)}}return i+=e[t],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===_||k(e)&&e===this.value||(this.value=e,v(e)||(this.committer.dirty=!0))}commit(){for(;v(this.value);){const e=this.value;this.value=_,e(this)}this.value!==_&&this.committer.commit()}}class O{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(c()),this.endNode=e.appendChild(c())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=c()),e.__insert(this.endNode=c())}insertAfterPart(e){e.__insert(this.startNode=c()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}const e=this.__pendingValue;e!==_&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof $?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):A(e)?this.__commitIterable(e):e===f?(this.value=f,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,a="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=a:this.__commitNode(document.createTextNode(a)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof b&&this.value.template===t)this.value.update(e.values);else{const a=new b(t,e.processor,this.options),i=a._clone();a.update(e.values),this.__commitNode(i),this.value=a}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let a,i=0;for(const s of e)a=t[i],void 0===a&&(a=new O(this.options),t.push(a),0===i?a.appendIntoPart(this):a.insertAfterPart(t[i-1])),a.setValue(s),a.commit(),i++;i<t.length&&(t.length=i,this.clear(a&&a.endNode))}clear(e=this.startNode){i(this.startNode.parentNode,e.nextSibling,this.endNode)}}class j{constructor(e,t,a){if(this.value=void 0,this.__pendingValue=void 0,2!==a.length||""!==a[0]||""!==a[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=a}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=_}}class C extends x{constructor(e,t,a){super(e,t,a),this.single=2===a.length&&""===a[0]&&""===a[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends S{}let M=!1;(()=>{try{const e={get capture(){return M=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class E{constructor(e,t,a){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=a,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;v(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=_,e(this)}if(this.__pendingValue===_)return;const e=this.__pendingValue,t=this.value,a=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),i=null!=e&&(null==t||a);a&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=D(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=_}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const D=e=>e&&(M?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
=======
     */
    /**
     * An instance of a `Template` that can be attached to the DOM and updated
     * with new values.
     */
    class TemplateInstance {
        constructor(template, processor, options) {
            this.__parts = [];
            this.template = template;
            this.processor = processor;
            this.options = options;
        }
        update(values) {
            let i = 0;
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.setValue(values[i]);
                }
                i++;
            }
            for (const part of this.__parts) {
                if (part !== undefined) {
                    part.commit();
                }
            }
        }
        _clone() {
            // There are a number of steps in the lifecycle of a template instance's
            // DOM fragment:
            //  1. Clone - create the instance fragment
            //  2. Adopt - adopt into the main document
            //  3. Process - find part markers and create parts
            //  4. Upgrade - upgrade custom elements
            //  5. Update - set node, attribute, property, etc., values
            //  6. Connect - connect to the document. Optional and outside of this
            //     method.
            //
            // We have a few constraints on the ordering of these steps:
            //  * We need to upgrade before updating, so that property values will pass
            //    through any property setters.
            //  * We would like to process before upgrading so that we're sure that the
            //    cloned fragment is inert and not disturbed by self-modifying DOM.
            //  * We want custom elements to upgrade even in disconnected fragments.
            //
            // Given these constraints, with full custom elements support we would
            // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
            //
            // But Safari does not implement CustomElementRegistry#upgrade, so we
            // can not implement that order and still have upgrade-before-update and
            // upgrade disconnected fragments. So we instead sacrifice the
            // process-before-upgrade constraint, since in Custom Elements v1 elements
            // must not modify their light DOM in the constructor. We still have issues
            // when co-existing with CEv0 elements like Polymer 1, and with polyfills
            // that don't strictly adhere to the no-modification rule because shadow
            // DOM, which may be created in the constructor, is emulated by being placed
            // in the light DOM.
            //
            // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
            // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
            // in one step.
            //
            // The Custom Elements v1 polyfill supports upgrade(), so the order when
            // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
            // Connect.
            const fragment = isCEPolyfill ?
                this.template.element.content.cloneNode(true) :
                document.importNode(this.template.element.content, true);
            const stack = [];
            const parts = this.template.parts;
            // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
            const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
            let partIndex = 0;
            let nodeIndex = 0;
            let part;
            let node = walker.nextNode();
            // Loop through all the nodes and parts of a template
            while (partIndex < parts.length) {
                part = parts[partIndex];
                if (!isTemplatePartActive(part)) {
                    this.__parts.push(undefined);
                    partIndex++;
                    continue;
                }
                // Progress the tree walker until we find our next part's node.
                // Note that multiple parts may share the same node (attribute parts
                // on a single element), so this loop may not run at all.
                while (nodeIndex < part.index) {
                    nodeIndex++;
                    if (node.nodeName === 'TEMPLATE') {
                        stack.push(node);
                        walker.currentNode = node.content;
                    }
                    if ((node = walker.nextNode()) === null) {
                        // We've exhausted the content inside a nested template element.
                        // Because we still have parts (the outer for-loop), we know:
                        // - There is a template in the stack
                        // - The walker will find a nextNode outside the template
                        walker.currentNode = stack.pop();
                        node = walker.nextNode();
                    }
                }
                // We've arrived at our part's node.
                if (part.type === 'node') {
                    const part = this.processor.handleTextExpression(this.options);
                    part.insertAfterNode(node.previousSibling);
                    this.__parts.push(part);
                }
                else {
                    this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
                }
                partIndex++;
            }
            if (isCEPolyfill) {
                document.adoptNode(fragment);
                customElements.upgrade(fragment);
            }
            return fragment;
        }
    }

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */;function z(e){let t=N.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},N.set(e.type,t));let a=t.stringsArray.get(e.strings);if(void 0!==a)return a;const i=e.strings.join(s);return a=t.keyString.get(i),void 0===a&&(a=new r(e,e.getTemplateElement()),t.keyString.set(i,a)),t.stringsArray.set(e.strings,a),a}const N=new Map,q=new WeakMap;
/**
=======
     */
    /**
     * Our TrustedTypePolicy for HTML which is declared using the html template
     * tag function.
     *
     * That HTML is a developer-authored constant, and is parsed with innerHTML
     * before any untrusted expressions have been mixed in. Therefor it is
     * considered safe by construction.
     */
    const policy = window.trustedTypes &&
        trustedTypes.createPolicy('lit-html', { createHTML: (s) => s });
    const commentMarker = ` ${marker} `;
    /**
     * The return type of `html`, which holds a Template and the values from
     * interpolated expressions.
     */
    class TemplateResult {
        constructor(strings, values, type, processor) {
            this.strings = strings;
            this.values = values;
            this.type = type;
            this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */
        getHTML() {
            const l = this.strings.length - 1;
            let html = '';
            let isCommentBinding = false;
            for (let i = 0; i < l; i++) {
                const s = this.strings[i];
                // For each binding we want to determine the kind of marker to insert
                // into the template source before it's parsed by the browser's HTML
                // parser. The marker type is based on whether the expression is in an
                // attribute, text, or comment position.
                //   * For node-position bindings we insert a comment with the marker
                //     sentinel as its text content, like <!--{{lit-guid}}-->.
                //   * For attribute bindings we insert just the marker sentinel for the
                //     first binding, so that we support unquoted attribute bindings.
                //     Subsequent bindings can use a comment marker because multi-binding
                //     attributes must be quoted.
                //   * For comment bindings we insert just the marker sentinel so we don't
                //     close the comment.
                //
                // The following code scans the template source, but is *not* an HTML
                // parser. We don't need to track the tree structure of the HTML, only
                // whether a binding is inside a comment, and if not, if it appears to be
                // the first binding in an attribute.
                const commentOpen = s.lastIndexOf('<!--');
                // We're in comment position if we have a comment open with no following
                // comment close. Because <-- can appear in an attribute value there can
                // be false positives.
                isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                    s.indexOf('-->', commentOpen + 1) === -1;
                // Check to see if we have an attribute-like sequence preceding the
                // expression. This can match "name=value" like structures in text,
                // comments, and attribute values, so there can be false-positives.
                const attributeMatch = lastAttributeNameRegex.exec(s);
                if (attributeMatch === null) {
                    // We're only in this branch if we don't have a attribute-like
                    // preceding sequence. For comments, this guards against unusual
                    // attribute values like <div foo="<!--${'bar'}">. Cases like
                    // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                    // below.
                    html += s + (isCommentBinding ? commentMarker : nodeMarker);
                }
                else {
                    // For attributes we use just a marker sentinel, and also append a
                    // $lit$ suffix to the name to opt-out of attribute-specific parsing
                    // that IE and Edge do for style and certain SVG attributes.
                    html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                        attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                        marker;
                }
            }
            html += this.strings[l];
            return html;
        }
        getTemplateElement() {
            const template = document.createElement('template');
            let value = this.getHTML();
            if (policy !== undefined) {
                // this is secure because `this.strings` is a TemplateStringsArray.
                // TODO: validate this when
                // https://github.com/tc39/proposal-array-is-template-object is
                // implemented.
                value = policy.createHTML(value);
            }
            template.innerHTML = value;
            return template;
        }
    }

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */const P=new
/**
=======
     */
    const isPrimitive = (value) => {
        return (value === null ||
            !(typeof value === 'object' || typeof value === 'function'));
    };
    const isIterable = (value) => {
        return Array.isArray(value) ||
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            !!(value && value[Symbol.iterator]);
    };
    /**
     * Writes attribute values to the DOM for a group of AttributeParts bound to a
     * single attribute. The value is only set once even if there are multiple parts
     * for an attribute.
     */
    class AttributeCommitter {
        constructor(element, name, strings) {
            this.dirty = true;
            this.element = element;
            this.name = name;
            this.strings = strings;
            this.parts = [];
            for (let i = 0; i < strings.length - 1; i++) {
                this.parts[i] = this._createPart();
            }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */
        _createPart() {
            return new AttributePart(this);
        }
        _getValue() {
            const strings = this.strings;
            const l = strings.length - 1;
            const parts = this.parts;
            // If we're assigning an attribute via syntax like:
            //    attr="${foo}"  or  attr=${foo}
            // but not
            //    attr="${foo} ${bar}" or attr="${foo} baz"
            // then we don't want to coerce the attribute value into one long
            // string. Instead we want to just return the value itself directly,
            // so that sanitizeDOMValue can get the actual value rather than
            // String(value)
            // The exception is if v is an array, in which case we do want to smash
            // it together into a string without calling String() on the array.
            //
            // This also allows trusted values (when using TrustedTypes) being
            // assigned to DOM sinks without being stringified in the process.
            if (l === 1 && strings[0] === '' && strings[1] === '') {
                const v = parts[0].value;
                if (typeof v === 'symbol') {
                    return String(v);
                }
                if (typeof v === 'string' || !isIterable(v)) {
                    return v;
                }
            }
            let text = '';
            for (let i = 0; i < l; i++) {
                text += strings[i];
                const part = parts[i];
                if (part !== undefined) {
                    const v = part.value;
                    if (isPrimitive(v) || !isIterable(v)) {
                        text += typeof v === 'string' ? v : String(v);
                    }
                    else {
                        for (const t of v) {
                            text += typeof t === 'string' ? t : String(t);
                        }
                    }
                }
            }
            text += strings[l];
            return text;
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                this.element.setAttribute(this.name, this._getValue());
            }
        }
    }
    /**
     * A Part that controls all or part of an attribute value.
     */
    class AttributePart {
        constructor(committer) {
            this.value = undefined;
            this.committer = committer;
        }
        setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
                this.value = value;
                // If the value is a not a directive, dirty the committer so that it'll
                // call setAttribute. If the value is a directive, it'll dirty the
                // committer if it calls setValue().
                if (!isDirective(value)) {
                    this.committer.dirty = true;
                }
            }
        }
        commit() {
            while (isDirective(this.value)) {
                const directive = this.value;
                this.value = noChange;
                directive(this);
            }
            if (this.value === noChange) {
                return;
            }
            this.committer.commit();
        }
    }
    /**
     * A Part that controls a location within a Node tree. Like a Range, NodePart
     * has start and end locations and can set and update the Nodes between those
     * locations.
     *
     * NodeParts support several value types: primitives, Nodes, TemplateResults,
     * as well as arrays and iterables of those types.
     */
    class NodePart {
        constructor(options) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.options = options;
        }
        /**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendInto(container) {
            this.startNode = container.appendChild(createMarker());
            this.endNode = container.appendChild(createMarker());
        }
        /**
         * Inserts this part after the `ref` node (between `ref` and `ref`'s next
         * sibling). Both `ref` and its next sibling must be static, unchanging nodes
         * such as those that appear in a literal section of a template.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
        }
        /**
         * Appends this part into a parent part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        appendIntoPart(part) {
            part.__insert(this.startNode = createMarker());
            part.__insert(this.endNode = createMarker());
        }
        /**
         * Inserts this part after the `ref` part.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        insertAfterPart(ref) {
            ref.__insert(this.startNode = createMarker());
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            if (this.startNode.parentNode === null) {
                return;
            }
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            const value = this.__pendingValue;
            if (value === noChange) {
                return;
            }
            if (isPrimitive(value)) {
                if (value !== this.value) {
                    this.__commitText(value);
                }
            }
            else if (value instanceof TemplateResult) {
                this.__commitTemplateResult(value);
            }
            else if (value instanceof Node) {
                this.__commitNode(value);
            }
            else if (isIterable(value)) {
                this.__commitIterable(value);
            }
            else if (value === nothing) {
                this.value = nothing;
                this.clear();
            }
            else {
                // Fallback, will render the string representation
                this.__commitText(value);
            }
        }
        __insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
        }
        __commitNode(value) {
            if (this.value === value) {
                return;
            }
            this.clear();
            this.__insert(value);
            this.value = value;
        }
        __commitText(value) {
            const node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            // If `value` isn't already a string, we explicitly convert it here in case
            // it can't be implicitly converted - i.e. it's a symbol.
            const valueAsString = typeof value === 'string' ? value : String(value);
            if (node === this.endNode.previousSibling &&
                node.nodeType === 3 /* Node.TEXT_NODE */) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = valueAsString;
            }
            else {
                this.__commitNode(document.createTextNode(valueAsString));
            }
            this.value = value;
        }
        __commitTemplateResult(value) {
            const template = this.options.templateFactory(value);
            if (this.value instanceof TemplateInstance &&
                this.value.template === template) {
                this.value.update(value.values);
            }
            else {
                // Make sure we propagate the template processor from the TemplateResult
                // so that we use its syntax extension, etc. The template factory comes
                // from the render function options so that it can control template
                // caching and preprocessing.
                const instance = new TemplateInstance(template, value.processor, this.options);
                const fragment = instance._clone();
                instance.update(value.values);
                this.__commitNode(fragment);
                this.value = instance;
            }
        }
        __commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
                this.value = [];
                this.clear();
            }
            // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            const itemParts = this.value;
            let partIndex = 0;
            let itemPart;
            for (const item of value) {
                // Try to reuse an existing part
                itemPart = itemParts[partIndex];
                // If no existing part, create a new one
                if (itemPart === undefined) {
                    itemPart = new NodePart(this.options);
                    itemParts.push(itemPart);
                    if (partIndex === 0) {
                        itemPart.appendIntoPart(this);
                    }
                    else {
                        itemPart.insertAfterPart(itemParts[partIndex - 1]);
                    }
                }
                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
            }
            if (partIndex < itemParts.length) {
                // Truncate the parts array so _value reflects the current state
                itemParts.length = partIndex;
                this.clear(itemPart && itemPart.endNode);
            }
        }
        clear(startNode = this.startNode) {
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
        }
    }
    /**
     * Implements a boolean attribute, roughly as defined in the HTML
     * specification.
     *
     * If the value is truthy, then the attribute is present with a value of
     * ''. If the value is falsey, the attribute is removed.
     */
    class BooleanAttributePart {
        constructor(element, name, strings) {
            this.value = undefined;
            this.__pendingValue = undefined;
            if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
                throw new Error('Boolean attributes can only contain a single expression');
            }
            this.element = element;
            this.name = name;
            this.strings = strings;
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const value = !!this.__pendingValue;
            if (this.value !== value) {
                if (value) {
                    this.element.setAttribute(this.name, '');
                }
                else {
                    this.element.removeAttribute(this.name);
                }
                this.value = value;
            }
            this.__pendingValue = noChange;
        }
    }
    /**
     * Sets attribute values for PropertyParts, so that the value is only set once
     * even if there are multiple parts for a property.
     *
     * If an expression controls the whole property value, then the value is simply
     * assigned to the property under control. If there are string literals or
     * multiple expressions, then the strings are expressions are interpolated into
     * a string first.
     */
    class PropertyCommitter extends AttributeCommitter {
        constructor(element, name, strings) {
            super(element, name, strings);
            this.single =
                (strings.length === 2 && strings[0] === '' && strings[1] === '');
        }
        _createPart() {
            return new PropertyPart(this);
        }
        _getValue() {
            if (this.single) {
                return this.parts[0].value;
            }
            return super._getValue();
        }
        commit() {
            if (this.dirty) {
                this.dirty = false;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.element[this.name] = this._getValue();
            }
        }
    }
    class PropertyPart extends AttributePart {
    }
    // Detect event listener options support. If the `capture` property is read
    // from the options object, then options are supported. If not, then the third
    // argument to add/removeEventListener is interpreted as the boolean capture
    // value so we should only pass the `capture` property.
    let eventOptionsSupported = false;
    // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
    // blocks right into the body of a module
    (() => {
        try {
            const options = {
                get capture() {
                    eventOptionsSupported = true;
                    return false;
                }
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.addEventListener('test', options, options);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            window.removeEventListener('test', options, options);
        }
        catch (_e) {
            // event options not supported
        }
    })();
    class EventPart {
        constructor(element, eventName, eventContext) {
            this.value = undefined;
            this.__pendingValue = undefined;
            this.element = element;
            this.eventName = eventName;
            this.eventContext = eventContext;
            this.__boundHandleEvent = (e) => this.handleEvent(e);
        }
        setValue(value) {
            this.__pendingValue = value;
        }
        commit() {
            while (isDirective(this.__pendingValue)) {
                const directive = this.__pendingValue;
                this.__pendingValue = noChange;
                directive(this);
            }
            if (this.__pendingValue === noChange) {
                return;
            }
            const newListener = this.__pendingValue;
            const oldListener = this.value;
            const shouldRemoveListener = newListener == null ||
                oldListener != null &&
                    (newListener.capture !== oldListener.capture ||
                        newListener.once !== oldListener.once ||
                        newListener.passive !== oldListener.passive);
            const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            if (shouldRemoveListener) {
                this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            if (shouldAddListener) {
                this.__options = getOptions(newListener);
                this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
            }
            this.value = newListener;
            this.__pendingValue = noChange;
        }
        handleEvent(event) {
            if (typeof this.value === 'function') {
                this.value.call(this.eventContext || this.element, event);
            }
            else {
                this.value.handleEvent(event);
            }
        }
    }
    // We copy options because of the inconsistent behavior of browsers when reading
    // the third argument of add/removeEventListener. IE11 doesn't support options
    // at all. Chrome 41 only reads `capture` if the argument is an object.
    const getOptions = (o) => o &&
        (eventOptionsSupported ?
            { capture: o.capture, passive: o.passive, once: o.once } :
            o.capture);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    /**
     * The default TemplateFactory which caches Templates keyed on
     * result.type and result.strings.
     */
    function templateFactory(result) {
        let templateCache = templateCaches.get(result.type);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(result.type, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        // If the TemplateStringsArray is new, generate a key from the strings
        // This key is shared between all templates with identical content
        const key = result.strings.join(marker);
        // Check if we already have a Template for this key
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            // If we have not seen this key before, create a new Template
            template = new Template(result, result.getTemplateElement());
            // Cache the Template for this key
            templateCache.keyString.set(key, template);
        }
        // Cache all future queries for this TemplateStringsArray
        templateCache.stringsArray.set(result.strings, template);
        return template;
    }
    const templateCaches = new Map();

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const parts = new WeakMap();
    /**
     * Renders a template result or other value to a container.
     *
     * To update a container with new values, reevaluate the template literal and
     * call `render` with the new result.
     *
     * @param result Any value renderable by NodePart - typically a TemplateResult
     *     created by evaluating a template tag like `html` or `svg`.
     * @param container A DOM parent to render to. The entire contents are either
     *     replaced, or efficiently updated if the same result type was previous
     *     rendered there.
     * @param options RenderOptions for the entire render tree rendered to this
     *     container. Render options must *not* change between renders to the same
     *     container, as those changes will not effect previously rendered DOM.
     */
    const render = (result, container, options) => {
        let part = parts.get(container);
        if (part === undefined) {
            removeNodes(container, container.firstChild);
            parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
            part.appendInto(container);
        }
        part.setValue(result);
        part.commit();
    };

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
<<<<<<< HEAD
class{handleAttributeExpressions(e,t,a,i){const s=t[0];if("."===s){return new C(e,t.slice(1),a).parts}if("@"===s)return[new E(e,t.slice(1),i.eventContext)];if("?"===s)return[new j(e,t.slice(1),a)];return new x(e,t,a).parts}handleTextExpression(e){return new O(e)}};
/**
=======
    /**
     * Creates Parts when a template is instantiated.
     */
    class DefaultTemplateProcessor {
        /**
         * Create parts for an attribute-position binding, given the event, attribute
         * name, and string literals.
         *
         * @param element The element containing the binding
         * @param name  The attribute name
         * @param strings The string literals. There are always at least two strings,
         *   event for fully-controlled bindings with a single expression.
         */
        handleAttributeExpressions(element, name, strings, options) {
            const prefix = name[0];
            if (prefix === '.') {
                const committer = new PropertyCommitter(element, name.slice(1), strings);
                return committer.parts;
            }
            if (prefix === '@') {
                return [new EventPart(element, name.slice(1), options.eventContext)];
            }
            if (prefix === '?') {
                return [new BooleanAttributePart(element, name.slice(1), strings)];
            }
            const committer = new AttributeCommitter(element, name, strings);
            return committer.parts;
        }
        /**
         * Create parts for a text-position binding.
         * @param templateFactory
         */
        handleTextExpression(options) {
            return new NodePart(options);
        }
    }
    const defaultTemplateProcessor = new DefaultTemplateProcessor();

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const R=(e,...t)=>new $(e,t,"html",P)
/**
=======
     */
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for lit-html usage.
    // TODO(justinfagnani): inject version number at build time
    if (typeof window !== 'undefined') {
        (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.3.0');
    }
    /**
     * Interprets a template literal as an HTML template that can efficiently
     * render to and update a container.
     */
    const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
     */,L=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const I=e=>t=>{const a=L(t.type,e);let i=N.get(a);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},N.set(a,i));let n=i.stringsArray.get(t.strings);if(void 0!==n)return n;const o=t.strings.join(s);if(n=i.keyString.get(o),void 0===n){const a=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(a,e),n=new r(t,a),i.keyString.set(o,n)}return i.stringsArray.set(t.strings,n),n},U=["html","svg"],F=new Set,H=(e,t,a)=>{F.add(e);const i=a?a.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:n}=s;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(i,e);const o=document.createElement("style");for(let e=0;e<n;e++){const t=s[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{U.forEach(t=>{const a=N.get(L(t,e));void 0!==a&&a.keyString.forEach(e=>{const{element:{content:t}}=e,a=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{a.add(e)}),u(e,a)})})})(e);const r=i.content;a?function(e,t,a=null){const{element:{content:i},parts:s}=e;if(null==a)return void i.appendChild(t);const n=document.createTreeWalker(i,133,null,!1);let o=p(s),r=0,d=-1;for(;n.nextNode();){d++;for(n.currentNode===a&&(r=m(t),a.parentNode.insertBefore(t,a));-1!==o&&s[o].index===d;){if(r>0){for(;-1!==o;)s[o].index+=r,o=p(s,o);return}o=p(s,o)}}}(a,o,r.firstChild):r.insertBefore(o,r.firstChild),window.ShadyCSS.prepareTemplateStyles(i,e);const d=r.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(a){r.insertBefore(o,r.firstChild);const e=new Set;e.add(o),u(a,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const Y={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},B=(e,t)=>t!==e&&(t==t||e==e),W={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:B};class G extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,a)=>{const i=this._attributeNameForProperty(a,t);void 0!==i&&(this._attributeToPropertyMap.set(i,a),e.push(i))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=W){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const a="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,a,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}static getPropertyDescriptor(e,t,a){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdateInternal(e,s,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||W}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const a of t)this.createProperty(a,e[a])}}static _attributeNameForProperty(e,t){const a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,a=B){return a(e,t)}static _propertyValueFromAttribute(e,t){const a=t.type,i=t.converter||Y,s="function"==typeof i?i:i.fromAttribute;return s?s(e,a):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const a=t.type,i=t.converter;return(i&&i.toAttribute||Y.toAttribute)(e,a)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,a){t!==a&&this._attributeToProperty(e,a)}_propertyToAttribute(e,t,a=W){const i=this.constructor,s=i._attributeNameForProperty(e,a);if(void 0!==s){const e=i._propertyValueToAttribute(t,a);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const a=this.constructor,i=a._attributeToPropertyMap.get(e);if(void 0!==i){const e=a.getPropertyOptions(i);this._updateState=16|this._updateState,this[i]=a._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,a){let i=!0;if(void 0!==e){const s=this.constructor;a=a||s.getPropertyOptions(e),s._valueHasChanged(this[e],t,a.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==a.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,a))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}G.finalized=!0;
/**
=======
     */
    // Get a key to lookup in `templateCaches`.
    const getTemplateCacheKey = (type, scopeName) => `${type}--${scopeName}`;
    let compatibleShadyCSSVersion = true;
    if (typeof window.ShadyCSS === 'undefined') {
        compatibleShadyCSSVersion = false;
    }
    else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
        console.warn(`Incompatible ShadyCSS version detected. ` +
            `Please update to at least @webcomponents/webcomponentsjs@2.0.2 and ` +
            `@webcomponents/shadycss@1.3.1.`);
        compatibleShadyCSSVersion = false;
    }
    /**
     * Template factory which scopes template DOM using ShadyCSS.
     * @param scopeName {string}
     */
    const shadyTemplateFactory = (scopeName) => (result) => {
        const cacheKey = getTemplateCacheKey(result.type, scopeName);
        let templateCache = templateCaches.get(cacheKey);
        if (templateCache === undefined) {
            templateCache = {
                stringsArray: new WeakMap(),
                keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
        }
        let template = templateCache.stringsArray.get(result.strings);
        if (template !== undefined) {
            return template;
        }
        const key = result.strings.join(marker);
        template = templateCache.keyString.get(key);
        if (template === undefined) {
            const element = result.getTemplateElement();
            if (compatibleShadyCSSVersion) {
                window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }
            template = new Template(result, element);
            templateCache.keyString.set(key, template);
        }
        templateCache.stringsArray.set(result.strings, template);
        return template;
    };
    const TEMPLATE_TYPES = ['html', 'svg'];
    /**
     * Removes all style elements from Templates for the given scopeName.
     */
    const removeStylesFromLitTemplates = (scopeName) => {
        TEMPLATE_TYPES.forEach((type) => {
            const templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
            if (templates !== undefined) {
                templates.keyString.forEach((template) => {
                    const { element: { content } } = template;
                    // IE 11 doesn't support the iterable param Set constructor
                    const styles = new Set();
                    Array.from(content.querySelectorAll('style')).forEach((s) => {
                        styles.add(s);
                    });
                    removeNodesFromTemplate(template, styles);
                });
            }
        });
    };
    const shadyRenderSet = new Set();
    /**
     * For the given scope name, ensures that ShadyCSS style scoping is performed.
     * This is done just once per scope name so the fragment and template cannot
     * be modified.
     * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
     * to be scoped and appended to the document
     * (2) removes style elements from all lit-html Templates for this scope name.
     *
     * Note, <style> elements can only be placed into templates for the
     * initial rendering of the scope. If <style> elements are included in templates
     * dynamically rendered to the scope (after the first scope render), they will
     * not be scoped and the <style> will be left in the template and rendered
     * output.
     */
    const prepareTemplateStyles = (scopeName, renderedDOM, template) => {
        shadyRenderSet.add(scopeName);
        // If `renderedDOM` is stamped from a Template, then we need to edit that
        // Template's underlying template element. Otherwise, we create one here
        // to give to ShadyCSS, which still requires one while scoping.
        const templateElement = !!template ? template.element : document.createElement('template');
        // Move styles out of rendered DOM and store.
        const styles = renderedDOM.querySelectorAll('style');
        const { length } = styles;
        // If there are no styles, skip unnecessary work
        if (length === 0) {
            // Ensure prepareTemplateStyles is called to support adding
            // styles via `prepareAdoptedCssText` since that requires that
            // `prepareTemplateStyles` is called.
            //
            // ShadyCSS will only update styles containing @apply in the template
            // given to `prepareTemplateStyles`. If no lit Template was given,
            // ShadyCSS will not be able to update uses of @apply in any relevant
            // template. However, this is not a problem because we only create the
            // template for the purpose of supporting `prepareAdoptedCssText`,
            // which doesn't support @apply at all.
            window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
            return;
        }
        const condensedStyle = document.createElement('style');
        // Collect styles into a single style. This helps us make sure ShadyCSS
        // manipulations will not prevent us from being able to fix up template
        // part indices.
        // NOTE: collecting styles is inefficient for browsers but ShadyCSS
        // currently does this anyway. When it does not, this should be changed.
        for (let i = 0; i < length; i++) {
            const style = styles[i];
            style.parentNode.removeChild(style);
            condensedStyle.textContent += style.textContent;
        }
        // Remove styles from nested templates in this scope.
        removeStylesFromLitTemplates(scopeName);
        // And then put the condensed style into the "root" template passed in as
        // `template`.
        const content = templateElement.content;
        if (!!template) {
            insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
        }
        else {
            content.insertBefore(condensedStyle, content.firstChild);
        }
        // Note, it's important that ShadyCSS gets the template that `lit-html`
        // will actually render so that it can update the style inside when
        // needed (e.g. @apply native Shadow DOM case).
        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        const style = content.querySelector('style');
        if (window.ShadyCSS.nativeShadow && style !== null) {
            // When in native Shadow DOM, ensure the style created by ShadyCSS is
            // included in initially rendered output (`renderedDOM`).
            renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
        }
        else if (!!template) {
            // When no style is left in the template, parts will be broken as a
            // result. To fix this, we put back the style node ShadyCSS removed
            // and then tell lit to remove that node from the template.
            // There can be no style in the template in 2 cases (1) when Shady DOM
            // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
            // is in use ShadyCSS removes the style if it contains no content.
            // NOTE, ShadyCSS creates its own style so we can safely add/remove
            // `condensedStyle` here.
            content.insertBefore(condensedStyle, content.firstChild);
            const removes = new Set();
            removes.add(condensedStyle);
            removeNodesFromTemplate(template, removes);
        }
    };
    /**
     * Extension to the standard `render` method which supports rendering
     * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
     * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
     * or when the webcomponentsjs
     * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
     *
     * Adds a `scopeName` option which is used to scope element DOM and stylesheets
     * when native ShadowDOM is unavailable. The `scopeName` will be added to
     * the class attribute of all rendered DOM. In addition, any style elements will
     * be automatically re-written with this `scopeName` selector and moved out
     * of the rendered DOM and into the document `<head>`.
     *
     * It is common to use this render method in conjunction with a custom element
     * which renders a shadowRoot. When this is done, typically the element's
     * `localName` should be used as the `scopeName`.
     *
     * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
     * custom properties (needed only on older browsers like IE11) and a shim for
     * a deprecated feature called `@apply` that supports applying a set of css
     * custom properties to a given location.
     *
     * Usage considerations:
     *
     * * Part values in `<style>` elements are only applied the first time a given
     * `scopeName` renders. Subsequent changes to parts in style elements will have
     * no effect. Because of this, parts in style elements should only be used for
     * values that will never change, for example parts that set scope-wide theme
     * values or parts which render shared style elements.
     *
     * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
     * custom element's `constructor` is not supported. Instead rendering should
     * either done asynchronously, for example at microtask timing (for example
     * `Promise.resolve()`), or be deferred until the first time the element's
     * `connectedCallback` runs.
     *
     * Usage considerations when using shimmed custom properties or `@apply`:
     *
     * * Whenever any dynamic changes are made which affect
     * css custom properties, `ShadyCSS.styleElement(element)` must be called
     * to update the element. There are two cases when this is needed:
     * (1) the element is connected to a new parent, (2) a class is added to the
     * element that causes it to match different custom properties.
     * To address the first case when rendering a custom element, `styleElement`
     * should be called in the element's `connectedCallback`.
     *
     * * Shimmed custom properties may only be defined either for an entire
     * shadowRoot (for example, in a `:host` rule) or via a rule that directly
     * matches an element with a shadowRoot. In other words, instead of flowing from
     * parent to child as do native css custom properties, shimmed custom properties
     * flow only from shadowRoots to nested shadowRoots.
     *
     * * When using `@apply` mixing css shorthand property names with
     * non-shorthand names (for example `border` and `border-width`) is not
     * supported.
     */
    const render$1 = (result, container, options) => {
        if (!options || typeof options !== 'object' || !options.scopeName) {
            throw new Error('The `scopeName` option is required.');
        }
        const scopeName = options.scopeName;
        const hasRendered = parts.has(container);
        const needsScoping = compatibleShadyCSSVersion &&
            container.nodeType === 11 /* Node.DOCUMENT_FRAGMENT_NODE */ &&
            !!container.host;
        // Handle first render to a scope specially...
        const firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName);
        // On first scope render, render into a fragment; this cannot be a single
        // fragment that is reused since nested renders can occur synchronously.
        const renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
        render(result, renderContainer, Object.assign({ templateFactory: shadyTemplateFactory(scopeName) }, options));
        // When performing first scope render,
        // (1) We've rendered into a fragment so that there's a chance to
        // `prepareTemplateStyles` before sub-elements hit the DOM
        // (which might cause them to render based on a common pattern of
        // rendering in a custom element's `connectedCallback`);
        // (2) Scope the template with ShadyCSS one time only for this scope.
        // (3) Render the fragment into the container and make sure the
        // container knows its `part` is the one we just rendered. This ensures
        // DOM will be re-used on subsequent renders.
        if (firstScopeRender) {
            const part = parts.get(renderContainer);
            parts.delete(renderContainer);
            // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
            // that should apply to `renderContainer` even if the rendered value is
            // not a TemplateInstance. However, it will only insert scoped styles
            // into the document if `prepareTemplateStyles` has already been called
            // for the given scope name.
            const template = part.value instanceof TemplateInstance ?
                part.value.template :
                undefined;
            prepareTemplateStyles(scopeName, renderContainer, template);
            removeNodes(container, container.firstChild);
            container.appendChild(renderContainer);
            parts.set(container, part);
        }
        // After elements have hit the DOM, update styling if this is the
        // initial render to this container.
        // This is needed whenever dynamic changes are made so it would be
        // safest to do every render; however, this would regress performance
        // so we leave it up to the user to call `ShadyCSS.styleElement`
        // for dynamic changes.
        if (!hasRendered && needsScoping) {
            window.ShadyCSS.styleElement(container.host);
        }
    };

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
<<<<<<< HEAD
const Q=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:a,elements:i}=t;return{kind:a,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t),K=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(a){a.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(a){a.createProperty(t.key,e)}};function Z(e){return(t,a)=>void 0!==a?((e,t,a)=>{t.constructor.createProperty(a,e)})(e,t,a):K(e,t)}function J(e){return Z({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}const X=(e,t,a)=>{Object.defineProperty(t,a,e)},ee=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e})
/**
=======
    var _a;
    /**
     * Use this module if you want to create your own base class extending
     * [[UpdatingElement]].
     * @packageDocumentation
     */
    /*
     * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
     * replaced at compile time by the munged name for object[property]. We cannot
     * alias this function, so we have to use a small shim that has the same
     * behavior when not compiling.
     */
    window.JSCompiler_renameProperty =
        (prop, _obj) => prop;
    const defaultConverter = {
        toAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value ? '' : null;
                case Object:
                case Array:
                    // if the value is `null` or `undefined` pass this through
                    // to allow removing/no change behavior.
                    return value == null ? value : JSON.stringify(value);
            }
            return value;
        },
        fromAttribute(value, type) {
            switch (type) {
                case Boolean:
                    return value !== null;
                case Number:
                    return value === null ? null : Number(value);
                case Object:
                case Array:
                    return JSON.parse(value);
            }
            return value;
        }
    };
    /**
     * Change function that returns true if `value` is different from `oldValue`.
     * This method is used as the default for a property's `hasChanged` function.
     */
    const notEqual = (value, old) => {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
    };
    const defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual
    };
    const STATE_HAS_UPDATED = 1;
    const STATE_UPDATE_REQUESTED = 1 << 2;
    const STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
    const STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
    /**
     * The Closure JS Compiler doesn't currently have good support for static
     * property semantics where "this" is dynamic (e.g.
     * https://github.com/google/closure-compiler/issues/3177 and others) so we use
     * this hack to bypass any rewriting by the compiler.
     */
    const finalized = 'finalized';
    /**
     * Base element class which manages element properties and attributes. When
     * properties change, the `update` method is asynchronously called. This method
     * should be supplied by subclassers to render updates as desired.
     * @noInheritDoc
     */
    class UpdatingElement extends HTMLElement {
        constructor() {
            super();
            this.initialize();
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */
        static get observedAttributes() {
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            const attributes = [];
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this._classProperties.forEach((v, p) => {
                const attr = this._attributeNameForProperty(p, v);
                if (attr !== undefined) {
                    this._attributeToPropertyMap.set(attr, p);
                    attributes.push(attr);
                }
            });
            return attributes;
        }
        /**
         * Ensures the private `_classProperties` property metadata is created.
         * In addition to `finalize` this is also called in `createProperty` to
         * ensure the `@property` decorator can add property metadata.
         */
        /** @nocollapse */
        static _ensureClassProperties() {
            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
                this._classProperties = new Map();
                // NOTE: Workaround IE11 not supporting Map constructor argument.
                const superProperties = Object.getPrototypeOf(this)._classProperties;
                if (superProperties !== undefined) {
                    superProperties.forEach((v, k) => this._classProperties.set(k, v));
                }
            }
        }
        /**
         * Creates a property accessor on the element prototype if one does not exist
         * and stores a PropertyDeclaration for the property with the given options.
         * The property setter calls the property's `hasChanged` property option
         * or uses a strict identity check to determine whether or not to request
         * an update.
         *
         * This method may be overridden to customize properties; however,
         * when doing so, it's important to call `super.createProperty` to ensure
         * the property is setup correctly. This method calls
         * `getPropertyDescriptor` internally to get a descriptor to install.
         * To customize what properties do when they are get or set, override
         * `getPropertyDescriptor`. To customize the options for a property,
         * implement `createProperty` like this:
         *
         * static createProperty(name, options) {
         *   options = Object.assign(options, {myOption: true});
         *   super.createProperty(name, options);
         * }
         *
         * @nocollapse
         */
        static createProperty(name, options = defaultPropertyDeclaration) {
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();
            this._classProperties.set(name, options);
            // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
                return;
            }
            const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
            const descriptor = this.getPropertyDescriptor(name, key, options);
            if (descriptor !== undefined) {
                Object.defineProperty(this.prototype, name, descriptor);
            }
        }
        /**
         * Returns a property descriptor to be defined on the given named property.
         * If no descriptor is returned, the property will not become an accessor.
         * For example,
         *
         *   class MyElement extends LitElement {
         *     static getPropertyDescriptor(name, key, options) {
         *       const defaultDescriptor =
         *           super.getPropertyDescriptor(name, key, options);
         *       const setter = defaultDescriptor.set;
         *       return {
         *         get: defaultDescriptor.get,
         *         set(value) {
         *           setter.call(this, value);
         *           // custom action.
         *         },
         *         configurable: true,
         *         enumerable: true
         *       }
         *     }
         *   }
         *
         * @nocollapse
         */
        static getPropertyDescriptor(name, key, options) {
            return {
                // tslint:disable-next-line:no-any no symbol in index
                get() {
                    return this[key];
                },
                set(value) {
                    const oldValue = this[name];
                    this[key] = value;
                    this
                        .requestUpdateInternal(name, oldValue, options);
                },
                configurable: true,
                enumerable: true
            };
        }
        /**
         * Returns the property options associated with the given property.
         * These options are defined with a PropertyDeclaration via the `properties`
         * object or the `@property` decorator and are registered in
         * `createProperty(...)`.
         *
         * Note, this method should be considered "final" and not overridden. To
         * customize the options for a given property, override `createProperty`.
         *
         * @nocollapse
         * @final
         */
        static getPropertyOptions(name) {
            return this._classProperties && this._classProperties.get(name) ||
                defaultPropertyDeclaration;
        }
        /**
         * Creates property accessors for registered properties and ensures
         * any superclasses are also finalized.
         * @nocollapse
         */
        static finalize() {
            // finalize any superclasses
            const superCtor = Object.getPrototypeOf(this);
            if (!superCtor.hasOwnProperty(finalized)) {
                superCtor.finalize();
            }
            this[finalized] = true;
            this._ensureClassProperties();
            // initialize Map populated in observedAttributes
            this._attributeToPropertyMap = new Map();
            // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
                const props = this.properties;
                // support symbols in properties (IE11 does not support this)
                const propKeys = [
                    ...Object.getOwnPropertyNames(props),
                    ...(typeof Object.getOwnPropertySymbols === 'function') ?
                        Object.getOwnPropertySymbols(props) :
                        []
                ];
                // This for/of is ok because propKeys is an array
                for (const p of propKeys) {
                    // note, use of `any` is due to TypeSript lack of support for symbol in
                    // index types
                    // tslint:disable-next-line:no-any no symbol in index
                    this.createProperty(p, props[p]);
                }
            }
        }
        /**
         * Returns the property name for the given attribute `name`.
         * @nocollapse
         */
        static _attributeNameForProperty(name, options) {
            const attribute = options.attribute;
            return attribute === false ?
                undefined :
                (typeof attribute === 'string' ?
                    attribute :
                    (typeof name === 'string' ? name.toLowerCase() : undefined));
        }
        /**
         * Returns true if a property should request an update.
         * Called when a property value is set and uses the `hasChanged`
         * option for the property if present or a strict identity check.
         * @nocollapse
         */
        static _valueHasChanged(value, old, hasChanged = notEqual) {
            return hasChanged(value, old);
        }
        /**
         * Returns the property value for the given attribute value.
         * Called via the `attributeChangedCallback` and uses the property's
         * `converter` or `converter.fromAttribute` property option.
         * @nocollapse
         */
        static _propertyValueFromAttribute(value, options) {
            const type = options.type;
            const converter = options.converter || defaultConverter;
            const fromAttribute = (typeof converter === 'function' ? converter : converter.fromAttribute);
            return fromAttribute ? fromAttribute(value, type) : value;
        }
        /**
         * Returns the attribute value for the given property value. If this
         * returns undefined, the property will *not* be reflected to an attribute.
         * If this returns null, the attribute will be removed, otherwise the
         * attribute will be set to the value.
         * This uses the property's `reflect` and `type.toAttribute` property options.
         * @nocollapse
         */
        static _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
                return;
            }
            const type = options.type;
            const converter = options.converter;
            const toAttribute = converter && converter.toAttribute ||
                defaultConverter.toAttribute;
            return toAttribute(value, type);
        }
        /**
         * Performs element initialization. By default captures any pre-set values for
         * registered properties.
         */
        initialize() {
            this._updateState = 0;
            this._updatePromise =
                new Promise((res) => this._enableUpdatingResolver = res);
            this._changedProperties = new Map();
            this._saveInstanceProperties();
            // ensures first update will be caught by an early access of
            // `updateComplete`
            this.requestUpdateInternal();
        }
        /**
         * Fixes any properties set on the instance before upgrade time.
         * Otherwise these would shadow the accessor and break these properties.
         * The properties are stored in a Map which is played back after the
         * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
         * (<=41), properties created for native platform properties like (`id` or
         * `name`) may not have default values set in the element constructor. On
         * these browsers native properties appear on instances and therefore their
         * default value will overwrite any element default (e.g. if the element sets
         * this.id = 'id' in the constructor, the 'id' will become '' since this is
         * the native platform default).
         */
        _saveInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor
                ._classProperties.forEach((_v, p) => {
                if (this.hasOwnProperty(p)) {
                    const value = this[p];
                    delete this[p];
                    if (!this._instanceProperties) {
                        this._instanceProperties = new Map();
                    }
                    this._instanceProperties.set(p, value);
                }
            });
        }
        /**
         * Applies previously saved instance properties.
         */
        _applyInstanceProperties() {
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach((v, p) => this[p] = v);
            this._instanceProperties = undefined;
        }
        connectedCallback() {
            // Ensure first connection completes an update. Updates cannot complete
            // before connection.
            this.enableUpdating();
        }
        enableUpdating() {
            if (this._enableUpdatingResolver !== undefined) {
                this._enableUpdatingResolver();
                this._enableUpdatingResolver = undefined;
            }
        }
        /**
         * Allows for `super.disconnectedCallback()` in extensions while
         * reserving the possibility of making non-breaking feature additions
         * when disconnecting at some point in the future.
         */
        disconnectedCallback() {
        }
        /**
         * Synchronizes property values when attributes change.
         */
        attributeChangedCallback(name, old, value) {
            if (old !== value) {
                this._attributeToProperty(name, value);
            }
        }
        _propertyToAttribute(name, value, options = defaultPropertyDeclaration) {
            const ctor = this.constructor;
            const attr = ctor._attributeNameForProperty(name, options);
            if (attr !== undefined) {
                const attrValue = ctor._propertyValueToAttribute(value, options);
                // an undefined value does not change the attribute.
                if (attrValue === undefined) {
                    return;
                }
                // Track if the property is being reflected to avoid
                // setting the property again via `attributeChangedCallback`. Note:
                // 1. this takes advantage of the fact that the callback is synchronous.
                // 2. will behave incorrectly if multiple attributes are in the reaction
                // stack at time of calling. However, since we process attributes
                // in `update` this should not be possible (or an extreme corner case
                // that we'd like to discover).
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
                if (attrValue == null) {
                    this.removeAttribute(attr);
                }
                else {
                    this.setAttribute(attr, attrValue);
                }
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
        }
        _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
                return;
            }
            const ctor = this.constructor;
            // Note, hint this as an `AttributeMap` so closure clearly understands
            // the type; it has issues with tracking types through statics
            // tslint:disable-next-line:no-unnecessary-type-assertion
            const propName = ctor._attributeToPropertyMap.get(name);
            if (propName !== undefined) {
                const options = ctor.getPropertyOptions(propName);
                // mark state reflecting
                this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
                this[propName] =
                    // tslint:disable-next-line:no-any
                    ctor._propertyValueFromAttribute(value, options);
                // mark state not reflecting
                this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
        }
        /**
         * This protected version of `requestUpdate` does not access or return the
         * `updateComplete` promise. This promise can be overridden and is therefore
         * not free to access.
         */
        requestUpdateInternal(name, oldValue, options) {
            let shouldRequestUpdate = true;
            // If we have a property key, perform property update steps.
            if (name !== undefined) {
                const ctor = this.constructor;
                options = options || ctor.getPropertyOptions(name);
                if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                    if (!this._changedProperties.has(name)) {
                        this._changedProperties.set(name, oldValue);
                    }
                    // Add to reflecting properties set.
                    // Note, it's important that every change has a chance to add the
                    // property to `_reflectingProperties`. This ensures setting
                    // attribute + property reflects correctly.
                    if (options.reflect === true &&
                        !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                        if (this._reflectingProperties === undefined) {
                            this._reflectingProperties = new Map();
                        }
                        this._reflectingProperties.set(name, options);
                    }
                }
                else {
                    // Abort the request if the property should not be considered changed.
                    shouldRequestUpdate = false;
                }
            }
            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
                this._updatePromise = this._enqueueUpdate();
            }
        }
        /**
         * Requests an update which is processed asynchronously. This should
         * be called when an element should update based on some state not triggered
         * by setting a property. In this case, pass no arguments. It should also be
         * called when manually implementing a property setter. In this case, pass the
         * property `name` and `oldValue` to ensure that any configured property
         * options are honored. Returns the `updateComplete` Promise which is resolved
         * when the update completes.
         *
         * @param name {PropertyKey} (optional) name of requesting property
         * @param oldValue {any} (optional) old value of requesting property
         * @returns {Promise} A Promise that is resolved when the update completes.
         */
        requestUpdate(name, oldValue) {
            this.requestUpdateInternal(name, oldValue);
            return this.updateComplete;
        }
        /**
         * Sets up the element to asynchronously update.
         */
        async _enqueueUpdate() {
            this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
            try {
                // Ensure any previous update has resolved before updating.
                // This `await` also ensures that property changes are batched.
                await this._updatePromise;
            }
            catch (e) {
                // Ignore any previous errors. We only care that the previous cycle is
                // done. Any error should have been handled in the previous update.
            }
            const result = this.performUpdate();
            // If `performUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (result != null) {
                await result;
            }
            return !this._hasRequestedUpdate;
        }
        get _hasRequestedUpdate() {
            return (this._updateState & STATE_UPDATE_REQUESTED);
        }
        get hasUpdated() {
            return (this._updateState & STATE_HAS_UPDATED);
        }
        /**
         * Performs an element update. Note, if an exception is thrown during the
         * update, `firstUpdated` and `updated` will not be called.
         *
         * You can override this method to change the timing of updates. If this
         * method is overridden, `super.performUpdate()` must be called.
         *
         * For instance, to schedule updates to occur just before the next frame:
         *
         * ```
         * protected async performUpdate(): Promise<unknown> {
         *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
         *   super.performUpdate();
         * }
         * ```
         */
        performUpdate() {
            // Abort any update if one is not pending when this is called.
            // This can happen if `performUpdate` is called early to "flush"
            // the update.
            if (!this._hasRequestedUpdate) {
                return;
            }
            // Mixin instance properties once, if they exist.
            if (this._instanceProperties) {
                this._applyInstanceProperties();
            }
            let shouldUpdate = false;
            const changedProperties = this._changedProperties;
            try {
                shouldUpdate = this.shouldUpdate(changedProperties);
                if (shouldUpdate) {
                    this.update(changedProperties);
                }
                else {
                    this._markUpdated();
                }
            }
            catch (e) {
                // Prevent `firstUpdated` and `updated` from running when there's an
                // update exception.
                shouldUpdate = false;
                // Ensure element can accept additional updates after an exception.
                this._markUpdated();
                throw e;
            }
            if (shouldUpdate) {
                if (!(this._updateState & STATE_HAS_UPDATED)) {
                    this._updateState = this._updateState | STATE_HAS_UPDATED;
                    this.firstUpdated(changedProperties);
                }
                this.updated(changedProperties);
            }
        }
        _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
        }
        /**
         * Returns a Promise that resolves when the element has completed updating.
         * The Promise value is a boolean that is `true` if the element completed the
         * update without triggering another update. The Promise result is `false` if
         * a property was set inside `updated()`. If the Promise is rejected, an
         * exception was thrown during the update.
         *
         * To await additional asynchronous work, override the `_getUpdateComplete`
         * method. For example, it is sometimes useful to await a rendered element
         * before fulfilling this Promise. To do this, first await
         * `super._getUpdateComplete()`, then any subsequent state.
         *
         * @returns {Promise} The Promise returns a boolean that indicates if the
         * update resolved without triggering another update.
         */
        get updateComplete() {
            return this._getUpdateComplete();
        }
        /**
         * Override point for the `updateComplete` promise.
         *
         * It is not safe to override the `updateComplete` getter directly due to a
         * limitation in TypeScript which means it is not possible to call a
         * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
         * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
         * This method should be overridden instead. For example:
         *
         *   class MyElement extends LitElement {
         *     async _getUpdateComplete() {
         *       await super._getUpdateComplete();
         *       await this._myChild.updateComplete;
         *     }
         *   }
         */
        _getUpdateComplete() {
            return this._updatePromise;
        }
        /**
         * Controls whether or not `update` should be called when the element requests
         * an update. By default, this method always returns `true`, but this can be
         * customized to control when to update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        shouldUpdate(_changedProperties) {
            return true;
        }
        /**
         * Updates the element. This method reflects property values to attributes.
         * It can be overridden to render and keep updated element DOM.
         * Setting properties inside this method will *not* trigger
         * another update.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        update(_changedProperties) {
            if (this._reflectingProperties !== undefined &&
                this._reflectingProperties.size > 0) {
                // Use forEach so this works even if for/of loops are compiled to for
                // loops expecting arrays
                this._reflectingProperties.forEach((v, k) => this._propertyToAttribute(k, this[k], v));
                this._reflectingProperties = undefined;
            }
            this._markUpdated();
        }
        /**
         * Invoked whenever the element is updated. Implement to perform
         * post-updating tasks via DOM APIs, for example, focusing an element.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        updated(_changedProperties) {
        }
        /**
         * Invoked when the element is first updated. Implement to perform one time
         * work on the element after update.
         *
         * Setting properties inside this method will trigger the element to update
         * again after this update cycle completes.
         *
         * @param _changedProperties Map of changed properties with old values
         */
        firstUpdated(_changedProperties) {
        }
    }
    _a = finalized;
    /**
     * Marks class as having finished creating properties.
     */
    UpdatingElement[_a] = true;

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    const legacyCustomElement = (tagName, clazz) => {
        window.customElements.define(tagName, clazz);
        // Cast as any because TS doesn't recognize the return type as being a
        // subtype of the decorated class when clazz is typed as
        // `Constructor<HTMLElement>` for some reason.
        // `Constructor<HTMLElement>` is helpful to make sure the decorator is
        // applied to elements however.
        // tslint:disable-next-line:no-any
        return clazz;
    };
    const standardCustomElement = (tagName, descriptor) => {
        const { kind, elements } = descriptor;
        return {
            kind,
            elements,
            // This callback is called once the class is otherwise fully defined
            finisher(clazz) {
                window.customElements.define(tagName, clazz);
            }
        };
    };
    /**
     * Class decorator factory that defines the decorated class as a custom element.
     *
     * ```
     * @customElement('my-element')
     * class MyElement {
     *   render() {
     *     return html``;
     *   }
     * }
     * ```
     * @category Decorator
     * @param tagName The name of the custom element to define.
     */
    const customElement = (tagName) => (classOrDescriptor) => (typeof classOrDescriptor === 'function') ?
        legacyCustomElement(tagName, classOrDescriptor) :
        standardCustomElement(tagName, classOrDescriptor);
    const standardProperty = (options, element) => {
        // When decorating an accessor, pass it through and add property metadata.
        // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
        // stomp over the user's accessor.
        if (element.kind === 'method' && element.descriptor &&
            !('value' in element.descriptor)) {
            return Object.assign(Object.assign({}, element), { finisher(clazz) {
                    clazz.createProperty(element.key, options);
                } });
        }
        else {
            // createProperty() takes care of defining the property, but we still
            // must return some kind of descriptor, so return a descriptor for an
            // unused prototype field. The finisher calls createProperty().
            return {
                kind: 'field',
                key: Symbol(),
                placement: 'own',
                descriptor: {},
                // When @babel/plugin-proposal-decorators implements initializers,
                // do this instead of the initializer below. See:
                // https://github.com/babel/babel/issues/9260 extras: [
                //   {
                //     kind: 'initializer',
                //     placement: 'own',
                //     initializer: descriptor.initializer,
                //   }
                // ],
                initializer() {
                    if (typeof element.initializer === 'function') {
                        this[element.key] = element.initializer.call(this);
                    }
                },
                finisher(clazz) {
                    clazz.createProperty(element.key, options);
                }
            };
        }
    };
    const legacyProperty = (options, proto, name) => {
        proto.constructor
            .createProperty(name, options);
    };
    /**
     * A property decorator which creates a LitElement property which reflects a
     * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
     * supplied to configure property features.
     *
     * This decorator should only be used for public fields. Private or protected
     * fields should use the [[`internalProperty`]] decorator.
     *
     * @example
     * ```ts
     * class MyElement {
     *   @property({ type: Boolean })
     *   clicked = false;
     * }
     * ```
     * @category Decorator
     * @ExportDecoratedItems
     */
    function property(options) {
        // tslint:disable-next-line:no-any decorator
        return (protoOrDescriptor, name) => (name !== undefined) ?
            legacyProperty(options, protoOrDescriptor, name) :
            standardProperty(options, protoOrDescriptor);
    }
    /**
     * Declares a private or protected property that still triggers updates to the
     * element when it changes.
     *
     * Properties declared this way must not be used from HTML or HTML templating
     * systems, they're solely for properties internal to the element. These
     * properties may be renamed by optimization tools like closure compiler.
     * @category Decorator
     */
    function internalProperty(options) {
        return property({ attribute: false, hasChanged: options === null || options === void 0 ? void 0 : options.hasChanged });
    }
    /**
     * A property decorator that converts a class property into a getter that
     * executes a querySelector on the element's renderRoot.
     *
     * @param selector A DOMString containing one or more selectors to match.
     * @param cache An optional boolean which when true performs the DOM query only
     * once and caches the result.
     *
     * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
     *
     * @example
     *
     * ```ts
     * class MyElement {
     *   @query('#first')
     *   first;
     *
     *   render() {
     *     return html`
     *       <div id="first"></div>
     *       <div id="second"></div>
     *     `;
     *   }
     * }
     * ```
     * @category Decorator
     */
    function query(selector, cache) {
        return (protoOrDescriptor, 
        // tslint:disable-next-line:no-any decorator
        name) => {
            const descriptor = {
                get() {
                    return this.renderRoot.querySelector(selector);
                },
                enumerable: true,
                configurable: true,
            };
            if (cache) {
                const key = typeof name === 'symbol' ? Symbol() : `__${name}`;
                descriptor.get = function () {
                    if (this[key] === undefined) {
                        (this[key] =
                            this.renderRoot.querySelector(selector));
                    }
                    return this[key];
                };
            }
            return (name !== undefined) ?
                legacyQuery(descriptor, protoOrDescriptor, name) :
                standardQuery(descriptor, protoOrDescriptor);
        };
    }
    const legacyQuery = (descriptor, proto, name) => {
        Object.defineProperty(proto, name, descriptor);
    };
    const standardQuery = (descriptor, element) => ({
        kind: 'method',
        placement: 'prototype',
        key: element.key,
        descriptor,
    });

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
    @license
    Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at
    http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
    http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
    found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
    part of the polymer project is also subject to an additional IP rights grant
    found at http://polymer.github.io/PATENTS.txt
<<<<<<< HEAD
    */,te=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol();class ie{constructor(e,t){if(t!==ae)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(te?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const a=t.reduce((t,a,i)=>t+(e=>{if(e instanceof ie)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(a)+e[i+1],e[0]);return new ie(a,ae)};
/**
=======
    */
    /**
     * Whether the current browser supports `adoptedStyleSheets`.
     */
    const supportsAdoptingStyleSheets = (window.ShadowRoot) &&
        (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) &&
        ('adoptedStyleSheets' in Document.prototype) &&
        ('replace' in CSSStyleSheet.prototype);
    const constructionToken = Symbol();
    class CSSResult {
        constructor(cssText, safeToken) {
            if (safeToken !== constructionToken) {
                throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
            }
            this.cssText = cssText;
        }
        // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.
        get styleSheet() {
            if (this._styleSheet === undefined) {
                // Note, if `supportsAdoptingStyleSheets` is true then we assume
                // CSSStyleSheet is constructable.
                if (supportsAdoptingStyleSheets) {
                    this._styleSheet = new CSSStyleSheet();
                    this._styleSheet.replaceSync(this.cssText);
                }
                else {
                    this._styleSheet = null;
                }
            }
            return this._styleSheet;
        }
        toString() {
            return this.cssText;
        }
    }
    /**
     * Wrap a value for interpolation in a [[`css`]] tagged template literal.
     *
     * This is unsafe because untrusted CSS text can be used to phone home
     * or exfiltrate data to an attacker controlled site. Take care to only use
     * this with trusted input.
     */
    const unsafeCSS = (value) => {
        return new CSSResult(String(value), constructionToken);
    };
    const textFromCSSResult = (value) => {
        if (value instanceof CSSResult) {
            return value.cssText;
        }
        else if (typeof value === 'number') {
            return value;
        }
        else {
            throw new Error(`Value passed to 'css' function must be a 'css' function result: ${value}. Use 'unsafeCSS' to pass non-literal values, but
            take care to ensure page security.`);
        }
    };
    /**
     * Template tag which which can be used with LitElement's [[LitElement.styles |
     * `styles`]] property to set element styles. For security reasons, only literal
     * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
     * may be used inside a template string part.
     */
    const css = (strings, ...values) => {
        const cssText = values.reduce((acc, v, idx) => acc + textFromCSSResult(v) + strings[idx + 1], strings[0]);
        return new CSSResult(cssText, constructionToken);
    };

    /**
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
<<<<<<< HEAD
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const ne={};class oe extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,a)=>e.reduceRight((e,a)=>Array.isArray(a)?t(a,e):(e.add(a),e),a),a=t(e,new Set),i=[];a.forEach(e=>i.unshift(e)),this._styles=i}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!te){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new ie(String(t),ae)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?te?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==ne&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return ne}}oe.finalized=!0,oe.render=(e,t,a)=>{if(!a||"object"!=typeof a||!a.scopeName)throw new Error("The `scopeName` option is required.");const s=a.scopeName,n=q.has(t),o=V&&11===t.nodeType&&!!t.host,r=o&&!F.has(s),d=r?document.createDocumentFragment():t;if(((e,t,a)=>{let s=q.get(t);void 0===s&&(i(t,t.firstChild),q.set(t,s=new O(Object.assign({templateFactory:z},a))),s.appendInto(t)),s.setValue(e),s.commit()})(e,d,Object.assign({templateFactory:I(s)},a)),r){const e=q.get(d);q.delete(d);const a=e.value instanceof b?e.value.template:void 0;H(s,d,a),i(t,t.firstChild),t.appendChild(d),q.set(t,e)}!n&&o&&window.ShadyCSS.styleElement(t.host)};var re=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,de="[^\\s]+",le=/\[([^]*?)\]/gm;function ce(e,t){for(var a=[],i=0,s=e.length;i<s;i++)a.push(e[i].substr(0,t));return a}var he=function(e){return function(t,a){var i=a[e].map((function(e){return e.toLowerCase()})).indexOf(t.toLowerCase());return i>-1?i:null}};function ue(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];for(var i=0,s=t;i<s.length;i++){var n=s[i];for(var o in n)e[o]=n[o]}return e}var me=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],pe=["January","February","March","April","May","June","July","August","September","October","November","December"],ge=ce(pe,3),ve={dayNamesShort:ce(me,3),dayNames:me,monthNamesShort:ge,monthNames:pe,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10?1:0)*e%10]}},_e=ue({},ve),fe=function(e,t){for(void 0===t&&(t=2),e=String(e);e.length<t;)e="0"+e;return e},be={D:function(e){return String(e.getDate())},DD:function(e){return fe(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return String(e.getDay())},dd:function(e){return fe(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return String(e.getMonth()+1)},MM:function(e){return fe(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return fe(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return fe(e.getFullYear(),4)},h:function(e){return String(e.getHours()%12||12)},hh:function(e){return fe(e.getHours()%12||12)},H:function(e){return String(e.getHours())},HH:function(e){return fe(e.getHours())},m:function(e){return String(e.getMinutes())},mm:function(e){return fe(e.getMinutes())},s:function(e){return String(e.getSeconds())},ss:function(e){return fe(e.getSeconds())},S:function(e){return String(Math.round(e.getMilliseconds()/100))},SS:function(e){return fe(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return fe(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)},Z:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+fe(Math.floor(Math.abs(t)/60),2)+":"+fe(Math.abs(t)%60,2)}},we=function(e){return+e-1},ye=[null,"[1-9]\\d?"],$e=[null,de],ke=["isPm",de,function(e,t){var a=e.toLowerCase();return a===t.amPm[0]?0:a===t.amPm[1]?1:null}],Ae=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(e){var t=(e+"").match(/([+-]|\d\d)/gi);if(t){var a=60*+t[1]+parseInt(t[2],10);return"+"===t[0]?a:-a}return 0}],xe=(he("monthNamesShort"),he("monthNames"),{default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"});var Se=function(e,t,a){if(void 0===t&&(t=xe.default),void 0===a&&(a={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var i=[];t=(t=xe[t]||t).replace(le,(function(e,t){return i.push(t),"@@@"}));var s=ue(ue({},_e),a);return(t=t.replace(re,(function(t){return be[t](e,s)}))).replace(/@@@/g,(function(){return i.shift()}))};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();function Oe(e){return e.substr(0,e.indexOf("."))}function je(e){return e.substr(e.indexOf(".")+1)}var Ce="hass:bookmark",Te=function(e,t,a,i){i=i||{},a=null==a?{}:a;var s=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return s.detail=a,e.dispatchEvent(s),s},Me={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function Ee(e,t){if(e in Me)return Me[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return"hass:bell-plus";case"armed_night":return"hass:bell-sleep";case"disarmed":return"hass:bell-outline";case"triggered":return"hass:bell-ring";default:return"hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return"closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return"hass:emoticon-dead";case"sleeping":return"hass:sleep";case"initializing":return"hass:timer-sand";default:return"hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),Ce}}var De=function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),Te(window,"location-changed",{replace:a})},ze={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},Ne={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return Ee("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in ze)return ze[t];if("battery"===t){var a=Number(e.state);if(isNaN(a))return"hass:battery-unknown";var i=10*Math.round(a/10);return i>=100?"hass:battery":i<=0?"hass:battery-alert":"hass:battery-"+i}var s=e.attributes.unit_of_measurement;return"°C"===s||"°F"===s?"hass:thermometer":Ee("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?Ee("input_datetime"):"hass:calendar":"hass:clock"}};const qe=async()=>{if(customElements.get("ha-checkbox")&&customElements.get("ha-slider"))return;await customElements.whenDefined("partial-panel-resolver");const e=document.createElement("partial-panel-resolver");e.hass={panels:[{url_path:"tmp",component_name:"config"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-panel-config");const t=document.createElement("ha-panel-config");await t.routerOptions.routes.automation.load(),e.hass={panels:[{url_path:"tmp",component_name:"developer-tools"}]},e._updateRoutes(),await e.routerOptions.routes.tmp.load(),await customElements.whenDefined("ha-app-layout")},Pe=se`
  ha-card {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.warning {
    color: var(--error-color);
    margin-top: 20px;
  }

  div.checkbox-row {
    min-height: 40px;
    display: flex;
    align-items: center;
  }

  div.checkbox-row ha-switch {
    margin-right: 20px;
  }

  div.checkbox-row.right ha-switch {
    margin-left: 20px;
    position: absolute;
    right: 0px;
  }

  mwc-button.active {
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
    border-radius: 4px;
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  mwc-button.success {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.disabled.active {
    opacity: 0.5;
  }

  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0px;
  }
  div.entity-row .info {
    margin-left: 16px;
    flex: 1 0 60px;
  }
  div.entity-row .info,
  div.entity-row .info > * {
    color: var(--primary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row .secondary {
    display: block;
    color: var(--secondary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row state-badge {
    flex: 0 0 40px;
  }

  ha-dialog div.wrapper {
    margin-bottom: -20px;
  }

  paper-textarea {
    width: 100%;
  }

  a,
  a:visited {
    color: var(--primary-color);
  }
  mwc-button ha-icon {
    padding-right: 11px;
  }
  mwc-button[trailingIcon] ha-icon {
    padding: 0px 0px 0px 6px;
  }
  mwc-button.vertical {
    height: 60px;
    --mdc-button-height: 60px;
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
  }
  mwc-button.vertical div {
    display: flex;
    flex-direction: column;
  }
  mwc-button.vertical span {
    display: flex;
  }
  mwc-button.vertical ha-icon {
    display: flex;
    margin-left: 50%;
  }
  mwc-tab ha-icon {
    --mdc-icon-size: 20px;
  }
  mwc-tab.disabled {
    --mdc-theme-primary: var(--disabled-text-color);
    --mdc-tab-color-default: var(--disabled-text-color);
    --mdc-tab-text-label-color-default: var(--disabled-text-color);
  }

  ha-card settings-row:first-child,
  ha-card settings-row:first-of-type {
    border-top: 0px;
  }

  ha-card > ha-card {
    margin: 10px;
  }

  div.table-filter {
    display: flex;
    width: 100%;
    min-height: 52px;
    border-top: 1px solid var(--divider-color);
    box-sizing: border-box;
    padding: 2px 8px;
    flex-direction: row;
    align-items: center;
  }
  div.table-filter .header {
    display: flex;
    white-space: nowrap;
    padding: 8px 8px;
  }
  div.table-filter[narrow] {
    flex-direction: column;
    align-items: flex-start;
  }
`;var Re={modes_long:{armed_away:"Armed Away",armed_home:"Armed Home",armed_night:"Armed Night",armed_custom_bypass:"Armed Custom"},modes_short:{armed_away:"Away",armed_home:"Home",armed_night:"Night",armed_custom_bypass:"Custom"}},Le={time_slider:{seconds:"sec",minutes:"min",infinite:"infinite",none:"none"},editor:{ui_mode:"Switch to UI",yaml_mode:"Switch to YAML"}},Ve={general:{title:"General",cards:{general:{description:"This panel defines some global settings for the alarm.",fields:{disarm_after_trigger:{heading:"Disarm after trigger",description:"After trigger time has expired, disarm the alarm instead of returning to armed state."},enable_mqtt:{heading:"Enable MQTT",description:"Allow the alarm panel to be controlled through MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"MQTT Configuration",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",fields:{mode:{armed_away:"Armed away will be used when all people left the house. All doors and windows allowing access to the house will be guarded, as well as motion sensors inside the house.",armed_home:"Armed home (also known as armed stay) will be used when setting the alarm while people are in the house. All doors and windows allowing access to the house will be guarded, but not motion sensors inside the house.",armed_night:"Armed night will be used when setting the alarm before going to sleep. All doors and windows allowing access to the house will be guarded, and selected motion sensors (downstairs) in the house.",armed_custom_bypass:"An extra mode for defining your own security perimeter.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Exit delay",description:"When arming the alarm, within this time period the sensors will not trigger the alarm yet."},entry_delay:{heading:"Entry delay",description:"Delay time until the alarm is triggered after one of the sensors is activated."},trigger_time:{heading:"Trigger time",description:"Time during which the siren will sound"}}},mqtt:{title:"MQTT configuration",description:"This panel can be used for configuration of the MQTT interface.",fields:{state_topic:{heading:"State topic",description:"Topic on which state updates are published"},event_topic:{heading:"Event topic",description:"Topic on which alarm events are published"},command_topic:{heading:"Command topic",description:"Topic on which arm/disarm commands are sent."},require_code:{heading:"Require code",description:"Require the code to be sent with the command."},state_payload:{heading:"Configure payload per state",item:"Define a payload for state '{state}'"},command_payload:{heading:"Configure payload per command",item:"Define a payload for command '{command}'"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automations"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area '{area}'",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensors",cards:{sensors:{description:"Currently configured sensors. Click on an entity to make changes.",no_items:"There are no sensors to be displayed here.",table:{arm_modes:"Arm Modes",always_on:"(Always)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Add Sensors",description:"Add more sensors. Make sure that your sensors have a friendly_name, so you can identify them.",no_items:"There are no available HA entities that can be configured for the alarm. Make sure to include entities of the type binary_sensor.",actions:{add_to_alarm:"add to alarm",show_all:"Show all"}},editor:{title:"Edit Sensor",description:"Configuring the sensor settings of '{entity}'.",fields:{name:{heading:"Name",description:"Overwrite friendly name."},area:{heading:"Area",description:"Select an area which contains this sensor."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Always on",description:"Sensor should always trigger the alarm."},modes:{heading:"Enabled modes",description:"Alarm modes in which this sensor is active."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},immediate:{heading:"Immediate",description:"Activating this sensor will trigger the alarm directly instead of after entry delay."},allow_open:{heading:"Allow open while arming",description:"Allow this sensor to be active shortly after leaving such that it will not block arming."},trigger_unavailable:{heading:"Trigger when unavailable",description:"When the sensor state becomes 'unavailable', this will activate the sensor."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active"}}}},codes:{title:"Codes",cards:{codes:{description:"Change settings for the code.",fields:{code_arm_required:{heading:"Use arm code",description:"Require a code for arming the alarm"},code_disarm_required:{heading:"Use disarm code",description:"Require a code for disarming the alarm"},code_format:{heading:"Code format",description:"Sets the input type for Lovelace alarm card.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"User management",description:"Each user has its own code to arm/disarm the alarm.",no_items:"There are no users yet",table:{remarks:"Remarks",administrator:"Administrator"},actions:{new_user:"new user"}},new_user:{title:"Create new user",description:"Users can be created for providing access to operating the alarm.",fields:{name:{heading:"Name",description:"Name of the user."},code:{heading:"Code",description:"Code for this user."},confirm_code:{heading:"Confirm code",description:"Repeat the code."},is_admin:{heading:"User is administrator",description:"Allow user to make changes"},can_arm:{heading:"Allow code for arming",description:"Entering this code activates the alarm"},can_disarm:{heading:"Allow code for disarming",description:"Entering this code deactivates the alarm"},is_override_code:{heading:"Is override code",description:"Entering this code will arm the alarm in force"}},errors:{no_name:"No name provided.",no_code:"Code should have 4 characters/numbers minimum.",code_mismatch:"The codes don't match."}},edit_user:{title:"Edit User",description:"Change configuration for user '{name}'.",fields:{old_code:{heading:"Current code",description:"Current code, leave empty to leave unchanged."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"Using this panel, you can manage notifications to be sent when during a certain alarm event.",table:{enabled:"Enabled",no_items:"There are no notifications created yet."},actions:{new_notification:"new notification"},filter:{label:"Filter by area",no_area:"Alarm master"}},actions:{description:"This panel can be used to switch a device when the alarm state changes.",table:{no_items:"There are no actions created yet."},actions:{new_action:"new action"}},new_notification:{title:"Create notification",description:"Create a new notification.",fields:{name:{heading:"Name",description:"Description for this notification"},event:{heading:"Event",description:"When should the notification be sent",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},title:{heading:"Title",description:"Title for the notification message"},message:{heading:"Message",description:"Content of the notification message"},target:{heading:"Target",description:"Device to send the push message to"}},actions:{test:"Try it"}},new_action:{title:"Create action",description:"This panel can be used to switch a device when the alarm state changes.",fields:{name:{heading:"Name",description:"Description for this action"},event:{heading:"Event",description:"When should the action be executed"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Mode",description:"Limit the action to specific arm modes (optional)"},entity:{heading:"Entity",description:"Entity to perform action on"},action:{heading:"Action",description:"Action to perform on the entity",turn_on:"Turn on",turn_off:"Turn off"}}}},validation_errors:{no_triggers:"No state or event provided for the triggering of this automation.",empty_trigger:"One of the triggers has no state or event provided.",invalid_trigger:"One of the triggers has an invalid value: {trigger}",invalid_mode:"Invalid input provided for 'mode': {mode}",no_actions:"No actions are provided to be performed by this automation.",no_service:"One of the actions is missing a service.",invalid_service:"An invalid service name was provided for one of the actions: {service}",no_service_data:"No service data was provided for one of the actions.",no_entity_in_service_data:"No entity_id was provided in the service_data of one of the actions.",no_message_in_service_data:"No message was provided in the service_data of one of the actions."}}},Ie={common:Re,components:Le,title:"Alarm panel",panels:Ve},Ue={modes_long:{armed_away:"Valvestatud eemal",armed_home:"Valvestatud kodus",armed_night:"Valvestatud ööseks",armed_custom_bypass:"Valikuline valvestus"},modes_short:{armed_away:"Eemal",armed_home:"Kodus",armed_night:"Ööseks",armed_custom_bypass:"Valikuline"}},Fe={time_slider:{seconds:"sek",minutes:"min",infinite:"piiranguta",none:"puudub"},editor:{ui_mode:"Kasutajaliides",yaml_mode:"Koodiredaktor"}},He={general:{title:"Üldsätted",cards:{general:{description:"Need seaded kehtivad kõikides valve olekutes.",fields:{disarm_after_trigger:{heading:"Häire summutamine",description:"Peale häire lõppu võta valvest maha miite ära valvesta uuesti."},enable_mqtt:{heading:"Luba MQTT juhtimine",description:"Luba nupustiku juhtimist MQTT abil."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"MQTT seadistamine",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",fields:{mode:{armed_away:"Täielik valvestamine kui kedagi pole kodus. Kasutusel on kõik andurid.",armed_home:"Valvestatud kodus ei kasuta liikumisandureid kuid väisuksed ja aknad on valve all.",armed_night:"Valvestatud ööseks ei kasuta määratud liikumisandureid, välisperimeeter on valve all.",armed_custom_bypass:"Valikulise valvestuse puhul saab määrata kasutatavad andurid.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Ooteaeg valvestamisel",description:"Viivitus enne valvestamise rakendumist."},entry_delay:{heading:"Sisenemise viivitus",description:"Viivitus sisenemisel enne häire rakendumist."},trigger_time:{heading:"Häire kestus",description:"Sireeni jne. aktiveerimise kestus."}}},mqtt:{title:"MQTT sätted",description:"MQTT parameetrite seadistamine.",fields:{state_topic:{heading:"Oleku teema (topic)",description:"Teema milles avaldatakse oleku muutused."},command_topic:{heading:"Käskude teema (topic)",description:"Teema milles avaldatakse valvestamise käsud."},require_code:{heading:"Nõua PIN koodi",description:"Käskude edastamiseks on vajalik PIN kood."},state_payload:{heading:"Määra olekute toimeandmed",item:"Määra oleku '{state}' toimeandmed"},command_payload:{heading:"Määra käskude toimeandmed",item:"Määra käsu '{command}' toimeandmed"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automations"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area '{area}'",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Andurid",cards:{sensors:{description:"Kasutusel olevad andurid. Klõpsa olemil, et seadistada.",no_items:"Andureid pole lisatud. Alustuseks lisa mõni andur.",table:{arm_modes:"Valvestamise olek",always_on:"(alati)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Andurite lisamine",description:"Lisa veel andureid. Mõistlik on panna neile arusaadav nimi (friendly_name).",no_items:"Puuduvad valvestamiseks sobivad Home Assistanti olemid. Lisatavad olemid peavad olema olekuandurid (binary_sensor).",actions:{add_to_alarm:"Lisa valvesüsteemile",show_all:"Kuva kõik andurid"}},editor:{title:"Andurite sätted",description:"Muuda olemi '{entity}' sätteid.",fields:{name:{heading:"Nimi",description:"Muuda kuvatavat nime."},area:{heading:"Area",description:"Select an area which contains this sensor."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Alati kasutusel",description:"Andur käivitab häire igas valve olekus."},modes:{heading:"Valve olekute valik",description:"Valve olekud kus seda andurit kasutatakse."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},immediate:{heading:"Viivituseta",description:"Andur annab häire ilma viiteta."},allow_open:{heading:"Lahkumisviivitus",description:"See andur ei aktiveeru enne lahkumisviivituse lõppu."},trigger_unavailable:{heading:"Andurite saadavus",description:"Käivita häire kui andur muutub kättesaamatuks."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active"}}}},codes:{title:"Koodid",cards:{codes:{description:"Valvestuskoodide muutmine.",fields:{code_arm_required:{heading:"Valvestamine koodiga",description:"Valvestamiseks tuleb sisestada kood"},code_disarm_required:{heading:"Valvest vabastamise kood",description:"Valvest vabastamiseks tulem sisestada kood"},code_format:{heading:"Koodi vorming",description:"Kasutajaliidese koodi tüübid.",code_format_number:"PIN kood",code_format_text:"Salasõna"}}},user_management:{title:"Kasutajate haldus",description:"Igal kasutajal on oma juhtkood.",no_items:"Kasutajaid pole määratud",table:{remarks:"Märkused",administrator:"Haldaja"},actions:{new_user:"Uus kasutaja"}},new_user:{title:"Lisa uus kasutaja",description:"Valvesüsteemi kasutaja lisamine.",fields:{name:{heading:"Nimi",description:"Kasutaja nimi."},code:{heading:"Valvestuskood",description:"Selle kasutaja kood."},confirm_code:{heading:"Koodi kinnitamine",description:"Sisesta sama kood uuesti."},is_admin:{heading:"Kasutajal on haldusõigused",description:"Kasutaja saab teha muudatusi."},can_arm:{heading:"Tohib valvestada",description:"Koodi sisestamine valvestab."},can_disarm:{heading:"Tohib valvest maha võtta",description:"Koodi sisestamine võtab valvest maha."},is_override_code:{heading:"Alistuskood",description:"Koodi sisestamine käivitab kohese häire"}},errors:{no_name:"Nimi puudub.",no_code:"Kood peab olema vhemalt 4 tärki.",code_mismatch:"Sisestatud koodid ei klapi."}},edit_user:{title:"Muuda kasutaja sätteid",description:"Muuda kasutaja '{name}' sätteid.",fields:{old_code:{heading:"Kehtiv kood",description:"Kehtiv kood, jäta tühjaks kui ei taha muuta."}}}}},actions:{title:"Toimingud",cards:{notifications:{title:"Teavitused",description:"Halda saadetavaid teavitusi",table:{enabled:"Lubatud",no_items:"Teavitusi pole veel loodud."},actions:{new_notification:"Uus teavitus"},filter:{label:"Filter by area",no_area:"Alarm master"}},actions:{description:"Arenduses, mõeldud seadmete lülitamiseks.",table:{no_items:"Toiminguid pole veel määratud."},actions:{new_action:"Uus toiming"}},new_notification:{title:"Loo teavitus",description:"Uue teavituse loomine.",fields:{name:{heading:"Nimi",description:"Teavituse kirjeldus"},event:{heading:"Sündmus",description:"Mille puhul teavitada",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Olek",description:"Millises valve olekus teavitada (valikuline)"},title:{heading:"Päis",description:"Teavitussõnumi päis"},message:{heading:"Sisu",description:"Teavitussõnumi tekst"},target:{heading:"Saaja",description:"Seade millele edastada teavitus"}},actions:{test:"Try it"}},new_action:{title:"Loo toiming",description:"Seadme oleku muutmine valve oleku muutmisel.",fields:{name:{heading:"Nimi",description:"Toimingu kirjeldus"},event:{heading:"Sündmus",description:"Millisel juhul käivitada toiming"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Olek",description:"Millises valve olekus toiming käivitada (valikuline)"},entity:{heading:"Olem",description:"Toimingu olem"},action:{heading:"Toiming",description:"Olemi toiming",turn_on:"Lülita sisse",turn_off:"Lülita välja"}}}},validation_errors:{no_triggers:"Selle tegevuse käivitamiseks puudub vajalik olek või sündmus.",empty_trigger:"Ühel päästikul puudub oleku või sündmuse tingimus.",invalid_trigger:"Ühel päästikul: {trigger} on vigane väärtus",invalid_mode:"Valve olekule: {mode} on sisestatud vigane väärtus",no_actions:"Sellele toimingule pole määratud tegevust.",no_service:"Ühel toimingutest puudub nõutav teenus.",invalid_service:"Ühele toimingule on omistatud sobimatu teenus: {service}",no_service_data:"Ühel toimingul puuduvad teenuse andmed.",no_entity_in_service_data:"Ühel toimingul puudub teenuse andmetes olemi ID.",no_message_in_service_data:"Ühe toimingu teenuse andmetes puuduvad teenuse andmed."}}},Ye={common:Ue,components:Fe,title:"Alarm panel",panels:He},Be={modes_long:{armed_away:"Ingeschakeld Weg",armed_home:"Ingeschakeld Thuis",armed_night:"Ingeschakeld Nacht",armed_custom_bypass:"Ingeschakeld Aangepast"},modes_short:{armed_away:"Weg",armed_home:"Thuis",armed_night:"Nacht",armed_custom_bypass:"Aangepast"}},We={time_slider:{seconds:"sec",minutes:"min",infinite:"oneindig",none:"geen"},editor:{ui_mode:"Wissel naar UI",yaml_mode:"Wissel naar YAML"}},Ge={general:{title:"Algemeen",cards:{general:{description:"Dit paneel definieert enkele instellingen die van toepassing zijn op alle inschakelmodi.",fields:{disarm_after_trigger:{heading:"Uitschakelen na activatie",description:"Nadat de triggertijd is verstreken, schakelt u het alarm uit in plaats van terug te keren naar de ingeschakelde toestand."},enable_mqtt:{heading:"MQTT inschakelen",description:"Allow the alarm panel to be controlled through MQTT."},enable_master:{heading:"Master alarm inschakelen",description:"Creëert een entiteit om alle gebieden tegelijkertijd te besturen."}},actions:{setup_mqtt:"MQTT Configuratie",setup_master:"Master configuratie"}},modes:{title:"Modi",description:"Dit paneel kan worden gebruikt om de inschakelmodi van het alarm in te stellen.",fields:{mode:{armed_away:"Ingeschakeld weg wordt gebruikt als alle mensen het huis hebben verlaten. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, evenals bewegingssensoren in het huis.",armed_home:"Ingeschakeld thuis (ook wel ingeschakeld thuisblijven genoemd) wordt gebruikt bij het instellen van het alarm terwijl er mensen in huis zijn. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, maar bewegingssensoren in het huis worden niet gebruikt.",armed_night:"Ingeschakeld nacht wordt gebruikt bij het instellen van het alarm voordat u gaat slapen. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, en geselecteerde bewegingssensoren (beneden) in het huis.",armed_custom_bypass:"Een extra modus om uw eigen beveiligingsperimeter te definiëren.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Vertrek vertraging",description:"Bij het inschakelen van het alarm zullen de sensoren binnen deze tijdsperiode het alarm nog niet activeren."},entry_delay:{heading:"Binnenkomst vertraging",description:"Vertragingstijd totdat het alarm afgaat nadat een van de sensoren is geactiveerd."},trigger_time:{heading:"Activeer tijd",description:"Tijd waarin de sirene af gaat."}}},mqtt:{title:"MQTT configuratie",description:"Dit paneel kan worden gebruikt voor configuratie van de MQTT-interface.",fields:{state_topic:{heading:"Toestand topic",description:"Topic waarop statusupdates worden gepubliceerd"},command_topic:{heading:"Commando topic",description:"Topic waarop commando's voor in- / uitschakelen worden verzonden."},require_code:{heading:"Vereis code",description:"Vereis dat de code wordt verzonden met de opdracht."},state_payload:{heading:"Configureer de payload per toestand",item:"Definieer een payload voor toestand '{state}'"},command_payload:{heading:"Configureer een payload per commando",item:"Definieer een payload voor commando '{command}'"}}},areas:{title:"Gebieden",description:"Gebieden kunnen worden gebruikt om uw alarmsysteem in meerdere compartimenten op te delen.",no_items:"Er zijn nog geen gebieden gedefinieerd.",table:{remarks:"Opmerkingen",summary:"Dit gebied bevat {summary_sensors} en {summary_automations}.",summary_sensors:"{number} sensoren",summary_automations:"{number} automatiseringen"},actions:{add:"Toevoegen"}}},dialogs:{create_area:{title:"Nieuw gebied",fields:{copy_from:"Kopieer instellingen van"}},edit_area:{title:"Bewerken van gebied '{area}'",name_warning:"Opmerking: als u de naam wijzigt, wordt de entiteits-ID gewijzigd"},remove_area:{title:"Gebied verwijderen?",description:"Weet u zeker dat u dit gebied wilt verwijderen? Dit gebied bevat {sensors} sensoren en {automations} automatiseringen, die ook zullen worden verwijderd."},edit_master:{title:"Master configuratie"},disable_master:{title:"Master uitschakelen?",description:"Weet u zeker dat u het master alarm wilt verwijderen? Dit gebied bevat {automations} automatiseringen, die met deze actie worden verwijderd."}}},sensors:{title:"Sensoren",cards:{sensors:{description:"Momenteel geconfigureerde sensoren. Klik op een entiteit om wijzigingen aan te brengen.",no_items:"Er zijn nog geen sensoren aan het alarm toegevoegd. Zorg ervoor dat u ze eerst toevoegt.",table:{arm_modes:"Inschakelmodi",always_on:"(Altijd)"},filter:{label:"Filter op gebied",no_area:"(Geen gebied)"}},add_sensors:{title:"Voeg sensoren toe",description:"Voeg meer sensoren toe. Zorg ervoor dat uw sensoren een friendly_name hebben, zodat u ze kunt identificeren.",no_items:"Er zijn geen beschikbare HA-entiteiten die voor het alarm kunnen worden geconfigureerd. Zorg ervoor dat u entiteiten van het type binary_sensor opneemt.",actions:{add_to_alarm:"Voeg aan alarm toe",show_all:"Toon alle"}},editor:{title:"Wijzig Sensor",description:"Configureren van de sensorinstellingen van '{entity}'.",fields:{name:{heading:"Naam",description:"Overschrijf vriendelijke naam."},area:{heading:"Gebied",description:"Selecteer een gebied dat deze sensor bevat."},device_type:{heading:"Apparaat Type",description:"Kies een apparaattype om automatisch de juiste instellingen toe te passen.",choose:{door:{name:"Deur",description:"Een deur, poort of andere ingang die wordt gebruikt voor het betreden/verlaten van de woning."},window:{name:"Raam",description:"Een raam of een deur die niet wordt gebruikt om het huis binnen te komen, zoals een balkon."},motion:{name:"Beweging",description:"Aanwezigheidssensor of soortgelijk apparaat met een vertraging tussen activeringen."},tamper:{name:"Sabotage",description:"Detector van verwijdering van sensorkap, glasbreuksensor, enz."},environmental:{name:"Omgeving",description:"Rook/gassensor, lekdetector, etc. (niet gerelateerd aan inbraakbeveiliging)."},other:{name:"Algemeen"}}},always_on:{heading:"Altijd aan",description:"Sensor should always trigger the alarm."},modes:{heading:"Ingeschakelde modi",description:"Alarmmodi waarin deze sensor actief is."},arm_on_close:{heading:"Inschakelen na sluiten",description:"Na deactivering van deze sensor wordt de resterende vertrek vertraging automatisch overgeslagen."},immediate:{heading:"Onmiddelijk",description:"Als deze sensor wordt geactiveerd, wordt het alarm direct geactiveerd in plaats van na de binnenkomst vertraging."},allow_open:{heading:"Sta open toe tijdens het inschakelen",description:"Sta toe dat deze sensor kort na het verlaten actief is, zodat hij het inschakelen niet blokkeert."},trigger_unavailable:{heading:"Activeren indien niet beschikbaar",description:"Wanneer de sensorstatus 'niet beschikbaar' wordt, wordt de sensor geactiveerd."}},actions:{toggle_advanced:"Geavanceerde instellingen",remove:"Verwijder"},errors:{description:"Corrigeer de volgende fouten:",no_area:"Er is geen gebied geselecteerd",no_modes:"Er zijn geen modi geselecteerd waarvoor de sensor actief zou moeten zijn"}}}},codes:{title:"Codes",cards:{codes:{description:"Wijzig de instellingen voor de code.",fields:{code_arm_required:{heading:"Gebruik inschakel code",description:"Vereist een code voor het inschakelen van het alarm"},code_disarm_required:{heading:"Gebruik uitschakelcode",description:"Vereist een code om het alarm uit te schakelen"},code_format:{heading:"Code opmaak",description:"Stelt het invoertype in voor de Lovelace alarmkaart.",code_format_number:"pincode",code_format_text:"wachtwoord"}}},user_management:{title:"Gebruikersbeheer",description:"Elke gebruiker heeft zijn eigen code om het alarm in/uit te schakelen.",no_items:"Er zijn nog geen gebruikers",table:{remarks:"Opmerkingen",administrator:"Beheerder"},actions:{new_user:"nieuwe gebruiker"}},new_user:{title:"Maak een nieuwe gebruiker aan",description:"Gebruikers kunnen worden aangemaakt om toegang te verlenen tot het bedienen van het alarm.",fields:{name:{heading:"Naam",description:"Naam van de gebruiker."},code:{heading:"Code",description:"Code voor deze gebruiker."},confirm_code:{heading:"Bevestig de code",description:"Herhaal de code."},is_admin:{heading:"Gebruiker is beheerder",description:"Sta de gebruiker toe om wijzigingen aan te brengen"},can_arm:{heading:"Code toestaan voor inschakeling",description:"Door deze code in te voeren, wordt het alarm geactiveerd"},can_disarm:{heading:"Code toestaan voor uitschakelen",description:"Door deze code in te voeren, wordt het alarm gedeactiveerd"},is_override_code:{heading:"Is een forceer code",description:"Als u deze code invoert, wordt het alarm geforceerd geactiveerd"}},errors:{no_name:"Geen naam opgegeven.",no_code:"Code moet minimaal 4 tekens/cijfers bevatten.",code_mismatch:"De codes komen niet overeen."}},edit_user:{title:"Wijzig Gebruiker",description:"Wijzig de configuratie voor gebruiker '{name}'.",fields:{old_code:{heading:"Huidige code",description:"Huidige code, laat leeg om ongewijzigd te laten."}}}}},actions:{title:"Acties",cards:{notifications:{title:"Meldingen",description:"Met dit paneel kunt u meldingen beheren die moeten worden verzonden tijdens een bepaalde alarmgebeurtenis",table:{enabled:"Ingeschakeld",no_items:"Er zijn nog geen notificaties aangemaakt."},actions:{new_notification:"nieuwe melding"},filter:{label:"Filter op gebied",no_area:"Alarm master"}},actions:{description:"Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de status van het alarm veranderd.",table:{no_items:"Er zijn nog geen acties gemaakt."},actions:{new_action:"nieuwe actie"}},new_notification:{title:"Maak een melding",description:"Maak een nieuwe melding.",fields:{name:{heading:"Naam",description:"Beschrijving voor deze melding"},event:{heading:"Gebeurtenis",description:"Wanneer moet de melding worden verzonden",choose:{armed:{name:"Alarm is is ingeschakeld",description:"Het alarm is succesvol ingeschakeld"},disarmed:{name:"Alarm is uitgeschakeld",description:"Het alarm is uitgeschakeld"},triggered:{name:"Alarm is afgegaan",description:"Het alarm gaat af"},arm_failure:{name:"Kan niet inschakelen",description:"Het inschakelen van het alarm is mislukt vanwege een of meerdere blokkerende sensoren"},arming:{name:"Vertrek",description:"Vertrekvertraging ingegaan, tijd om het huis te verlaten."},pending:{name:"Binnenkomst",description:"Binnenkomstvertraging ingegaan, het alarm dient te worden uitgeschakeld."}}},mode:{heading:"Mode",description:"Beperk de actie tot specifieke inschakel modi (optioneel)"},title:{heading:"Titel",description:"Titel voor het meldingsbericht"},message:{heading:"Bericht",description:"Inhoud van het meldingsbericht"},target:{heading:"Doel",description:"Apparaat om het push-bericht naar te sturen"}},actions:{test:"Uitproberen"}},new_action:{title:"Maak een actie",description:"Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de alarmstatus verandert.",fields:{name:{heading:"Naam",description:"Beschrijving voor deze actie"},event:{heading:"Gebeurtenis",description:"Wanneer moet de actie worden uitgevoerd"},area:{heading:"Gebied",description:"Het gebied waarop de gebeurtenis van toepassing is, laat leeg om het algemene alarm te selecteren."},mode:{heading:"Mode",description:"Beperk de actie tot specifieke inschakel modi (optioneel)"},entity:{heading:"Entiteit",description:"Entiteit om actie op uit te voeren"},action:{heading:"Actie",description:"Actie die op de entiteit moet worden uitgevoerd",turn_on:"Zet aan",turn_off:"Zet uit"}}}},validation_errors:{no_triggers:"Er is geen toestand of gebeurtenis voorzien voor het activeren van deze automatisering.",empty_trigger:"Voor een van de triggers is geen status of gebeurtenis opgegeven.",invalid_trigger:"Een van de triggers heeft een ongeldige waarde: {trigger}",invalid_mode:"Ongeldige invoer opgegeven voor 'mode': {mode}",no_actions:"Er zijn geen acties ingesteld uit te voeren door deze automatisering.",no_service:"Een van de acties mist een service.",invalid_service:"Er is een ongeldige servicenaam opgegeven voor een van de acties: {service}",no_service_data:"Voor een van de acties zijn geen servicegegevens opgegeven.",no_entity_in_service_data:"Er is geen entity_id opgegeven in de service_data van een van de acties.",no_message_in_service_data:"Er is geen bericht opgegeven in de service_data van een van de acties."}}},Qe={common:Be,components:We,title:"Alarmpaneel",panels:Ge},Ke={modes_long:{armed_away:"Activée en mode absence",armed_home:"Activée en mode présence",armed_night:"Activée en mode nuit",armed_custom_bypass:"Activée en mode personnalisé"},modes_short:{armed_away:"Absence",armed_home:"Présence",armed_night:"Nuit",armed_custom_bypass:"Personnalisé"}},Ze={time_slider:{seconds:"sec",minutes:"min",infinite:"infini",none:"Aucune"},editor:{ui_mode:"Afficher l'éditeur visuel",yaml_mode:"Afficher l'éditeur de code"}},Je={general:{title:"Généraux",cards:{general:{description:"Ce panneau définit les paramètres globaux de l'alarme.",fields:{disarm_after_trigger:{heading:"Désactivation après déclenchement",description:"Lors que le temps de fonctionnement de la sirène est écoulé, désactive l'alarme au lieu de la réactiver."},enable_mqtt:{heading:"Utilisation avec MQTT",description:"Permet au panneau d'alarme d'être contrôlé via MQTT."},enable_master:{heading:"Activation de commande centralisée",description:"Créer une entité pour piloter toutes les zone en même temps."}},actions:{setup_mqtt:"Configuration MQTT",setup_master:"Configuration pricipale"}},modes:{title:"Modes",description:"Ce panneau définit le mode de gestion pour chaque type d'activation.",fields:{mode:{armed_away:"Ce mode sera utilisé lorsque toutes les personnes auront quitté la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, les détecteurs de mouvement à l'intérieur de la maison seront opérationnels.",armed_home:"Ce mode sera utilisée lorsque des personnes sont dans la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées (périmétrie), les détecteurs de mouvement à l'intérieur de la maison seront inopérants.",armed_night:"Ce mode sera utilisée lors du réglage de l'alarme avant de s'endormir. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, et les capteurs de mouvement sélectionnés (ex : rez de chaussée) dans la maison seront opérationnels.",armed_custom_bypass:"ce mode supplémentaire permet de définir votre propre périmètre de sécurité.",enabled:"Actif",disabled:"Inactif"},exit_delay:{heading:"Délai pour sortir",description:"Lors de l'activation, pendant cette période, les capteurs ne déclencheront pas l'alarme."},entry_delay:{heading:"Délai pour entrer",description:"Temps d'attente avant que l'alarme ne se déclenche après détection d'un des capteurs."},trigger_time:{heading:"Temps de fonctionnement",description:"Temps de fonctionnement de la sirène"}}},mqtt:{title:"Configuration MQTT",description:"Ce panneau peut être utilisé pour la configuration de l'interface MQTT.",fields:{state_topic:{heading:"Etat de données",description:"Donnée sur laquelle les mises à jour d'état sont publiées"},command_topic:{heading:"Commande de donnée",description:"Donnée sur laquelle les commandes d'armement / désarmement sont envoyées."},require_code:{heading:"Code requis",description:"Exige que le code soit envoyé avec la commande."},state_payload:{heading:"Configurer une valeur par état",item:"Définir une valeur par état '{state}'"},command_payload:{heading:"Configurer une valeur par commande",item:"Définir une valeur par commande '{command}'"}}},areas:{title:"Zones",description:"Les zones peuvent être utilisées pour diviser votre système d'alarme en plusieurs secteurs.",no_items:"Il n'y a pas encore de zones définies.",table:{remarks:"Remarque",summary:"Cette zone contient des {summary_sensors} et {summary_automations}.",summary_sensors:"{number} capteurs",summary_automations:"{number} automations"},actions:{add:"Ajouter"}}},dialogs:{create_area:{title:"Nouvelle zone",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editer la zone '{area}'",name_warning:"Note: Changer le nom changera l'entity ID"},remove_area:{title:"Suppression de zone?",description:"Etes vous sur de vouloir supprimer cette zone? Cette zone contient {sensors} des capteurs et {automations} automatisations, qui seront également supprimés."},edit_master:{title:"Configuration principale"},disable_master:{title:"Désactiver la configuration principale?",description:"Etes vous sur de vouloir supprimer la configuration principale? Cette zone contient {automations} automatisations, qui seront également supprimées."}}},capteurs:{title:"Capteurs",cards:{sensors:{description:"Capteurs actuellement configurés. Cliquez sur une entité pour apporter des modifications.",no_items:"Il n'y a pas encore de capteur ajouté à l'alarme. Assurez-vous de les ajouter d'abord.",table:{arm_modes:"Type d'activation",always_on:"(Toujours)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Ajouter un capteur",description:"Ajoutez plus de capteurs. Assurez-vous que vos capteurs ont un nom personnalisé afin de pouvoir les identifier.",no_items:"Aucune entité HA disponible ne peut être configurée pour l'alarme. Assurez-vous d'inclure les entités de type binary_sensor.",actions:{add_to_alarm:"Ajouter à l'alarme",show_all:"Tout montrer"}},editor:{title:"Editer un capteur",description:"Configurer les paramètres du capteur '{entity}'.",fields:{name:{heading:"Nom",description:"Remplacer le nom personnalisé (friendly name)."},area:{heading:"Zone",description:"Selectionner une zone contenant ce capteur."},device_type:{heading:"Type de détection",description:"Choisissez un type de détection pour appliquer automatiquement les paramètres appropriés.",choose:{door:{name:"Porte",description:"Une porte, un portail ou une autre entrée utilisée pour entrer / sortir de la maison."},window:{name:"Fenêtre",description:"Une fenêtre, ou une porte non utilisée pour entrer dans la maison comme un balcon."},motion:{name:"Mouvement",description:"Capteur de présence ou appareil similaire présentant un délai entre les activations."},tamper:{name:"Effraction",description:"Détection d'arrachage du capteur, capteur de bris de verre, etc.."},environmental:{name:"Détecteur Environmental",description:"Détecteur de fumée / gaz, détecteur de fuite, etc. (non lié à la protection anti-effraction)."},other:{name:"Générique"}}},always_on:{heading:"Toujours en service",description:"Le capteur doit toujours déclencher l'alarme."},modes:{heading:"Mode possible",description:"Modes d'alarme dans lesquels ce capteur est actif."},arm_on_close:{heading:"Activer après fermeture",description:"Après la désactivation de ce capteur, le délai de sortie restant sera automatiquement ignoré."},immediate:{heading:"Immédiat",description:"L'activation de ce capteur déclenchera l'alarme immédiatement plutôt qu'après le délai d'entrée."},allow_open:{heading:"Autoriser l'ouverture lors de l'activation",description:"Permet à ce capteur d'être actif, peu de temps après votre départ afin qu'il ne bloque pas l'armement."},trigger_unavailable:{heading:"Déclenchement lorsqu'il n'est pas disponible",description:"Lorsque l'état du capteur devient `` indisponible '', cela activera le capteur."}},actions:{toggle_advanced:"Paramètres avancées",remove:"Supprimer"},errors:{description:"Veuillez corriger les erreurs suivantes:",no_area:"Aucune zone n'est sélectionnée",no_modes:"Aucun mode sélectionné pour lequel le capteur doit être actif"}}}},codes:{title:"Codes",cards:{codes:{description:"Gestion des paramètres des codes.",fields:{code_arm_required:{heading:"Utiliser un code pour l'activation",description:"Code requis pour l'activation de l'alarme"},code_disarm_required:{heading:"Utiliser un code pour la désactivation",description:"Code requis pour la désactivation de l'alarme"},code_format:{heading:"Format du code",description:"Définit le type d'entrée pour la carte d'alarme Lovelace.",code_format_number:"pincode",code_format_text:"password"}}},user_management:{title:"Gestion des utilisateurs",description:"Chaque utilisateur a son propre code pour activer / désactiver l'alarme.",no_items:"Il n'y a aucun utilisateur de défini",table:{remarks:"Remarque",administrator:"Administrateur"},actions:{new_user:"Nouvel utilisateur"}},new_user:{title:"Créer un nouvel utilisateur",description:"Des utilisateurs peuvent être créés pour donner accès au fonctionnement de l'alarme.",fields:{name:{heading:"Nom",description:"Nom de l'utilisateur."},code:{heading:"Code",description:"Code personnel de l'utilisateur."},confirm_code:{heading:"Confirmation du code",description:"Répèter le  code."},is_admin:{heading:"L'utilisateur est aussi administrateur",description:"Autorise l'utilisateur à effectuer des changements."},can_arm:{heading:"Demande de code pour l'activation",description:"Entrer ce code pour activer l'alarme."},can_disarm:{heading:"Demande de code pour désactivation",description:"Entrer ce code pour désactiver l'alarme."},is_override_code:{heading:"Code de sécurité",description:"La saisie de ce code forcera l'activation l'alarme."}},errors:{no_name:"Aucun nom saisi.",no_code:"Le code doit contenir 4 caractères/chiffres minimum.",code_mismatch:"Les codes sont différents."}},edit_user:{title:"Editer l'utilisateur",description:"Changer la  configuration pour l'utilisateur '{name}'.",fields:{old_code:{heading:"Code utilisé",description:"Code actuel, laissez vide pour ne rien changer."}}}}},actions:{title:"Actions",cards:{notifications:{title:"Notifications",description:"À l'aide de ce panneau, vous pouvez gérer les notifications à envoyer lors d'un évènement d'alarme",table:{enabled:"Active",no_items:"Il n'y a aucune notification de  créée."},actions:{new_notification:"Nouvelle notification"},filter:{label:"Filter by area",no_area:"Alarm master"}},actions:{description:"Ce panneau est encore en développement. Il sera utilisé pour changer d'état les appareils de votre choix.",table:{no_items:"Il n'y a aucune action de créer."},actions:{new_action:"Nouvelle action"}},new_notification:{title:"Créer une notification",description:"Créer une nouvelle notification.",fields:{name:{heading:"Nom",description:"Description de la notification"},event:{heading:"Evènement",description:"Détermine quand la notification doit être envoyée",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Mode",description:"Limite la notification à un mode spécifique (optionnel)"},title:{heading:"Titre",description:"Titre du message de la notification"},message:{heading:"Message",description:"Contenu du message de la notification"},target:{heading:"Cible",description:"Appareil recevant le message"}},actions:{test:"Try it"}},new_action:{title:"Créer une action",description:"Ce panneau peut être utilisé pour commuter un appareil lorsque l'état de l'alarme change.",fields:{name:{heading:"Nom",description:"Description de  l'action"},event:{heading:"Evènement",description:"Détermine quand l'action doit être exécutée"},area:{heading:"Zone",description:"Zone pour laquelle l'évènement s'applique, laissez vide pour sélectionner l'alarme globale."},mode:{heading:"Mode",description:"Limite l'action à un mode spécifique (optionnel)"},entity:{heading:"Entité",description:"Entité sur laquelle effectuer une action"},action:{heading:"Action",description:"Action à exécuter sur l'entité",turn_on:"Mettre à on",turn_off:"Mettre à off"}}}},validation_errors:{no_triggers:"Aucun état ou évènement prévu pour le déclenchement de cette automatisation.",empty_trigger:"L'un des déclencheurs n'a aucun état ou évènement fourni.",invalid_trigger:"L'un des déclencheurs a une valeur non valide: {trigger}",invalid_mode:"Entrée non valide fournie par  le 'mode': {mode}",no_actions:"Aucune action n'est prévue pour être effectuée par cette automatisation.",no_service:"Il manque un service dans l’une des actions.",invalid_service:"Un nom de service non valide a été fourni pour l'une des actions: {service}",no_service_data:"Aucune donnée de service n'a été fournie pour l'une des actions.",no_entity_in_service_data:"Aucun entity_id n'a été fourni dans le service_data de l'une des actions.",no_message_in_service_data:"Aucun message n'a été fourni dans le service_data de l'une des actions."}}},Xe={common:Ke,components:Ze,title:"Alarm panel",panels:Je},et={modes_long:{armed_away:"Modalità 'fuori casa' attiva",armed_home:"Modalità 'in casa' attiva",armed_night:"Modalità 'notte' attiva",armed_custom_bypass:"Modalità 'personalizzato' attiva"},modes_short:{armed_away:"Fuori casa",armed_home:"In casa",armed_night:"Notte",armed_custom_bypass:"Personalizzato"}},tt={time_slider:{seconds:"sec",minutes:"min",infinite:"infinito",none:"niente"},editor:{ui_mode:"Passa a UI",yaml_mode:"Passa a YAML"}},at={general:{title:"Generali",cards:{general:{description:"Questo pannello definisce alcune impostazioni da applicare alle modalità di allarme.",fields:{disarm_after_trigger:{heading:"Disattiva allarme dopo l'attivazione",description:"Dopo che il tempo di attivazione è scaduto, disattivare l'allarme invece di tornare allo stato inserito."},enable_mqtt:{heading:"Abilita MQTT",description:"Permetti al pannello allarme di essere controllato attraverso MQTT."},enable_master:{heading:"Enable alarm master",description:"Creates an entity for controlling all areas simultaneously."}},actions:{setup_mqtt:"Configurazione MQTT",setup_master:"Master Configuration"}},modes:{title:"Modes",description:"This panel can be used to set up the arm modes of the alarm.",fields:{mode:{armed_away:"Modalità 'fuori casa': da utilizzare quando tutte le persone lasciano la casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, così come i sensori di movimento all'interno della casa.",armed_home:"Modalità 'in casa': da utilizzare quando si attiva l'allarme mentre le persone sono in casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, ma non i sensori di movimento all'interno della casa.",armed_night:"Modalità 'notte': da utilizzare quando si imposta la sveglia prima di andare a dormire. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi e sensori di movimento selezionati (ad esempio al piano di sotto) nella casa.",armed_custom_bypass:"Modalità 'personalizzato': da utilizzare per definire una modalità di allarme specifica per le esigenze dell'utilizzatore.",enabled:"Enabled",disabled:"Disabled"},exit_delay:{heading:"Tempo di preattivazione",description:"Quando si attiva l'allarme, entro questo periodo di tempo i sensori non attiveranno ancora l'allarme."},entry_delay:{heading:"Ritardo di attivazione",description:"Tempo di ritardo fino allo scatto dell'allarme dopo l'attivazione di uno dei sensori."},trigger_time:{heading:"Tempo di attivazione",description:"Tempo durante il quale suonerà la sirena"}}},mqtt:{title:"Configurazione MQTT",description:"Questo pannello può essere usato per le impostazioni MQTT.",fields:{state_topic:{heading:"Topic di stato",description:"Topic su cui vengono pubblicati gli aggiornamenti di stato"},command_topic:{heading:"Topic di comando",description:"Topic su cui vengono inviati i comandi di inserimento / disinserimento."},require_code:{heading:"Richiedi Codice",description:"Richiedi il codice da inviare con il comando."},state_payload:{heading:"Configura payload per stato",item:"Definisci un payload per lo stato '{state}'"},command_payload:{heading:"Configura payload per comando",item:"Definisci un payload per il comando '{command}'"}}},areas:{title:"Areas",description:"Areas can be used for dividing your alarm system into multiple compartments.",no_items:"There are no areas defined yet.",table:{remarks:"Remarks",summary:"This area contains {summary_sensors} and {summary_automations}.",summary_sensors:"{number} sensors",summary_automations:"{number} automations"},actions:{add:"Add"}}},dialogs:{create_area:{title:"New area",fields:{copy_from:"Copy settings from"}},edit_area:{title:"Editing area '{area}'",name_warning:"Note: changing the name will change the entity ID"},remove_area:{title:"Remove area?",description:"Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."},edit_master:{title:"Master configuration"},disable_master:{title:"Disable master?",description:"Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."}}},sensors:{title:"Sensori",cards:{sensors:{description:"Sensori attualmente configurati. Clicca sull'entità per modificare.",no_items:"Non ci sono ancora sensori aggiunti a questo allarme. Assicurati di aggiungerli prima.",table:{arm_modes:"Modalità di attivazione",always_on:"(Sempre)"},filter:{label:"Filter by area",no_area:"(No area)"}},add_sensors:{title:"Aggiungi Sensori",description:"Aggiungi più sensori. Assicurati che i sensori abbiano un friendly_name (nome amichevole), in modo da identificarli più facilmente.",no_items:"Non ci sono entità disponibili che possono essere configurate con l'allarme. Assicurati di includere entità del tipo binary_sensor (sensore binario).",actions:{add_to_alarm:"aggiungi all'allarme",show_all:"Mostra tutti"}},editor:{title:"Modifica Sensore",description:"Configura le impostazioni del sensore '{entity}'.",fields:{name:{heading:"Nome",description:"Sovrascrivi friendly name."},area:{heading:"Area",description:"Select an area which contains this sensor."},device_type:{heading:"Device Type",description:"Choose a device type to automatically apply appropriate settings.",choose:{door:{name:"Door",description:"A door, gate or other entrance that is used for entering/leaving the home."},window:{name:"Window",description:"A window, or a door not used for entering the house such as balcony."},motion:{name:"Motion",description:"Presence sensor or similar device having a delay between activations."},tamper:{name:"Tamper",description:"Detector of sensor cover removal, glass break sensor, etc."},environmental:{name:"Environmental",description:"Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."},other:{name:"Generic"}}},always_on:{heading:"Sempre attivo",description:"Il sensore attiverà sempre l'allarme."},modes:{heading:"Modalità attive",description:"Modalità di allarme in cui il sensore risulta collegato."},arm_on_close:{heading:"Arm after closing",description:"After deactivation of this sensor, the remaining exit delay will automatically be skipped."},immediate:{heading:"Immediato",description:"Il sensore si attiva saltando il ritardo."},allow_open:{heading:"Permetti apertura",description:"Consentire a questo sensore di rimanere attivo poco dopo essere usciti."},trigger_unavailable:{heading:"Fai scattare l'allarme quando non disponibile",description:"L'allarme scatterà quando lo stato del sensore diverrà 'non disponibile'."}},actions:{toggle_advanced:"Advanced settings",remove:"Remove"},errors:{description:"Please correct the following errors:",no_area:"No area is selected",no_modes:"No modes are selected for which the sensor should be active"}}}},codes:{title:"Codici",cards:{codes:{description:"Modifica le impostazioni dei codici.",fields:{code_arm_required:{heading:"Usa codice d'attivazione",description:"Richiedi un codice per attivare l'allarme"},code_disarm_required:{heading:"Usa codice di disattivazione",description:"Richiedi un codice per disattivare l'allarme"},code_format:{heading:"Formato del codice",description:"Imposta il tipo di codice da digitare nella card di Lovelace.",code_format_number:"codice numerico",code_format_text:"password"}}},user_management:{title:"Gestione utente",description:"Ogni utente ha il suo codice per attivare/disattivare l'allarme.",no_items:"Non è stato creato nessun utente per ora",table:{remarks:"Ruolo",administrator:"Amministratore"},actions:{new_user:"nuovo utente"}},new_user:{title:"Crea nuovo utente",description:"Gli utenti potranno operare con l'allarme.",fields:{name:{heading:"Nome",description:"Nome dell'utente."},code:{heading:"Codice operativo",description:"Codice che utilizzerà quest'utente."},confirm_code:{heading:"Ripeti codice operativo",description:"Ripeti il codice operativo scelto."},is_admin:{heading:"L'utente è un amministratore",description:"Ciò consente al utente di effettuare modifiche al sistema di allarme"},can_arm:{heading:"Utilizza codice per attivare l'allarme",description:"Utilizza codice per attivare l'allarme"},can_disarm:{heading:"Utilizza codice per disattivare l'allarme",description:"Utilizza codice per disattivare l'allarme"},is_override_code:{heading:"E' un codice di forzatura",description:"Inserendo questo codice forzerai lo stato di attivazione dell'allarme"}},errors:{no_name:"Non hai inserito il nome.",no_code:"Il codice deve avere almeno 4 numeri o caratteri.",code_mismatch:"Il codice scelto non combacia, verifica il codice inserito."}},edit_user:{title:"Modifica Utente",description:"Cambia impostazioni per l'utente '{name}'.",fields:{old_code:{heading:"Modifica Codice",description:"Codice attuale, lascia vuoto per non modificare."}}}}},actions:{title:"Azioni",cards:{notifications:{title:"Notifiche",description:"Con questo pannello puoi gestire le notifiche da inviare quanto accade un determinato evento",table:{enabled:"Abilitato",no_items:"Non è stata creata nessuna notifica per ora."},actions:{new_notification:"nuova notifica"},filter:{label:"Filter by area",no_area:"Alarm master"}},actions:{description:"Questo pannello è in fase di sviluppo. Sarà usato per cambiare lo stato di una o più entità.",table:{no_items:"Non è stata creata nessuna azione per ora."},actions:{new_action:"nuova azione"}},new_notification:{title:"Crea notifica",description:"Crea una nuova notifica.",fields:{name:{heading:"Nome",description:"Descrizione della notifica"},event:{heading:"Evento",description:"Quando questa notifica deve essere inviata",choose:{armed:{name:"Alarm is armed",description:"The alarm is succesfully armed"},disarmed:{name:"Alarm is disarmed",description:"The alarm is disarmed"},triggered:{name:"Alarm is triggered",description:"The alarm is triggered"},arm_failure:{name:"Failed to arm",description:"The arming of the alarm failed due to one or more open sensors"},arming:{name:"Exit delay started",description:"Exit delay started, ready to leave the house."},pending:{name:"Entry delay started",description:"Entry delay started, the alarm will trigger soon."}}},mode:{heading:"Modalità",description:"Limita ad una specifica modalità di allarme (opzionale)"},title:{heading:"Titolo",description:"Titolo per il messaggio di notifica"},message:{heading:"Messaggio",description:"Contenuto del messaggio di notifica"},target:{heading:"Destinatario",description:"Dispositivo a cui inviare il messaggio di notifica"}},actions:{test:"Try it"}},new_action:{title:"Crea azione",description:"Questo pannello può essere usato per cambiare lo stato di un entità quando lo stato dell'allarme cambia.",fields:{name:{heading:"Nome",description:"Descrizione dell'azione"},event:{heading:"Evento",description:"Quando questa azione deve essere eseguita"},area:{heading:"Area",description:"Area for which the event applies, leave empty to select the global alarm."},mode:{heading:"Modalità",description:"Limita ad una specifica modalità di allarme (opzionale)"},entity:{heading:"Entità",description:"Entità su cui eseguire l'azione"},action:{heading:"Azione",description:"Azione che deve eseguire l'entità",turn_on:"Accendi",turn_off:"Spegni"}}}},validation_errors:{no_triggers:"Nessuno evento o modalità scelto per l'attivazione di questa azione.",empty_trigger:"Evento o modalità mancante per questa azione.",invalid_trigger:"Uno degli eventi selezionati ha un valore non valido: {trigger}",invalid_mode:"Input selezionato non valido per la modalità: {mode}",no_actions:"Nessuna azione è stata scelta per questa azione.",no_service:"Una di queste azioni ha un servizio mancante.",invalid_service:"Il nome del servizio non è valido per una delle azioni: {service}",no_service_data:"Dati del servizio non inseriti per una delle azioni.",no_entity_in_service_data:"Nessun entity_id è stata inserita in service_data di una delle azioni.",no_message_in_service_data:"Nessun messaggio è stato inserito nel service_data di una delle azioni."}}},it={common:et,components:tt,title:"Alarm panel",panels:at},st={en:Object.freeze({__proto__:null,common:Re,components:Le,title:"Alarm panel",panels:Ve,default:Ie}),et:Object.freeze({__proto__:null,common:Ue,components:Fe,title:"Alarm panel",panels:He,default:Ye}),nl:Object.freeze({__proto__:null,common:Be,components:We,title:"Alarmpaneel",panels:Ge,default:Qe}),fr:Object.freeze({__proto__:null,common:Ke,components:Ze,title:"Alarm panel",panels:Je,default:Xe}),it:Object.freeze({__proto__:null,common:et,components:tt,title:"Alarm panel",panels:at,default:it})};function nt(e,t,a="",i=""){const s=t.replace(/['"]+/g,"").replace("-","_");var n;try{n=e.split(".").reduce((e,t)=>e[t],st[s])}catch(t){n=e.split(".").reduce((e,t)=>e[t],st.en)}if(void 0===n&&(n=e.split(".").reduce((e,t)=>e[t],st.en)),""!==a&&""!==i){Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);for(let e=0;e<a.length;e++)n=n.replace(a[e],i[e])}return n}let ot=class extends oe{constructor(){super(...arguments),this.min=0,this.max=100,this.step=10,this.value=0,this.scaleFactor=1,this.unit="",this.disabled=!1}firstUpdated(){this.value>0&&this.value<60&&(this.unit="sec"),"min"==this.unit&&(this.scaleFactor=1/60),"min"==this.unit&&(this.step=1)}render(){return R`
      <div class="container">
        <div class="prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div class="value${this.disabled?" disabled":""}" @click=${this.toggleUnit}>
          ${this.getValue()}
        </div>
      </div>
    `}getValue(){const e=Number(Math.round(this.value*this.scaleFactor));return!e&&this.zeroValue?this.zeroValue:`${e} ${this.getUnit()}`}getUnit(){switch(this.unit){case"sec":return nt("components.time_slider.seconds",this.hass.language);case"min":return nt("components.time_slider.minutes",this.hass.language);default:return""}}getSlider(){return R`
      <ha-slider
        pin
        min=${Math.round(this.min*this.scaleFactor)}
        max=${Math.round(this.max*this.scaleFactor)}
        step=${this.step}
        value=${Math.round(this.value*this.scaleFactor)}
        ?disabled=${this.disabled}
        @change=${this.updateValue}
      ></ha-slider>
    `}updateValue(e){const t=Number(e.target.value);this.value=Math.round(t/this.scaleFactor)}toggleUnit(){this.unit="min"==this.unit?"sec":"min",this.scaleFactor="min"==this.unit?1/60:1,this.step="min"==this.unit?1:10}};ot.styles=se`
    :host {
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    div.container {
      display: grid;
      grid-template-columns: max-content 1fr 60px;
      grid-template-rows: min-content;
      grid-template-areas: 'prefix slider value';
    }

    div.prefix {
      grid-area: prefix;
      display: flex;
      align-items: center;
=======
    // IMPORTANT: do not change the property name or the assignment expression.
    // This line will be used in regexes to search for LitElement usage.
    // TODO(justinfagnani): inject version number at build time
    (window['litElementVersions'] || (window['litElementVersions'] = []))
        .push('2.4.0');
    /**
     * Sentinal value used to avoid calling lit-html's render function when
     * subclasses do not implement `render`
     */
    const renderNotImplemented = {};
    /**
     * Base element class that manages element properties and attributes, and
     * renders a lit-html template.
     *
     * To define a component, subclass `LitElement` and implement a
     * `render` method to provide the component's template. Define properties
     * using the [[`properties`]] property or the [[`property`]] decorator.
     */
    class LitElement extends UpdatingElement {
        /**
         * Return the array of styles to apply to the element.
         * Override this method to integrate into a style management system.
         *
         * @nocollapse
         */
        static getStyles() {
            return this.styles;
        }
        /** @nocollapse */
        static _getUniqueStyles() {
            // Only gather styles once per class
            if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
                return;
            }
            // Take care not to call `this.getStyles()` multiple times since this
            // generates new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.
            const userStyles = this.getStyles();
            if (Array.isArray(userStyles)) {
                // De-duplicate styles preserving the _last_ instance in the set.
                // This is a performance optimization to avoid duplicated styles that can
                // occur especially when composing via subclassing.
                // The last item is kept to try to preserve the cascade order with the
                // assumption that it's most important that last added styles override
                // previous styles.
                const addStyles = (styles, set) => styles.reduceRight((set, s) => 
                // Note: On IE set.add() does not return the set
                Array.isArray(s) ? addStyles(s, set) : (set.add(s), set), set);
                // Array.from does not work on Set in IE, otherwise return
                // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()
                const set = addStyles(userStyles, new Set());
                const styles = [];
                set.forEach((v) => styles.unshift(v));
                this._styles = styles;
            }
            else {
                this._styles = userStyles === undefined ? [] : [userStyles];
            }
            // Ensure that there are no invalid CSSStyleSheet instances here. They are
            // invalid in two conditions.
            // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
            //     this is impossible to check except via .replaceSync or use
            // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
            //     false)
            this._styles = this._styles.map((s) => {
                if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                    // Flatten the cssText from the passed constructible stylesheet (or
                    // undetectable non-constructible stylesheet). The user might have
                    // expected to update their stylesheets over time, but the alternative
                    // is a crash.
                    const cssText = Array.prototype.slice.call(s.cssRules)
                        .reduce((css, rule) => css + rule.cssText, '');
                    return unsafeCSS(cssText);
                }
                return s;
            });
        }
        /**
         * Performs element initialization. By default this calls
         * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
         * captures any pre-set values for registered properties.
         */
        initialize() {
            super.initialize();
            this.constructor._getUniqueStyles();
            this.renderRoot = this.createRenderRoot();
            // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.
            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
                this.adoptStyles();
            }
        }
        /**
         * Returns the node into which the element should render and by default
         * creates and returns an open shadowRoot. Implement to customize where the
         * element's DOM is rendered. For example, to render into the element's
         * childNodes, return `this`.
         * @returns {Element|DocumentFragment} Returns a node into which to render.
         */
        createRenderRoot() {
            return this.attachShadow({ mode: 'open' });
        }
        /**
         * Applies styling to the element shadowRoot using the [[`styles`]]
         * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
         * available and will fallback otherwise. When Shadow DOM is polyfilled,
         * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
         * is available but `adoptedStyleSheets` is not, styles are appended to the
         * end of the `shadowRoot` to [mimic spec
         * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
         */
        adoptStyles() {
            const styles = this.constructor._styles;
            if (styles.length === 0) {
                return;
            }
            // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering
            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
                window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map((s) => s.cssText), this.localName);
            }
            else if (supportsAdoptingStyleSheets) {
                this.renderRoot.adoptedStyleSheets =
                    styles.map((s) => s instanceof CSSStyleSheet ? s : s.styleSheet);
            }
            else {
                // This must be done after rendering so the actual style insertion is done
                // in `update`.
                this._needsShimAdoptedStyleSheets = true;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            // Note, first update/render handles styleElement so we only call this if
            // connected after first update.
            if (this.hasUpdated && window.ShadyCSS !== undefined) {
                window.ShadyCSS.styleElement(this);
            }
        }
        /**
         * Updates the element. This method reflects property values to attributes
         * and calls `render` to render DOM via lit-html. Setting properties inside
         * this method will *not* trigger another update.
         * @param _changedProperties Map of changed properties with old values
         */
        update(changedProperties) {
            // Setting properties in `render` should not trigger an update. Since
            // updates are allowed after super.update, it's important to call `render`
            // before that.
            const templateResult = this.render();
            super.update(changedProperties);
            // If render is not implemented by the component, don't call lit-html render
            if (templateResult !== renderNotImplemented) {
                this.constructor
                    .render(templateResult, this.renderRoot, { scopeName: this.localName, eventContext: this });
            }
            // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.
            if (this._needsShimAdoptedStyleSheets) {
                this._needsShimAdoptedStyleSheets = false;
                this.constructor._styles.forEach((s) => {
                    const style = document.createElement('style');
                    style.textContent = s.cssText;
                    this.renderRoot.appendChild(style);
                });
            }
        }
        /**
         * Invoked on each update to perform rendering tasks. This method may return
         * any value renderable by lit-html's `NodePart` - typically a
         * `TemplateResult`. Setting properties inside this method will *not* trigger
         * the element to update.
         */
        render() {
            return renderNotImplemented;
        }
    }
    /**
     * Ensure this class is marked as `finalized` as an optimization ensuring
     * it will not needlessly try to `finalize`.
     *
     * Note this property name is a string to prevent breaking Closure JS Compiler
     * optimizations. See updating-element.ts for more information.
     */
    LitElement['finalized'] = true;
    /**
     * Reference to the underlying library method used to render the element's
     * DOM. By default, points to the `render` method from lit-html's shady-render
     * module.
     *
     * **Most users will never need to touch this property.**
     *
     * This  property should not be confused with the `render` instance method,
     * which should be overridden to define a template for the element.
     *
     * Advanced users creating a new base class based on LitElement can override
     * this property to point to a custom render method with a signature that
     * matches [shady-render's `render`
     * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
     *
     * @nocollapse
     */
    LitElement.render = render$1;

    var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
    var twoDigitsOptional = "[1-9]\\d?";
    var twoDigits = "\\d\\d";
    var threeDigits = "\\d{3}";
    var fourDigits = "\\d{4}";
    var word = "[^\\s]+";
    var literal = /\[([^]*?)\]/gm;
    function shorten(arr, sLen) {
        var newArr = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            newArr.push(arr[i].substr(0, sLen));
        }
        return newArr;
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
    }
    var monthUpdate = function (arrName) { return function (v, i18n) {
        var lowerCaseArr = i18n[arrName].map(function (v) { return v.toLowerCase(); });
        var index = lowerCaseArr.indexOf(v.toLowerCase());
        if (index > -1) {
            return index;
        }
        return null;
    }; };
    function assign(origObj) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var obj = args_1[_a];
            for (var key in obj) {
                // @ts-ignore ex
                origObj[key] = obj[key];
            }
        }
        return origObj;
    }
    var dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    var monthNamesShort = shorten(monthNames, 3);
    var dayNamesShort = shorten(dayNames, 3);
    var defaultI18n = {
        dayNamesShort: dayNamesShort,
        dayNames: dayNames,
        monthNamesShort: monthNamesShort,
        monthNames: monthNames,
        amPm: ["am", "pm"],
        DoFn: function (dayOfMonth) {
            return (dayOfMonth +
                ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3
                    ? 0
                    : ((dayOfMonth - (dayOfMonth % 10) !== 10 ? 1 : 0) * dayOfMonth) % 10]);
        }
    };
    var globalI18n = assign({}, defaultI18n);
    var setGlobalDateI18n = function (i18n) {
        return (globalI18n = assign(globalI18n, i18n));
    };
    var regexEscape = function (str) {
        return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
    };
    var pad = function (val, len) {
        if (len === void 0) { len = 2; }
        val = String(val);
        while (val.length < len) {
            val = "0" + val;
        }
        return val;
    };
    var formatFlags = {
        D: function (dateObj) { return String(dateObj.getDate()); },
        DD: function (dateObj) { return pad(dateObj.getDate()); },
        Do: function (dateObj, i18n) {
            return i18n.DoFn(dateObj.getDate());
        },
        d: function (dateObj) { return String(dateObj.getDay()); },
        dd: function (dateObj) { return pad(dateObj.getDay()); },
        ddd: function (dateObj, i18n) {
            return i18n.dayNamesShort[dateObj.getDay()];
        },
        dddd: function (dateObj, i18n) {
            return i18n.dayNames[dateObj.getDay()];
        },
        M: function (dateObj) { return String(dateObj.getMonth() + 1); },
        MM: function (dateObj) { return pad(dateObj.getMonth() + 1); },
        MMM: function (dateObj, i18n) {
            return i18n.monthNamesShort[dateObj.getMonth()];
        },
        MMMM: function (dateObj, i18n) {
            return i18n.monthNames[dateObj.getMonth()];
        },
        YY: function (dateObj) {
            return pad(String(dateObj.getFullYear()), 4).substr(2);
        },
        YYYY: function (dateObj) { return pad(dateObj.getFullYear(), 4); },
        h: function (dateObj) { return String(dateObj.getHours() % 12 || 12); },
        hh: function (dateObj) { return pad(dateObj.getHours() % 12 || 12); },
        H: function (dateObj) { return String(dateObj.getHours()); },
        HH: function (dateObj) { return pad(dateObj.getHours()); },
        m: function (dateObj) { return String(dateObj.getMinutes()); },
        mm: function (dateObj) { return pad(dateObj.getMinutes()); },
        s: function (dateObj) { return String(dateObj.getSeconds()); },
        ss: function (dateObj) { return pad(dateObj.getSeconds()); },
        S: function (dateObj) {
            return String(Math.round(dateObj.getMilliseconds() / 100));
        },
        SS: function (dateObj) {
            return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
        },
        SSS: function (dateObj) { return pad(dateObj.getMilliseconds(), 3); },
        a: function (dateObj, i18n) {
            return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
        },
        A: function (dateObj, i18n) {
            return dateObj.getHours() < 12
                ? i18n.amPm[0].toUpperCase()
                : i18n.amPm[1].toUpperCase();
        },
        ZZ: function (dateObj) {
            var offset = dateObj.getTimezoneOffset();
            return ((offset > 0 ? "-" : "+") +
                pad(Math.floor(Math.abs(offset) / 60) * 100 + (Math.abs(offset) % 60), 4));
        },
        Z: function (dateObj) {
            var offset = dateObj.getTimezoneOffset();
            return ((offset > 0 ? "-" : "+") +
                pad(Math.floor(Math.abs(offset) / 60), 2) +
                ":" +
                pad(Math.abs(offset) % 60, 2));
        }
    };
    var monthParse = function (v) { return +v - 1; };
    var emptyDigits = [null, twoDigitsOptional];
    var emptyWord = [null, word];
    var amPm = [
        "isPm",
        word,
        function (v, i18n) {
            var val = v.toLowerCase();
            if (val === i18n.amPm[0]) {
                return 0;
            }
            else if (val === i18n.amPm[1]) {
                return 1;
            }
            return null;
        }
    ];
    var timezoneOffset = [
        "timezoneOffset",
        "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",
        function (v) {
            var parts = (v + "").match(/([+-]|\d\d)/gi);
            if (parts) {
                var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
                return parts[0] === "+" ? minutes : -minutes;
            }
            return 0;
        }
    ];
    var parseFlags = {
        D: ["day", twoDigitsOptional],
        DD: ["day", twoDigits],
        Do: ["day", twoDigitsOptional + word, function (v) { return parseInt(v, 10); }],
        M: ["month", twoDigitsOptional, monthParse],
        MM: ["month", twoDigits, monthParse],
        YY: [
            "year",
            twoDigits,
            function (v) {
                var now = new Date();
                var cent = +("" + now.getFullYear()).substr(0, 2);
                return +("" + (+v > 68 ? cent - 1 : cent) + v);
            }
        ],
        h: ["hour", twoDigitsOptional, undefined, "isPm"],
        hh: ["hour", twoDigits, undefined, "isPm"],
        H: ["hour", twoDigitsOptional],
        HH: ["hour", twoDigits],
        m: ["minute", twoDigitsOptional],
        mm: ["minute", twoDigits],
        s: ["second", twoDigitsOptional],
        ss: ["second", twoDigits],
        YYYY: ["year", fourDigits],
        S: ["millisecond", "\\d", function (v) { return +v * 100; }],
        SS: ["millisecond", twoDigits, function (v) { return +v * 10; }],
        SSS: ["millisecond", threeDigits],
        d: emptyDigits,
        dd: emptyDigits,
        ddd: emptyWord,
        dddd: emptyWord,
        MMM: ["month", word, monthUpdate("monthNamesShort")],
        MMMM: ["month", word, monthUpdate("monthNames")],
        a: amPm,
        A: amPm,
        ZZ: timezoneOffset,
        Z: timezoneOffset
    };
    // Some common format strings
    var globalMasks = {
        default: "ddd MMM DD YYYY HH:mm:ss",
        shortDate: "M/D/YY",
        mediumDate: "MMM D, YYYY",
        longDate: "MMMM D, YYYY",
        fullDate: "dddd, MMMM D, YYYY",
        isoDate: "YYYY-MM-DD",
        isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
        shortTime: "HH:mm",
        mediumTime: "HH:mm:ss",
        longTime: "HH:mm:ss.SSS"
    };
    var setGlobalDateMasks = function (masks) { return assign(globalMasks, masks); };
    /***
     * Format a date
     * @method format
     * @param {Date|number} dateObj
     * @param {string} mask Format of the date, i.e. 'mm-dd-yy' or 'shortDate'
     * @returns {string} Formatted date string
     */
    var format = function (dateObj, mask, i18n) {
        if (mask === void 0) { mask = globalMasks["default"]; }
        if (i18n === void 0) { i18n = {}; }
        if (typeof dateObj === "number") {
            dateObj = new Date(dateObj);
        }
        if (Object.prototype.toString.call(dateObj) !== "[object Date]" ||
            isNaN(dateObj.getTime())) {
            throw new Error("Invalid Date pass to format");
        }
        mask = globalMasks[mask] || mask;
        var literals = [];
        // Make literals inactive by replacing them with @@@
        mask = mask.replace(literal, function ($0, $1) {
            literals.push($1);
            return "@@@";
        });
        var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
        // Apply formatting rules
        mask = mask.replace(token, function ($0) {
            return formatFlags[$0](dateObj, combinedI18nSettings);
        });
        // Inline literal values back into the formatted value
        return mask.replace(/@@@/g, function () { return literals.shift(); });
    };
    /**
     * Parse a date string into a Javascript Date object /
     * @method parse
     * @param {string} dateStr Date string
     * @param {string} format Date parse format
     * @param {i18n} I18nSettingsOptional Full or subset of I18N settings
     * @returns {Date|null} Returns Date object. Returns null what date string is invalid or doesn't match format
     */
    function parse(dateStr, format, i18n) {
        if (i18n === void 0) { i18n = {}; }
        if (typeof format !== "string") {
            throw new Error("Invalid format in fecha parse");
        }
        // Check to see if the format is actually a mask
        format = globalMasks[format] || format;
        // Avoid regular expression denial of service, fail early for really long strings
        // https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS
        if (dateStr.length > 1000) {
            return null;
        }
        // Default to the beginning of the year.
        var today = new Date();
        var dateInfo = {
            year: today.getFullYear(),
            month: 0,
            day: 1,
            hour: 0,
            minute: 0,
            second: 0,
            millisecond: 0,
            isPm: null,
            timezoneOffset: null
        };
        var parseInfo = [];
        var literals = [];
        // Replace all the literals with @@@. Hopefully a string that won't exist in the format
        var newFormat = format.replace(literal, function ($0, $1) {
            literals.push(regexEscape($1));
            return "@@@";
        });
        var specifiedFields = {};
        var requiredFields = {};
        // Change every token that we find into the correct regex
        newFormat = regexEscape(newFormat).replace(token, function ($0) {
            var info = parseFlags[$0];
            var field = info[0], regex = info[1], requiredField = info[3];
            // Check if the person has specified the same field twice. This will lead to confusing results.
            if (specifiedFields[field]) {
                throw new Error("Invalid format. " + field + " specified twice in format");
            }
            specifiedFields[field] = true;
            // Check if there are any required fields. For instance, 12 hour time requires AM/PM specified
            if (requiredField) {
                requiredFields[requiredField] = true;
            }
            parseInfo.push(info);
            return "(" + regex + ")";
        });
        // Check all the required fields are present
        Object.keys(requiredFields).forEach(function (field) {
            if (!specifiedFields[field]) {
                throw new Error("Invalid format. " + field + " is required in specified format");
            }
        });
        // Add back all the literals after
        newFormat = newFormat.replace(/@@@/g, function () { return literals.shift(); });
        // Check if the date string matches the format. If it doesn't return null
        var matches = dateStr.match(new RegExp(newFormat, "i"));
        if (!matches) {
            return null;
        }
        var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
        // For each match, call the parser function for that date part
        for (var i = 1; i < matches.length; i++) {
            var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
            var value = parser
                ? parser(matches[i], combinedI18nSettings)
                : +matches[i];
            // If the parser can't make sense of the value, return null
            if (value == null) {
                return null;
            }
            dateInfo[field] = value;
        }
        if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
            dateInfo.hour = +dateInfo.hour + 12;
        }
        else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
            dateInfo.hour = 0;
        }
        var dateWithoutTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
        var validateFields = [
            ["month", "getMonth"],
            ["day", "getDate"],
            ["hour", "getHours"],
            ["minute", "getMinutes"],
            ["second", "getSeconds"]
        ];
        for (var i = 0, len = validateFields.length; i < len; i++) {
            // Check to make sure the date field is within the allowed range. Javascript dates allows values
            // outside the allowed range. If the values don't match the value was invalid
            if (specifiedFields[validateFields[i][0]] &&
                dateInfo[validateFields[i][0]] !== dateWithoutTZ[validateFields[i][1]]()) {
                return null;
            }
        }
        if (dateInfo.timezoneOffset == null) {
            return dateWithoutTZ;
        }
        return new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
    }
    var fecha = {
        format: format,
        parse: parse,
        defaultI18n: defaultI18n,
        setGlobalDateI18n: setGlobalDateI18n,
        setGlobalDateMasks: setGlobalDateMasks
    };

    var a=function(){try{(new Date).toLocaleDateString("i");}catch(e){return "RangeError"===e.name}return !1}()?function(e,t){return e.toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})}:function(t){return fecha.format(t,"mediumDate")},r=function(){try{(new Date).toLocaleString("i");}catch(e){return "RangeError"===e.name}return !1}()?function(e,t){return e.toLocaleString(t,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}:function(t){return fecha.format(t,"haDateTime")},n=function(){try{(new Date).toLocaleTimeString("i");}catch(e){return "RangeError"===e.name}return !1}()?function(e,t){return e.toLocaleTimeString(t,{hour:"numeric",minute:"2-digit"})}:function(t){return fecha.format(t,"shortTime")};function d(e){return e.substr(0,e.indexOf("."))}function f(e){return e.substr(e.indexOf(".")+1)}var _="hass:bookmark",C=function(e,t,a,r){r=r||{},a=null==a?{}:a;var n=new Event(t,{bubbles:void 0===r.bubbles||r.bubbles,cancelable:Boolean(r.cancelable),composed:void 0===r.composed||r.composed});return n.detail=a,e.dispatchEvent(n),n},N={alert:"hass:alert",automation:"hass:playlist-play",calendar:"hass:calendar",camera:"hass:video",climate:"hass:thermostat",configurator:"hass:settings",conversation:"hass:text-to-speech",device_tracker:"hass:account",fan:"hass:fan",group:"hass:google-circles-communities",history_graph:"hass:chart-line",homeassistant:"hass:home-assistant",homekit:"hass:home-automation",image_processing:"hass:image-filter-frames",input_boolean:"hass:drawing",input_datetime:"hass:calendar-clock",input_number:"hass:ray-vertex",input_select:"hass:format-list-bulleted",input_text:"hass:textbox",light:"hass:lightbulb",mailbox:"hass:mailbox",notify:"hass:comment-alert",person:"hass:account",plant:"hass:flower",proximity:"hass:apple-safari",remote:"hass:remote",scene:"hass:google-pages",script:"hass:file-document",sensor:"hass:eye",simple_alarm:"hass:bell",sun:"hass:white-balance-sunny",switch:"hass:flash",timer:"hass:timer",updater:"hass:cloud-upload",vacuum:"hass:robot-vacuum",water_heater:"hass:thermometer",weblink:"hass:open-in-new"};function O(e,t){if(e in N)return N[e];switch(e){case"alarm_control_panel":switch(t){case"armed_home":return "hass:bell-plus";case"armed_night":return "hass:bell-sleep";case"disarmed":return "hass:bell-outline";case"triggered":return "hass:bell-ring";default:return "hass:bell"}case"binary_sensor":return t&&"off"===t?"hass:radiobox-blank":"hass:checkbox-marked-circle";case"cover":return "closed"===t?"hass:window-closed":"hass:window-open";case"lock":return t&&"unlocked"===t?"hass:lock-open":"hass:lock";case"media_player":return t&&"off"!==t&&"idle"!==t?"hass:cast-connected":"hass:cast";case"zwave":switch(t){case"dead":return "hass:emoticon-dead";case"sleeping":return "hass:sleep";case"initializing":return "hass:timer-sand";default:return "hass:z-wave"}default:return console.warn("Unable to find icon for domain "+e+" ("+t+")"),_}}var F=function(e,t,a){void 0===a&&(a=!1),a?history.replaceState(null,"",t):history.pushState(null,"",t),C(window,"location-changed",{replace:a});};var K={humidity:"hass:water-percent",illuminance:"hass:brightness-5",temperature:"hass:thermometer",pressure:"hass:gauge",power:"hass:flash",signal_strength:"hass:wifi"},P={binary_sensor:function(e){var t=e.state&&"off"===e.state;switch(e.attributes.device_class){case"battery":return t?"hass:battery":"hass:battery-outline";case"cold":return t?"hass:thermometer":"hass:snowflake";case"connectivity":return t?"hass:server-network-off":"hass:server-network";case"door":return t?"hass:door-closed":"hass:door-open";case"garage_door":return t?"hass:garage":"hass:garage-open";case"gas":case"power":case"problem":case"safety":case"smoke":return t?"hass:shield-check":"hass:alert";case"heat":return t?"hass:thermometer":"hass:fire";case"light":return t?"hass:brightness-5":"hass:brightness-7";case"lock":return t?"hass:lock":"hass:lock-open";case"moisture":return t?"hass:water-off":"hass:water";case"motion":return t?"hass:walk":"hass:run";case"occupancy":return t?"hass:home-outline":"hass:home";case"opening":return t?"hass:square":"hass:square-outline";case"plug":return t?"hass:power-plug-off":"hass:power-plug";case"presence":return t?"hass:home-outline":"hass:home";case"sound":return t?"hass:music-note-off":"hass:music-note";case"vibration":return t?"hass:crop-portrait":"hass:vibrate";case"window":return t?"hass:window-closed":"hass:window-open";default:return t?"hass:radiobox-blank":"hass:checkbox-marked-circle"}},cover:function(e){var t="closed"!==e.state;switch(e.attributes.device_class){case"garage":return t?"hass:garage-open":"hass:garage";case"door":return t?"hass:door-open":"hass:door-closed";case"shutter":return t?"hass:window-shutter-open":"hass:window-shutter";case"blind":return t?"hass:blinds-open":"hass:blinds";case"window":return t?"hass:window-open":"hass:window-closed";default:return O("cover",e.state)}},sensor:function(e){var t=e.attributes.device_class;if(t&&t in K)return K[t];if("battery"===t){var a=Number(e.state);if(isNaN(a))return "hass:battery-unknown";var r=10*Math.round(a/10);return r>=100?"hass:battery":r<=0?"hass:battery-alert":"hass:battery-"+r}var n=e.attributes.unit_of_measurement;return "°C"===n||"°F"===n?"hass:thermometer":O("sensor")},input_datetime:function(e){return e.attributes.has_date?e.attributes.has_time?O("input_datetime"):"hass:calendar":"hass:clock"}},Q=function(e){if(!e)return _;if(e.attributes.icon)return e.attributes.icon;var t=d(e.entity_id);return t in P?P[t](e):O(t,e.state)};

    const loadHaForm = async () => {
      if (customElements.get("ha-checkbox") && customElements.get("ha-slider")) return;
      await customElements.whenDefined("partial-panel-resolver");
      const ppr = document.createElement('partial-panel-resolver');
      ppr.hass = {
        panels: [{
          url_path: "tmp",
          component_name: "config"
        }]
      };

      ppr._updateRoutes();

      await ppr.routerOptions.routes.tmp.load();
      await customElements.whenDefined("ha-panel-config");
      const cpr = document.createElement("ha-panel-config");
      await cpr.routerOptions.routes.automation.load();
      ppr.hass = {
        panels: [{
          url_path: "tmp",
          component_name: "developer-tools"
        }]
      };

      ppr._updateRoutes();

      await ppr.routerOptions.routes.tmp.load();
      await customElements.whenDefined("ha-app-layout");
    };

    const commonStyle = css `
  ha-card {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
  }
  .card-header .name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div.warning {
    color: var(--error-color);
    margin-top: 20px;
  }

  div.checkbox-row {
    min-height: 40px;
    display: flex;
    align-items: center;
  }

  div.checkbox-row ha-switch {
    margin-right: 20px;
  }

  div.checkbox-row.right ha-switch {
    margin-left: 20px;
    position: absolute;
    right: 0px;
  }

  mwc-button.active {
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
    border-radius: 4px;
  }
  mwc-button.warning {
    --mdc-theme-primary: var(--error-color);
  }
  mwc-button.success {
    --mdc-theme-primary: var(--success-color);
  }

  mwc-button.disabled.active {
    opacity: 0.5;
  }

  div.entity-row {
    display: flex;
    align-items: center;
    flex-direction: row;
    margin: 10px 0px;
  }
  div.entity-row .info {
    margin-left: 16px;
    flex: 1 0 60px;
  }
  div.entity-row .info,
  div.entity-row .info > * {
    color: var(--primary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row .secondary {
    display: block;
    color: var(--secondary-text-color);
    transition: color 0.2s ease-in-out;
  }
  div.entity-row state-badge {
    flex: 0 0 40px;
  }

  ha-dialog div.wrapper {
    margin-bottom: -20px;
  }

  paper-textarea {
    width: 100%;
  }

  a, a:visited { 
    color: var(--primary-color);
  }
  mwc-button ha-icon {
    padding-right: 11px;
  }
  mwc-button.vertical {
    height: 60px;
    --mdc-button-height: 60px;
    background: var(--primary-color);
    --mdc-theme-primary: var(--text-primary-color);
  }
  mwc-button.vertical div {
    display: flex;
    flex-direction: column; 
  }
  mwc-button.vertical span {
    display: flex;
  }
  mwc-button.vertical ha-icon {
    display: flex;
    margin-left: 50%;
  }
  mwc-tab ha-icon {
    --mdc-icon-size: 20px;
  }
  mwc-tab.disabled {
      --mdc-theme-primary: var(--disabled-text-color);
      --mdc-tab-color-default: var(--disabled-text-color);
      --mdc-tab-text-label-color-default: var(--disabled-text-color);
  }

  ha-card settings-row:first-child, ha-card settings-row:first-of-type {
    border-top: 0px;
  }

  ha-card > ha-card {
    margin: 10px;
  }

  div.table-filter {
    display: flex;
    width: 100%;
    min-height: 52px;
    border-top: 1px solid var(--divider-color);
    box-sizing: border-box;
    padding: 2px 8px;
    flex-direction: row;
    align-items: center;
  }
  div.table-filter .header {
    display: flex;
    white-space: nowrap;
    padding: 8px 8px;
  }
  div.table-filter[narrow] {
    flex-direction: column;
    align-items: flex-start;
  }
`;

    var common = {
    	modes_long: {
    		armed_away: "Armed Away",
    		armed_home: "Armed Home",
    		armed_night: "Armed Night",
    		armed_custom_bypass: "Armed Custom"
    	},
    	modes_short: {
    		armed_away: "Away",
    		armed_home: "Home",
    		armed_night: "Night",
    		armed_custom_bypass: "Custom"
    	}
    };
    var components = {
    	time_slider: {
    		seconds: "sec",
    		minutes: "min",
    		infinite: "infinite",
    		none: "none"
    	},
    	editor: {
    		ui_mode: "Switch to UI",
    		yaml_mode: "Switch to YAML"
    	}
    };
    var title = "Alarm panel";
    var panels = {
    	general: {
    		title: "General",
    		cards: {
    			general: {
    				description: "This panel defines some global settings for the alarm.",
    				fields: {
    					disarm_after_trigger: {
    						heading: "Disarm after trigger",
    						description: "After trigger time has expired, disarm the alarm instead of returning to armed state."
    					},
    					enable_mqtt: {
    						heading: "Enable MQTT",
    						description: "Allow the alarm panel to be controlled through MQTT."
    					},
    					enable_master: {
    						heading: "Enable alarm master",
    						description: "Creates an entity for controlling all areas simultaneously."
    					}
    				},
    				actions: {
    					setup_mqtt: "MQTT Configuration",
    					setup_master: "Master Configuration"
    				}
    			},
    			modes: {
    				title: "Modes",
    				description: "This panel can be used to set up the arm modes of the alarm.",
    				fields: {
    					mode: {
    						armed_away: "Armed away will be used when all people left the house. All doors and windows allowing access to the house will be guarded, as well as motion sensors inside the house.",
    						armed_home: "Armed home (also known as armed stay) will be used when setting the alarm while people are in the house. All doors and windows allowing access to the house will be guarded, but not motion sensors inside the house.",
    						armed_night: "Armed night will be used when setting the alarm before going to sleep. All doors and windows allowing access to the house will be guarded, and selected motion sensors (downstairs) in the house.",
    						armed_custom_bypass: "An extra mode for defining your own security perimeter.",
    						enabled: "Enabled",
    						disabled: "Disabled"
    					},
    					exit_delay: {
    						heading: "Exit delay",
    						description: "When arming the alarm, within this time period the sensors will not trigger the alarm yet."
    					},
    					entry_delay: {
    						heading: "Entry delay",
    						description: "Delay time until the alarm is triggered after one of the sensors is activated."
    					},
    					trigger_time: {
    						heading: "Trigger time",
    						description: "Time during which the siren will sound"
    					}
    				}
    			},
    			mqtt: {
    				title: "MQTT configuration",
    				description: "This panel can be used for configuration of the MQTT interface.",
    				fields: {
    					state_topic: {
    						heading: "State topic",
    						description: "Topic on which state updates are published"
    					},
    					command_topic: {
    						heading: "Command topic",
    						description: "Topic on which arm/disarm commands are sent."
    					},
    					require_code: {
    						heading: "Require code",
    						description: "Require the code to be sent with the command."
    					},
    					state_payload: {
    						heading: "Configure payload per state",
    						item: "Define a payload for state '{state}'"
    					},
    					command_payload: {
    						heading: "Configure payload per command",
    						item: "Define a payload for command '{command}'"
    					}
    				}
    			},
    			areas: {
    				title: "Areas",
    				description: "Areas can be used for dividing your alarm system into multiple compartments.",
    				no_items: "There are no areas defined yet.",
    				table: {
    					remarks: "Remarks",
    					summary: "This area contains {summary_sensors} and {summary_automations}.",
    					summary_sensors: "{number} sensors",
    					summary_automations: "{number} automations"
    				},
    				actions: {
    					add: "Add"
    				}
    			}
    		},
    		dialogs: {
    			create_area: {
    				title: "New area",
    				fields: {
    					copy_from: "Copy settings from"
    				}
    			},
    			edit_area: {
    				title: "Editing area '{area}'",
    				name_warning: "Note: changing the name will change the entity ID"
    			},
    			remove_area: {
    				title: "Remove area?",
    				description: "Are you sure you want to remove this area? This area contains {sensors} sensors and {automations} automations, which will be removed as well."
    			},
    			edit_master: {
    				title: "Master configuration"
    			},
    			disable_master: {
    				title: "Disable master?",
    				description: "Are you sure you want to remove the alarm master? This area contains {automations} automations, which will be removed with this action."
    			}
    		}
    	},
    	sensors: {
    		title: "Sensors",
    		cards: {
    			sensors: {
    				description: "Currently configured sensors. Click on an entity to make changes.",
    				no_items: "There are no sensors to be displayed here.",
    				table: {
    					arm_modes: "Arm Modes",
    					always_on: "(Always)"
    				},
    				filter: {
    					label: "Filter by area",
    					no_area: "(No area)"
    				}
    			},
    			add_sensors: {
    				title: "Add Sensors",
    				description: "Add more sensors. Make sure that your sensors have a friendly_name, so you can identify them.",
    				no_items: "There are no available HA entities that can be configured for the alarm. Make sure to include entities of the type binary_sensor.",
    				actions: {
    					add_to_alarm: "add to alarm",
    					show_all: "Show all"
    				}
    			},
    			editor: {
    				title: "Edit Sensor",
    				description: "Configuring the sensor settings of '{entity}'.",
    				fields: {
    					name: {
    						heading: "Name",
    						description: "Overwrite friendly name."
    					},
    					area: {
    						heading: "Area",
    						description: "Select an area which contains this sensor."
    					},
    					device_type: {
    						heading: "Device Type",
    						description: "Choose a device type to automatically apply appropriate settings.",
    						choose: {
    							door: {
    								name: "Door",
    								description: "A door, gate or other entrance that is used for entering/leaving the home."
    							},
    							window: {
    								name: "Window",
    								description: "A window, or a door not used for entering the house such as balcony."
    							},
    							motion: {
    								name: "Motion",
    								description: "Presence sensor or similar device having a delay between activations."
    							},
    							tamper: {
    								name: "Tamper",
    								description: "Detector of sensor cover removal, glass break sensor, etc."
    							},
    							environmental: {
    								name: "Environmental",
    								description: "Smoke/gas sensor, leak detector, etc. (not related to burglar protection)."
    							},
    							other: {
    								name: "Generic"
    							}
    						}
    					},
    					always_on: {
    						heading: "Always on",
    						description: "Sensor should always trigger the alarm."
    					},
    					modes: {
    						heading: "Enabled modes",
    						description: "Alarm modes in which this sensor is active."
    					},
    					arm_on_close: {
    						heading: "Arm after closing",
    						description: "After deactivation of this sensor, the remaining exit delay will automatically be skipped."
    					},
    					immediate: {
    						heading: "Immediate",
    						description: "Activating this sensor will trigger the alarm directly instead of after entry delay."
    					},
    					allow_open: {
    						heading: "Allow open while arming",
    						description: "Allow this sensor to be active shortly after leaving such that it will not block arming."
    					},
    					trigger_unavailable: {
    						heading: "Trigger when unavailable",
    						description: "When the sensor state becomes 'unavailable', this will activate the sensor."
    					}
    				},
    				actions: {
    					toggle_advanced: "Advanced settings",
    					remove: "Remove"
    				},
    				errors: {
    					description: "Please correct the following errors:",
    					no_area: "No area is selected",
    					no_modes: "No modes are selected for which the sensor should be active"
    				}
    			}
    		}
    	},
    	codes: {
    		title: "Codes",
    		cards: {
    			codes: {
    				description: "Change settings for the code.",
    				fields: {
    					code_arm_required: {
    						heading: "Use arm code",
    						description: "Require a code for arming the alarm"
    					},
    					code_disarm_required: {
    						heading: "Use disarm code",
    						description: "Require a code for disarming the alarm"
    					},
    					code_format: {
    						heading: "Code format",
    						description: "Sets the input type for Lovelace alarm card.",
    						code_format_number: "pincode",
    						code_format_text: "password"
    					}
    				}
    			},
    			user_management: {
    				title: "User management",
    				description: "Each user has its own code to arm/disarm the alarm.",
    				no_items: "There are no users yet",
    				table: {
    					remarks: "Remarks",
    					administrator: "Administrator"
    				},
    				actions: {
    					new_user: "new user"
    				}
    			},
    			new_user: {
    				title: "Create new user",
    				description: "Users can be created for providing access to operating the alarm.",
    				fields: {
    					name: {
    						heading: "Name",
    						description: "Name of the user."
    					},
    					code: {
    						heading: "Code",
    						description: "Code for this user."
    					},
    					confirm_code: {
    						heading: "Confirm code",
    						description: "Repeat the code."
    					},
    					is_admin: {
    						heading: "User is administrator",
    						description: "Allow user to make changes"
    					},
    					can_arm: {
    						heading: "Allow code for arming",
    						description: "Entering this code activates the alarm"
    					},
    					can_disarm: {
    						heading: "Allow code for disarming",
    						description: "Entering this code deactivates the alarm"
    					},
    					is_override_code: {
    						heading: "Is override code",
    						description: "Entering this code will arm the alarm in force"
    					}
    				},
    				errors: {
    					no_name: "No name provided.",
    					no_code: "Code should have 4 characters/numbers minimum.",
    					code_mismatch: "The codes don't match."
    				}
    			},
    			edit_user: {
    				title: "Edit User",
    				description: "Change configuration for user '{name}'.",
    				fields: {
    					old_code: {
    						heading: "Current code",
    						description: "Current code, leave empty to leave unchanged."
    					}
    				}
    			}
    		}
    	},
    	actions: {
    		title: "Actions",
    		cards: {
    			notifications: {
    				title: "Notifications",
    				description: "Using this panel, you can manage notifications to be sent when during a certain alarm event.",
    				table: {
    					enabled: "Enabled",
    					no_items: "There are no notifications created yet."
    				},
    				actions: {
    					new_notification: "new notification"
    				},
    				filter: {
    					label: "Filter by area",
    					no_area: "Alarm master"
    				}
    			},
    			actions: {
    				description: "This panel can be used to switch a device when the alarm state changes.",
    				table: {
    					no_items: "There are no actions created yet."
    				},
    				actions: {
    					new_action: "new action"
    				}
    			},
    			new_notification: {
    				title: "Create notification",
    				description: "Create a new notification.",
    				fields: {
    					name: {
    						heading: "Name",
    						description: "Description for this notification"
    					},
    					event: {
    						heading: "Event",
    						description: "When should the notification be sent",
    						choose: {
    							armed: {
    								name: "Alarm is armed",
    								description: "The alarm is succesfully armed"
    							},
    							disarmed: {
    								name: "Alarm is disarmed",
    								description: "The alarm is disarmed"
    							},
    							triggered: {
    								name: "Alarm is triggered",
    								description: "The alarm is triggered"
    							},
    							arm_failure: {
    								name: "Failed to arm",
    								description: "The arming of the alarm failed due to one or more open sensors"
    							},
    							arming: {
    								name: "Exit delay started",
    								description: "Exit delay started, ready to leave the house."
    							},
    							pending: {
    								name: "Entry delay started",
    								description: "Entry delay started, the alarm will trigger soon."
    							}
    						}
    					},
    					mode: {
    						heading: "Mode",
    						description: "Limit the action to specific arm modes (optional)"
    					},
    					title: {
    						heading: "Title",
    						description: "Title for the notification message"
    					},
    					message: {
    						heading: "Message",
    						description: "Content of the notification message"
    					},
    					target: {
    						heading: "Target",
    						description: "Device to send the push message to"
    					}
    				}
    			},
    			new_action: {
    				title: "Create action",
    				description: "This panel can be used to switch a device when the alarm state changes.",
    				fields: {
    					name: {
    						heading: "Name",
    						description: "Description for this action"
    					},
    					event: {
    						heading: "Event",
    						description: "When should the action be executed"
    					},
    					area: {
    						heading: "Area",
    						description: "Area for which the event applies, leave empty to select the global alarm."
    					},
    					mode: {
    						heading: "Mode",
    						description: "Limit the action to specific arm modes (optional)"
    					},
    					entity: {
    						heading: "Entity",
    						description: "Entity to perform action on"
    					},
    					action: {
    						heading: "Action",
    						description: "Action to perform on the entity",
    						turn_on: "Turn on",
    						turn_off: "Turn off"
    					}
    				}
    			}
    		},
    		validation_errors: {
    			no_triggers: "No state or event provided for the triggering of this automation.",
    			empty_trigger: "One of the triggers has no state or event provided.",
    			invalid_trigger: "One of the triggers has an invalid value: {trigger}",
    			invalid_mode: "Invalid input provided for 'mode': {mode}",
    			no_actions: "No actions are provided to be performed by this automation.",
    			no_service: "One of the actions is missing a service.",
    			invalid_service: "An invalid service name was provided for one of the actions: {service}",
    			no_service_data: "No service data was provided for one of the actions.",
    			no_entity_in_service_data: "No entity_id was provided in the service_data of one of the actions.",
    			no_message_in_service_data: "No message was provided in the service_data of one of the actions."
    		}
    	}
    };
    var en = {
    	common: common,
    	components: components,
    	title: title,
    	panels: panels
    };

    var en$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        common: common,
        components: components,
        title: title,
        panels: panels,
        'default': en
    });

    var common$1 = {
    	modes_long: {
    		armed_away: "Valvestatud eemal",
    		armed_home: "Valvestatud kodus",
    		armed_night: "Valvestatud ööseks",
    		armed_custom_bypass: "Valikuline valvestus"
    	},
    	modes_short: {
    		armed_away: "Eemal",
    		armed_home: "Kodus",
    		armed_night: "Ööseks",
    		armed_custom_bypass: "Valikuline"
    	}
    };
    var components$1 = {
    	time_slider: {
    		seconds: "sek",
    		minutes: "min",
    		infinite: "piiranguta",
    		none: "puudub"
    	},
    	editor: {
    		ui_mode: "Kasutajaliides",
    		yaml_mode: "Koodiredaktor"
    	}
    };
    var panels$1 = {
    	general: {
    		cards: {
    			general: {
    				title: "Üldsätted",
    				description: "Need seaded kehtivad kõikides valve olekutes.",
    				fields: {
    					trigger_time: {
    						heading: "Häire kestus",
    						description: "Sireeni jne. aktiveerimise kestus."
    					},
    					disarm_after_trigger: {
    						heading: "Häire summutamine",
    						description: "Peale häire lõppu võta valvest maha miite ära valvesta uuesti."
    					},
    					enable_mqtt: {
    						heading: "Luba MQTT juhtimine",
    						description: "Luba nupustiku juhtimist MQTT abil."
    					}
    				},
    				actions: {
    					setup_mqtt: "MQTT seadistamine"
    				}
    			},
    			common: {
    				fields: {
    					leave_time: {
    						heading: "Ooteaeg valvestamisel",
    						description: "Viivitus enne valvestamise rakendumist."
    					},
    					entry_time: {
    						heading: "Sisenemise viivitus",
    						description: "Viivitus sisenemisel enne häire rakendumist."
    					}
    				}
    			},
    			armed_away: {
    				description: "Täielik valvestamine kui kedagi pole kodus. Kasutusel on kõik andurid."
    			},
    			armed_home: {
    				description: "Valvestatud kodus ei kasuta liikumisandureid kuid väisuksed ja aknad on valve all."
    			},
    			armed_night: {
    				description: "Valvestatud ööseks ei kasuta määratud liikumisandureid, välisperimeeter on valve all."
    			},
    			armed_custom: {
    				description: "Valikulise valvestuse puhul saab määrata kasutatavad andurid."
    			},
    			mqtt: {
    				title: "MQTT sätted",
    				description: "MQTT parameetrite seadistamine.",
    				fields: {
    					state_topic: {
    						heading: "Oleku teema (topic)",
    						description: "Teema milles avaldatakse oleku muutused."
    					},
    					command_topic: {
    						heading: "Käskude teema (topic)",
    						description: "Teema milles avaldatakse valvestamise käsud."
    					},
    					require_code: {
    						heading: "Nõua PIN koodi",
    						description: "Käskude edastamiseks on vajalik PIN kood."
    					},
    					state_payload: {
    						heading: "Määra olekute toimeandmed",
    						item: "Määra oleku '{state}' toimeandmed"
    					},
    					command_payload: {
    						heading: "Määra käskude toimeandmed",
    						item: "Määra käsu '{command}' toimeandmed"
    					}
    				}
    			}
    		}
    	},
    	sensors: {
    		cards: {
    			sensors: {
    				title: "Andurid",
    				description: "Kasutusel olevad andurid. Klõpsa olemil, et seadistada.",
    				no_items: "Andureid pole lisatud. Alustuseks lisa mõni andur.",
    				table: {
    					arm_modes: "Valvestamise olek",
    					always_on: "(alati)"
    				}
    			},
    			add_sensors: {
    				title: "Andurite lisamine",
    				description: "Lisa veel andureid. Mõistlik on panna neile arusaadav nimi (friendly_name).",
    				no_items: "Puuduvad valvestamiseks sobivad Home Assistanti olemid. Lisatavad olemid peavad olema olekuandurid (binary_sensor).",
    				actions: {
    					add_to_alarm: "Lisa valvesüsteemile",
    					show_all: "Kuva kõik andurid"
    				}
    			},
    			editor: {
    				title: "Andurite sätted",
    				description: "Muuda olemi '{entity}' sätteid.",
    				fields: {
    					name: {
    						heading: "Nimi",
    						description: "Muuda kuvatavat nime."
    					},
    					always_on: {
    						heading: "Alati kasutusel",
    						description: "Andur käivitab häire igas valve olekus."
    					},
    					modes: {
    						heading: "Valve olekute valik",
    						description: "Valve olekud kus seda andurit kasutatakse."
    					},
    					immediate: {
    						heading: "Viivituseta",
    						description: "Andur annab häire ilma viiteta."
    					},
    					allow_open: {
    						heading: "Lahkumisviivitus",
    						description: "See andur ei aktiveeru enne lahkumisviivituse lõppu."
    					},
    					trigger_unavailable: {
    						heading: "Andurite saadavus",
    						description: "Käivita häire kui andur muutub kättesaamatuks."
    					}
    				}
    			}
    		}
    	},
    	codes: {
    		cards: {
    			codes: {
    				title: "Koodid",
    				description: "Valvestuskoodide muutmine.",
    				fields: {
    					code_arm_required: {
    						heading: "Valvestamine koodiga",
    						description: "Valvestamiseks tuleb sisestada kood"
    					},
    					code_disarm_required: {
    						heading: "Valvest vabastamise kood",
    						description: "Valvest vabastamiseks tulem sisestada kood"
    					},
    					code_format: {
    						heading: "Koodi vorming",
    						description: "Kasutajaliidese koodi tüübid.",
    						code_format_number: "PIN kood",
    						code_format_text: "Salasõna"
    					}
    				}
    			},
    			user_management: {
    				title: "Kasutajate haldus",
    				description: "Igal kasutajal on oma juhtkood.",
    				no_items: "Kasutajaid pole määratud",
    				table: {
    					remarks: "Märkused",
    					administrator: "Haldaja"
    				},
    				actions: {
    					new_user: "Uus kasutaja"
    				}
    			},
    			new_user: {
    				title: "Lisa uus kasutaja",
    				description: "Valvesüsteemi kasutaja lisamine.",
    				fields: {
    					name: {
    						heading: "Nimi",
    						description: "Kasutaja nimi."
    					},
    					code: {
    						heading: "Valvestuskood",
    						description: "Selle kasutaja kood."
    					},
    					confirm_code: {
    						heading: "Koodi kinnitamine",
    						description: "Sisesta sama kood uuesti."
    					},
    					is_admin: {
    						heading: "Kasutajal on haldusõigused",
    						description: "Kasutaja saab teha muudatusi."
    					},
    					can_arm: {
    						heading: "Tohib valvestada",
    						description: "Koodi sisestamine valvestab."
    					},
    					can_disarm: {
    						heading: "Tohib valvest maha võtta",
    						description: "Koodi sisestamine võtab valvest maha."
    					},
    					is_override_code: {
    						heading: "Alistuskood",
    						description: "Koodi sisestamine käivitab kohese häire"
    					}
    				},
    				errors: {
    					no_name: "Nimi puudub.",
    					no_code: "Kood peab olema vhemalt 4 tärki.",
    					code_mismatch: "Sisestatud koodid ei klapi."
    				}
    			},
    			edit_user: {
    				title: "Muuda kasutaja sätteid",
    				description: "Muuda kasutaja '{name}' sätteid.",
    				fields: {
    					old_code: {
    						heading: "Kehtiv kood",
    						description: "Kehtiv kood, jäta tühjaks kui ei taha muuta."
    					}
    				}
    			}
    		}
    	},
    	actions: {
    		cards: {
    			notifications: {
    				title: "Teavitused",
    				description: "Halda saadetavaid teavitusi",
    				table: {
    					enabled: "Lubatud",
    					no_items: "Teavitusi pole veel loodud."
    				},
    				actions: {
    					new_notification: "Uus teavitus"
    				}
    			},
    			actions: {
    				title: "Toimingud",
    				description: "Arenduses, mõeldud seadmete lülitamiseks.",
    				table: {
    					no_items: "Toiminguid pole veel määratud."
    				},
    				actions: {
    					new_action: "Uus toiming"
    				}
    			},
    			new_notification: {
    				title: "Loo teavitus",
    				description: "Uue teavituse loomine.",
    				fields: {
    					name: {
    						heading: "Nimi",
    						description: "Teavituse kirjeldus"
    					},
    					event: {
    						heading: "Sündmus",
    						description: "Mille puhul teavitada"
    					},
    					mode: {
    						heading: "Olek",
    						description: "Millises valve olekus teavitada (valikuline)"
    					},
    					title: {
    						heading: "Päis",
    						description: "Teavitussõnumi päis"
    					},
    					message: {
    						heading: "Sisu",
    						description: "Teavitussõnumi tekst"
    					},
    					target: {
    						heading: "Saaja",
    						description: "Seade millele edastada teavitus"
    					}
    				}
    			},
    			new_action: {
    				title: "Loo toiming",
    				description: "Seadme oleku muutmine valve oleku muutmisel.",
    				fields: {
    					name: {
    						heading: "Nimi",
    						description: "Toimingu kirjeldus"
    					},
    					event: {
    						heading: "Sündmus",
    						description: "Millisel juhul käivitada toiming"
    					},
    					mode: {
    						heading: "Olek",
    						description: "Millises valve olekus toiming käivitada (valikuline)"
    					},
    					entity: {
    						heading: "Olem",
    						description: "Toimingu olem"
    					},
    					action: {
    						heading: "Toiming",
    						description: "Olemi toiming",
    						turn_on: "Lülita sisse",
    						turn_off: "Lülita välja"
    					}
    				}
    			}
    		},
    		validation_errors: {
    			no_triggers: "Selle tegevuse käivitamiseks puudub vajalik olek või sündmus.",
    			empty_trigger: "Ühel päästikul puudub oleku või sündmuse tingimus.",
    			invalid_trigger: "Ühel päästikul: {trigger} on vigane väärtus",
    			invalid_mode: "Valve olekule: {mode} on sisestatud vigane väärtus",
    			no_actions: "Sellele toimingule pole määratud tegevust.",
    			no_service: "Ühel toimingutest puudub nõutav teenus.",
    			invalid_service: "Ühele toimingule on omistatud sobimatu teenus: {service}",
    			no_service_data: "Ühel toimingul puuduvad teenuse andmed.",
    			no_entity_in_service_data: "Ühel toimingul puudub teenuse andmetes olemi ID.",
    			no_message_in_service_data: "Ühe toimingu teenuse andmetes puuduvad teenuse andmed."
    		}
    	}
    };
    var et = {
    	common: common$1,
    	components: components$1,
    	panels: panels$1
    };

    var et$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        common: common$1,
        components: components$1,
        panels: panels$1,
        'default': et
    });

    var common$2 = {
    	modes_long: {
    		armed_away: "Ingeschakeld Weg",
    		armed_home: "Ingeschakeld Thuis",
    		armed_night: "Ingeschakeld Nacht",
    		armed_custom_bypass: "Ingeschakeld Aangepast"
    	},
    	modes_short: {
    		armed_away: "Weg",
    		armed_home: "Thuis",
    		armed_night: "Nacht",
    		armed_custom_bypass: "Aangepast"
    	}
    };
    var components$2 = {
    	time_slider: {
    		seconds: "sec",
    		minutes: "min",
    		infinite: "oneindig",
    		none: "geen"
    	},
    	editor: {
    		ui_mode: "Wissel naar UI",
    		yaml_mode: "Wissel naar YAML"
    	}
    };
    var panels$2 = {
    	general: {
    		title: "Algemeen",
    		cards: {
    			general: {
    				description: "Dit paneel definieert enkele instellingen die van toepassing zijn op alle inschakelmodi.",
    				fields: {
    					disarm_after_trigger: {
    						heading: "Uitschakelen na activatie",
    						description: "Nadat de triggertijd is verstreken, schakelt u het alarm uit in plaats van terug te keren naar de ingeschakelde toestand."
    					},
    					enable_mqtt: {
    						heading: "MQTT inschakelen",
    						description: "Allow the alarm panel to be controlled through MQTT."
    					},
    					enable_master: {
    						heading: "Master alarm inschakelen",
    						description: "Creëert een entiteit om alle gebieden tegelijkertijd te besturen."
    					}
    				},
    				actions: {
    					setup_mqtt: "MQTT Configuratie",
    					setup_master: "Master configuratie"
    				}
    			},
    			modes: {
    				title: "Modi",
    				description: "Dit paneel kan worden gebruikt om de inschakelmodi van het alarm in te stellen.",
    				fields: {
    					mode: {
    						armed_away: "Ingeschakeld weg wordt gebruikt als alle mensen het huis hebben verlaten. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, evenals bewegingssensoren in het huis.",
    						armed_home: "Ingeschakeld thuis (ook wel ingeschakeld thuisblijven genoemd) wordt gebruikt bij het instellen van het alarm terwijl er mensen in huis zijn. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, maar bewegingssensoren in het huis worden niet gebruikt.",
    						armed_night: "Ingeschakeld nacht wordt gebruikt bij het instellen van het alarm voordat u gaat slapen. Alle deuren en ramen die toegang geven tot het huis worden bewaakt, en geselecteerde bewegingssensoren (beneden) in het huis.",
    						armed_custom_bypass: "Een extra modus om uw eigen beveiligingsperimeter te definiëren.",
    						enabled: "Enabled",
    						disabled: "Disabled"
    					},
    					exit_delay: {
    						heading: "Vertrek vertraging",
    						description: "Bij het inschakelen van het alarm zullen de sensoren binnen deze tijdsperiode het alarm nog niet activeren."
    					},
    					entry_delay: {
    						heading: "Binnenkomst vertraging",
    						description: "Vertragingstijd totdat het alarm afgaat nadat een van de sensoren is geactiveerd."
    					},
    					trigger_time: {
    						heading: "Activeer tijd",
    						description: "Tijd waarin de sirene af gaat."
    					}
    				}
    			},
    			mqtt: {
    				title: "MQTT configuratie",
    				description: "Dit paneel kan worden gebruikt voor configuratie van de MQTT-interface.",
    				fields: {
    					state_topic: {
    						heading: "Toestand topic",
    						description: "Topic waarop statusupdates worden gepubliceerd"
    					},
    					command_topic: {
    						heading: "Commando topic",
    						description: "Topic waarop commando's voor in- / uitschakelen worden verzonden."
    					},
    					require_code: {
    						heading: "Vereis code",
    						description: "Vereis dat de code wordt verzonden met de opdracht."
    					},
    					state_payload: {
    						heading: "Configureer de payload per toestand",
    						item: "Definieer een payload voor toestand '{state}'"
    					},
    					command_payload: {
    						heading: "Configureer een payload per commando",
    						item: "Definieer een payload voor commando '{command}'"
    					}
    				}
    			},
    			areas: {
    				title: "Gebieden",
    				description: "Gebieden kunnen worden gebruikt om uw alarmsysteem in meerdere compartimenten op te delen.",
    				no_items: "Er zijn nog geen gebieden gedefinieerd.",
    				table: {
    					remarks: "Opmerkingen",
    					summary: "Dit gebied bevat {summary_sensors} en {summary_automations}.",
    					summary_sensors: "{number} sensoren",
    					summary_automations: "{number} automatiseringen"
    				},
    				actions: {
    					add: "Toevoegen"
    				}
    			}
    		},
    		dialogs: {
    			create_area: {
    				title: "Nieuw gebied",
    				fields: {
    					copy_from: "Kopieer instellingen van"
    				}
    			},
    			edit_area: {
    				title: "Bewerken van gebied '{area}'",
    				name_warning: "Opmerking: als u de naam wijzigt, wordt de entiteits-ID gewijzigd"
    			},
    			remove_area: {
    				title: "Gebied verwijderen?",
    				description: "Weet u zeker dat u dit gebied wilt verwijderen? Dit gebied bevat {sensors} sensoren en {automations} automatiseringen, die ook zullen worden verwijderd."
    			},
    			edit_master: {
    				title: "Master configuratie"
    			},
    			disable_master: {
    				title: "Master uitschakelen?",
    				description: "Weet u zeker dat u het master alarm wilt verwijderen? Dit gebied bevat {automations} automatiseringen, die met deze actie worden verwijderd."
    			}
    		}
    	},
    	sensors: {
    		title: "Sensoren",
    		cards: {
    			sensors: {
    				description: "Momenteel geconfigureerde sensoren. Klik op een entiteit om wijzigingen aan te brengen.",
    				no_items: "Er zijn nog geen sensoren aan het alarm toegevoegd. Zorg ervoor dat u ze eerst toevoegt.",
    				table: {
    					arm_modes: "Inschakelmodi",
    					always_on: "(Altijd)"
    				},
    				filter: {
    					label: "Filter op gebied",
    					no_area: "(Geen gebied)"
    				}
    			},
    			add_sensors: {
    				title: "Voeg sensoren toe",
    				description: "Voeg meer sensoren toe. Zorg ervoor dat uw sensoren een friendly_name hebben, zodat u ze kunt identificeren.",
    				no_items: "Er zijn geen beschikbare HA-entiteiten die voor het alarm kunnen worden geconfigureerd. Zorg ervoor dat u entiteiten van het type binary_sensor opneemt.",
    				actions: {
    					add_to_alarm: "Voeg aan alarm toe",
    					show_all: "Toon alle"
    				}
    			},
    			editor: {
    				title: "Wijzig Sensor",
    				description: "Configureren van de sensorinstellingen van '{entity}'.",
    				fields: {
    					name: {
    						heading: "Naam",
    						description: "Overschrijf vriendelijke naam."
    					},
    					area: {
    						heading: "Gebied",
    						description: "Selecteer een gebied dat deze sensor bevat."
    					},
    					device_type: {
    						heading: "Apparaat Type",
    						description: "Kies een apparaattype om automatisch de juiste instellingen toe te passen.",
    						choose: {
    							door: {
    								name: "Deur",
    								description: "Een deur, poort of andere ingang die wordt gebruikt voor het betreden/verlaten van de woning."
    							},
    							window: {
    								name: "Raam",
    								description: "Een raam of een deur die niet wordt gebruikt om het huis binnen te komen, zoals een balkon."
    							},
    							motion: {
    								name: "Beweging",
    								description: "Aanwezigheidssensor of soortgelijk apparaat met een vertraging tussen activeringen."
    							},
    							tamper: {
    								name: "Sabotage",
    								description: "Detector van verwijdering van sensorkap, glasbreuksensor, enz."
    							},
    							environmental: {
    								name: "Omgeving",
    								description: "Rook/gassensor, lekdetector, etc. (niet gerelateerd aan inbraakbeveiliging)."
    							},
    							other: {
    								name: "Algemeen"
    							}
    						}
    					},
    					always_on: {
    						heading: "Altijd aan",
    						description: "Sensor should always trigger the alarm."
    					},
    					modes: {
    						heading: "Ingeschakelde modi",
    						description: "Alarmmodi waarin deze sensor actief is."
    					},
    					arm_on_close: {
    						heading: "Inschakelen na sluiten",
    						description: "Na deactivering van deze sensor wordt de resterende vertrek vertraging automatisch overgeslagen."
    					},
    					immediate: {
    						heading: "Onmiddelijk",
    						description: "Als deze sensor wordt geactiveerd, wordt het alarm direct geactiveerd in plaats van na de binnenkomst vertraging."
    					},
    					allow_open: {
    						heading: "Sta open toe tijdens het inschakelen",
    						description: "Sta toe dat deze sensor kort na het verlaten actief is, zodat hij het inschakelen niet blokkeert."
    					},
    					trigger_unavailable: {
    						heading: "Activeren indien niet beschikbaar",
    						description: "Wanneer de sensorstatus 'niet beschikbaar' wordt, wordt de sensor geactiveerd."
    					}
    				},
    				actions: {
    					toggle_advanced: "Geavanceerde instellingen",
    					remove: "Verwijder"
    				},
    				errors: {
    					description: "Corrigeer de volgende fouten:",
    					no_area: "Er is geen gebied geselecteerd",
    					no_modes: "Er zijn geen modi geselecteerd waarvoor de sensor actief zou moeten zijn"
    				}
    			}
    		}
    	},
    	codes: {
    		title: "Codes",
    		cards: {
    			codes: {
    				description: "Wijzig de instellingen voor de code.",
    				fields: {
    					code_arm_required: {
    						heading: "Gebruik inschakel code",
    						description: "Vereist een code voor het inschakelen van het alarm"
    					},
    					code_disarm_required: {
    						heading: "Gebruik uitschakelcode",
    						description: "Vereist een code om het alarm uit te schakelen"
    					},
    					code_format: {
    						heading: "Code opmaak",
    						description: "Stelt het invoertype in voor de Lovelace alarmkaart.",
    						code_format_number: "pincode",
    						code_format_text: "wachtwoord"
    					}
    				}
    			},
    			user_management: {
    				title: "Gebruikersbeheer",
    				description: "Elke gebruiker heeft zijn eigen code om het alarm in/uit te schakelen.",
    				no_items: "Er zijn nog geen gebruikers",
    				table: {
    					remarks: "Opmerkingen",
    					administrator: "Beheerder"
    				},
    				actions: {
    					new_user: "nieuwe gebruiker"
    				}
    			},
    			new_user: {
    				title: "Maak een nieuwe gebruiker aan",
    				description: "Gebruikers kunnen worden aangemaakt om toegang te verlenen tot het bedienen van het alarm.",
    				fields: {
    					name: {
    						heading: "Naam",
    						description: "Naam van de gebruiker."
    					},
    					code: {
    						heading: "Code",
    						description: "Code voor deze gebruiker."
    					},
    					confirm_code: {
    						heading: "Bevestig de code",
    						description: "Herhaal de code."
    					},
    					is_admin: {
    						heading: "Gebruiker is beheerder",
    						description: "Sta de gebruiker toe om wijzigingen aan te brengen"
    					},
    					can_arm: {
    						heading: "Code toestaan voor inschakeling",
    						description: "Door deze code in te voeren, wordt het alarm geactiveerd"
    					},
    					can_disarm: {
    						heading: "Code toestaan voor uitschakelen",
    						description: "Door deze code in te voeren, wordt het alarm gedeactiveerd"
    					},
    					is_override_code: {
    						heading: "Is een forceer code",
    						description: "Als u deze code invoert, wordt het alarm geforceerd geactiveerd"
    					}
    				},
    				errors: {
    					no_name: "Geen naam opgegeven.",
    					no_code: "Code moet minimaal 4 tekens/cijfers bevatten.",
    					code_mismatch: "De codes komen niet overeen."
    				}
    			},
    			edit_user: {
    				title: "Wijzig Gebruiker",
    				description: "Wijzig de configuratie voor gebruiker '{name}'.",
    				fields: {
    					old_code: {
    						heading: "Huidige code",
    						description: "Huidige code, laat leeg om ongewijzigd te laten."
    					}
    				}
    			}
    		}
    	},
    	actions: {
    		title: "Acties",
    		cards: {
    			notifications: {
    				title: "Meldingen",
    				description: "Met dit paneel kunt u meldingen beheren die moeten worden verzonden tijdens een bepaalde alarmgebeurtenis",
    				table: {
    					enabled: "Ingeschakeld",
    					no_items: "Er zijn nog geen notificaties aangemaakt."
    				},
    				actions: {
    					new_notification: "nieuwe melding"
    				},
    				filter: {
    					label: "Filter op gebied",
    					no_area: "Alarm master"
    				}
    			},
    			actions: {
    				description: "Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de status van het alarm veranderd.",
    				table: {
    					no_items: "Er zijn nog geen acties gemaakt."
    				},
    				actions: {
    					new_action: "nieuwe actie"
    				}
    			},
    			new_notification: {
    				title: "Maak een melding",
    				description: "Maak een nieuwe melding.",
    				fields: {
    					name: {
    						heading: "Naam",
    						description: "Beschrijving voor deze melding"
    					},
    					event: {
    						heading: "Gebeurtenis",
    						description: "Wanneer moet de melding worden verzonden"
    					},
    					mode: {
    						heading: "Mode",
    						description: "Beperk de actie tot specifieke inschakel modi (optioneel)"
    					},
    					title: {
    						heading: "Titel",
    						description: "Titel voor het meldingsbericht"
    					},
    					message: {
    						heading: "Bericht",
    						description: "Inhoud van het meldingsbericht"
    					},
    					target: {
    						heading: "Doel",
    						description: "Apparaat om het push-bericht naar te sturen"
    					}
    				}
    			},
    			new_action: {
    				title: "Maak een actie",
    				description: "Dit paneel kan worden gebruikt om een apparaat te schakelen wanneer de alarmstatus verandert.",
    				fields: {
    					name: {
    						heading: "Naam",
    						description: "Beschrijving voor deze actie"
    					},
    					event: {
    						heading: "Gebeurtenis",
    						description: "Wanneer moet de actie worden uitgevoerd"
    					},
    					area: {
    						heading: "Gebied",
    						description: "Het gebied waarop de gebeurtenis van toepassing is, laat leeg om het algemene alarm te selecteren."
    					},
    					mode: {
    						heading: "Mode",
    						description: "Beperk de actie tot specifieke inschakel modi (optioneel)"
    					},
    					entity: {
    						heading: "Entiteit",
    						description: "Entiteit om actie op uit te voeren"
    					},
    					action: {
    						heading: "Actie",
    						description: "Actie die op de entiteit moet worden uitgevoerd",
    						turn_on: "Zet aan",
    						turn_off: "Zet uit"
    					}
    				}
    			}
    		},
    		validation_errors: {
    			no_triggers: "Er is geen toestand of gebeurtenis voorzien voor het activeren van deze automatisering.",
    			empty_trigger: "Voor een van de triggers is geen status of gebeurtenis opgegeven.",
    			invalid_trigger: "Een van de triggers heeft een ongeldige waarde: {trigger}",
    			invalid_mode: "Ongeldige invoer opgegeven voor 'mode': {mode}",
    			no_actions: "Er zijn geen acties ingesteld uit te voeren door deze automatisering.",
    			no_service: "Een van de acties mist een service.",
    			invalid_service: "Er is een ongeldige servicenaam opgegeven voor een van de acties: {service}",
    			no_service_data: "Voor een van de acties zijn geen servicegegevens opgegeven.",
    			no_entity_in_service_data: "Er is geen entity_id opgegeven in de service_data van een van de acties.",
    			no_message_in_service_data: "Er is geen bericht opgegeven in de service_data van een van de acties."
    		}
    	}
    };
    var nl = {
    	common: common$2,
    	components: components$2,
    	panels: panels$2
    };

    var nl$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        common: common$2,
        components: components$2,
        panels: panels$2,
        'default': nl
    });

    var common$3 = {
    	modes_long: {
    		armed_away: "Activée en mode absence",
    		armed_home: "Activée en mode présence",
    		armed_night: "Activée en mode nuit",
    		armed_custom_bypass: "Activée en mode personnalisé"
    	},
    	modes_short: {
    		armed_away: "Absence",
    		armed_home: "Présence",
    		armed_night: "Nuit",
    		armed_custom_bypass: "Personnalisé"
    	}
    };
    var components$3 = {
    	time_slider: {
    		seconds: "sec",
    		minutes: "min",
    		infinite: "infini",
    		none: "Aucune"
    	},
    	editor: {
    		ui_mode: "Afficher l'éditeur visuel",
    		yaml_mode: "Afficher l'éditeur de code"
    	}
    };
    var panels$3 = {
    	general: {
    		cards: {
    			general: {
    				title: "Paramètres généraux",
    				description: "Ce panneau définit les paramètres globaux de l'alarme.",
    				fields: {
    					disarm_after_trigger: {
    						heading: "Désactivation après déclenchement",
    						description: "Lors que le temps de fonctionnement de la sirène est écoulé, désactive l'alarme au lieu de la réactiver."
    					},
    					enable_mqtt: {
    						heading: "Utilisation avec MQTT",
    						description: "Permet au panneau d'alarme d'être contrôlé via MQTT."
    					},
    					enable_master: {
    						heading: "Activation de commande centralisée",
    						description: "Créer une entité pour piloter toutes les zone en même temps."
    					}
    				},
    				actions: {
    					setup_mqtt: "Configuration MQTT",
    					setup_master: "Configuration pricipale"
    				}
    			},
    			modes: {
    				title: "Modes",
    				description: "Ce panneau définit le mode de gestion pour chaque type d'activation.",
    				fields: {
    					mode: {
    						armed_away: "Ce mode sera utilisé lorsque toutes les personnes auront quitté la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, les détecteurs de mouvement à l'intérieur de la maison seront opérationnels.",
    						armed_home: "Ce mode sera utilisée lorsque des personnes sont dans la maison. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées (périmétrie), les détecteurs de mouvement à l'intérieur de la maison seront inopérants.",
    						armed_night: "Ce mode sera utilisée lors du réglage de l'alarme avant de s'endormir. Toutes les portes et fenêtres permettant l'accès à la maison seront surveillées, et les capteurs de mouvement sélectionnés (ex : rez de chaussée) dans la maison seront opérationnels.",
    						armed_custom_bypass: "ce mode supplémentaire permet de définir votre propre périmètre de sécurité.",
    						enabled: "Actif",
    						disabled: "Inactif"
    					},
    					exit_delay: {
    						heading: "Délai pour sortir",
    						description: "Lors de l'activation, pendant cette période, les capteurs ne déclencheront pas l'alarme."
    					},
    					entry_delay: {
    						heading: "Délai pour entrer",
    						description: "Temps d'attente avant que l'alarme ne se déclenche après détection d'un des capteurs."
    					},
    					trigger_time: {
    						heading: "Temps de fonctionnement",
    						description: "Temps de fonctionnement de la sirène"
    					}
    				}
    			},
    			mqtt: {
    				title: "Configuration MQTT",
    				description: "Ce panneau peut être utilisé pour la configuration de l'interface MQTT.",
    				fields: {
    					state_topic: {
    						heading: "Etat de données",
    						description: "Donnée sur laquelle les mises à jour d'état sont publiées"
    					},
    					command_topic: {
    						heading: "Commande de donnée",
    						description: "Donnée sur laquelle les commandes d'armement / désarmement sont envoyées."
    					},
    					require_code: {
    						heading: "Code requis",
    						description: "Exige que le code soit envoyé avec la commande."
    					},
    					state_payload: {
    						heading: "Configurer une valeur par état",
    						item: "Définir une valeur par état '{state}'"
    					},
    					command_payload: {
    						heading: "Configurer une valeur par commande",
    						item: "Définir une valeur par commande '{command}'"
    					}
    				}
    			},
    			areas: {
    				title: "Zones",
    				description: "Les zones peuvent être utilisées pour diviser votre système d'alarme en plusieurs secteurs.",
    				no_items: "Il n'y a pas encore de zones définies.",
    				table: {
    					remarks: "Remarque",
    					summary: "Cette zone contient des {sensors} capteurs et {automations} automatisations."
    				},
    				actions: {
    					add: "Ajouter"
    				}
    			}
    		},
    		dialogs: {
    			create_area: {
    				title: "Nouvelle zone"
    			},
    			edit_area: {
    				title: "Editer la zone '{area}'",
    				name_warning: "Note: Changer le nom changera l'entity ID"
    			},
    			remove_area: {
    				title: "Suppression de zone?",
    				description: "Etes vous sur de vouloir supprimer cette zone? Cette zone contient {sensors} des capteurs et {automations} automatisations, qui seront également supprimés."
    			},
    			edit_master: {
    				title: "Configuration principale"
    			},
    			disable_master: {
    				title: "Désactiver la configuration principale?",
    				description: "Etes vous sur de vouloir supprimer la configuration principale? Cette zone contient {automations} automatisations, qui seront également supprimées."
    			}
    		}
    	},
    	capteurs: {
    		cards: {
    			sensors: {
    				title: "Capteurs",
    				description: "Capteurs actuellement configurés. Cliquez sur une entité pour apporter des modifications.",
    				no_items: "Il n'y a pas encore de capteur ajouté à l'alarme. Assurez-vous de les ajouter d'abord.",
    				table: {
    					arm_modes: "Type d'activation",
    					always_on: "(Toujours)"
    				}
    			},
    			add_sensors: {
    				title: "Ajouter un capteur",
    				description: "Ajoutez plus de capteurs. Assurez-vous que vos capteurs ont un nom personnalisé afin de pouvoir les identifier.",
    				no_items: "Aucune entité HA disponible ne peut être configurée pour l'alarme. Assurez-vous d'inclure les entités de type binary_sensor.",
    				actions: {
    					add_to_alarm: "Ajouter à l'alarme",
    					show_all: "Tout montrer"
    				}
    			},
    			editor: {
    				title: "Editer un capteur",
    				description: "Configurer les paramètres du capteur '{entity}'.",
    				fields: {
    					name: {
    						heading: "Nom",
    						description: "Remplacer le nom personnalisé (friendly name)."
    					},
    					area: {
    						heading: "Zone",
    						description: "Selectionner une zone contenant ce capteur."
    					},
    					device_type: {
    						heading: "Type de détection",
    						description: "Choisissez un type de détection pour appliquer automatiquement les paramètres appropriés.",
    						choose: {
    							door: {
    								name: "Porte",
    								description: "Une porte, un portail ou une autre entrée utilisée pour entrer / sortir de la maison."
    							},
    							window: {
    								name: "Fenêtre",
    								description: "Une fenêtre, ou une porte non utilisée pour entrer dans la maison comme un balcon."
    							},
    							motion: {
    								name: "Mouvement",
    								description: "Capteur de présence ou appareil similaire présentant un délai entre les activations."
    							},
    							tamper: {
    								name: "Effraction",
    								description: "Détection d'arrachage du capteur, capteur de bris de verre, etc.."
    							},
    							environmental: {
    								name: "Détecteur Environmental",
    								description: "Détecteur de fumée / gaz, détecteur de fuite, etc. (non lié à la protection anti-effraction)."
    							},
    							other: {
    								name: "Générique"
    							}
    						}
    					},
    					always_on: {
    						heading: "Toujours en service",
    						description: "Le capteur doit toujours déclencher l'alarme."
    					},
    					modes: {
    						heading: "Mode possible",
    						description: "Modes d'alarme dans lesquels ce capteur est actif."
    					},
    					arm_on_close: {
    						heading: "Activer après fermeture",
    						description: "Après la désactivation de ce capteur, le délai de sortie restant sera automatiquement ignoré."
    					},
    					immediate: {
    						heading: "Immédiat",
    						description: "L'activation de ce capteur déclenchera l'alarme immédiatement plutôt qu'après le délai d'entrée."
    					},
    					allow_open: {
    						heading: "Autoriser l'ouverture lors de l'activation",
    						description: "Permet à ce capteur d'être actif, peu de temps après votre départ afin qu'il ne bloque pas l'armement."
    					},
    					trigger_unavailable: {
    						heading: "Déclenchement lorsqu'il n'est pas disponible",
    						description: "Lorsque l'état du capteur devient `` indisponible '', cela activera le capteur."
    					}
    				},
    				actions: {
    					toggle_advanced: "Paramètres avancées",
    					remove: "Supprimer"
    				},
    				errors: {
    					description: "Veuillez corriger les erreurs suivantes:",
    					no_area: "Aucune zone n'est sélectionnée",
    					no_modes: "Aucun mode sélectionné pour lequel le capteur doit être actif"
    				}
    			}
    		}
    	},
    	codes: {
    		cards: {
    			codes: {
    				title: "Codes",
    				description: "Gestion des paramètres des codes.",
    				fields: {
    					code_arm_required: {
    						heading: "Utiliser un code pour l'activation",
    						description: "Code requis pour l'activation de l'alarme"
    					},
    					code_disarm_required: {
    						heading: "Utiliser un code pour la désactivation",
    						description: "Code requis pour la désactivation de l'alarme"
    					},
    					code_format: {
    						heading: "Format du code",
    						description: "Définit le type d'entrée pour la carte d'alarme Lovelace.",
    						code_format_number: "pincode",
    						code_format_text: "password"
    					}
    				}
    			},
    			user_management: {
    				title: "Gestion des utilisateurs",
    				description: "Chaque utilisateur a son propre code pour activer / désactiver l'alarme.",
    				no_items: "Il n'y a aucun utilisateur de défini",
    				table: {
    					remarks: "Remarque",
    					administrator: "Administrateur"
    				},
    				actions: {
    					new_user: "Nouvel utilisateur"
    				}
    			},
    			new_user: {
    				title: "Créer un nouvel utilisateur",
    				description: "Des utilisateurs peuvent être créés pour donner accès au fonctionnement de l'alarme.",
    				fields: {
    					name: {
    						heading: "Nom",
    						description: "Nom de l'utilisateur."
    					},
    					code: {
    						heading: "Code",
    						description: "Code personnel de l'utilisateur."
    					},
    					confirm_code: {
    						heading: "Confirmation du code",
    						description: "Répèter le  code."
    					},
    					is_admin: {
    						heading: "L'utilisateur est aussi administrateur",
    						description: "Autorise l'utilisateur à effectuer des changements."
    					},
    					can_arm: {
    						heading: "Demande de code pour l'activation",
    						description: "Entrer ce code pour activer l'alarme."
    					},
    					can_disarm: {
    						heading: "Demande de code pour désactivation",
    						description: "Entrer ce code pour désactiver l'alarme."
    					},
    					is_override_code: {
    						heading: "Code de sécurité",
    						description: "La saisie de ce code forcera l'activation l'alarme."
    					}
    				},
    				errors: {
    					no_name: "Aucun nom saisi.",
    					no_code: "Le code doit contenir 4 caractères/chiffres minimum.",
    					code_mismatch: "Les codes sont différents."
    				}
    			},
    			edit_user: {
    				title: "Editer l'utilisateur",
    				description: "Changer la  configuration pour l'utilisateur '{name}'.",
    				fields: {
    					old_code: {
    						heading: "Code utilisé",
    						description: "Code actuel, laissez vide pour ne rien changer."
    					}
    				}
    			}
    		}
    	},
    	actions: {
    		cards: {
    			notifications: {
    				title: "Notifications",
    				description: "À l'aide de ce panneau, vous pouvez gérer les notifications à envoyer lors d'un évènement d'alarme",
    				table: {
    					enabled: "Active",
    					no_items: "Il n'y a aucune notification de  créée."
    				},
    				actions: {
    					new_notification: "Nouvelle notification"
    				}
    			},
    			actions: {
    				title: "Actions",
    				description: "Ce panneau est encore en développement. Il sera utilisé pour changer d'état les appareils de votre choix.",
    				table: {
    					no_items: "Il n'y a aucune action de créer."
    				},
    				actions: {
    					new_action: "Nouvelle action"
    				}
    			},
    			new_notification: {
    				title: "Créer une notification",
    				description: "Créer une nouvelle notification.",
    				fields: {
    					name: {
    						heading: "Nom",
    						description: "Description de la notification"
    					},
    					event: {
    						heading: "Evènement",
    						description: "Détermine quand la notification doit être envoyée"
    					},
    					mode: {
    						heading: "Mode",
    						description: "Limite la notification à un mode spécifique (optionnel)"
    					},
    					title: {
    						heading: "Titre",
    						description: "Titre du message de la notification"
    					},
    					message: {
    						heading: "Message",
    						description: "Contenu du message de la notification"
    					},
    					target: {
    						heading: "Cible",
    						description: "Appareil recevant le message"
    					}
    				}
    			},
    			new_action: {
    				title: "Créer une action",
    				description: "Ce panneau peut être utilisé pour commuter un appareil lorsque l'état de l'alarme change.",
    				fields: {
    					name: {
    						heading: "Nom",
    						description: "Description de  l'action"
    					},
    					event: {
    						heading: "Evènement",
    						description: "Détermine quand l'action doit être exécutée"
    					},
    					area: {
    						heading: "Zone",
    						description: "Zone pour laquelle l'évènement s'applique, laissez vide pour sélectionner l'alarme globale."
    					},
    					mode: {
    						heading: "Mode",
    						description: "Limite l'action à un mode spécifique (optionnel)"
    					},
    					entity: {
    						heading: "Entité",
    						description: "Entité sur laquelle effectuer une action"
    					},
    					action: {
    						heading: "Action",
    						description: "Action à exécuter sur l'entité",
    						turn_on: "Mettre à on",
    						turn_off: "Mettre à off"
    					}
    				}
    			}
    		},
    		validation_errors: {
    			no_triggers: "Aucun état ou évènement prévu pour le déclenchement de cette automatisation.",
    			empty_trigger: "L'un des déclencheurs n'a aucun état ou évènement fourni.",
    			invalid_trigger: "L'un des déclencheurs a une valeur non valide: {trigger}",
    			invalid_mode: "Entrée non valide fournie par  le 'mode': {mode}",
    			no_actions: "Aucune action n'est prévue pour être effectuée par cette automatisation.",
    			no_service: "Il manque un service dans l’une des actions.",
    			invalid_service: "Un nom de service non valide a été fourni pour l'une des actions: {service}",
    			no_service_data: "Aucune donnée de service n'a été fournie pour l'une des actions.",
    			no_entity_in_service_data: "Aucun entity_id n'a été fourni dans le service_data de l'une des actions.",
    			no_message_in_service_data: "Aucun message n'a été fourni dans le service_data de l'une des actions."
    		}
    	}
    };
    var fr = {
    	common: common$3,
    	components: components$3,
    	panels: panels$3
    };

    var fr$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        common: common$3,
        components: components$3,
        panels: panels$3,
        'default': fr
    });

    var common$4 = {
    	modes_long: {
    		armed_away: "Modalità 'fuori casa' attiva",
    		armed_home: "Modalità 'in casa' attiva",
    		armed_night: "Modalità 'notte' attiva",
    		armed_custom_bypass: "Modalità 'personalizzato' attiva"
    	},
    	modes_short: {
    		armed_away: "Fuori casa",
    		armed_home: "In casa",
    		armed_night: "Notte",
    		armed_custom_bypass: "Personalizzato"
    	}
    };
    var components$4 = {
    	time_slider: {
    		seconds: "sec",
    		minutes: "min",
    		infinite: "infinito",
    		none: "niente"
    	},
    	editor: {
    		ui_mode: "Passa a UI",
    		yaml_mode: "Passa a YAML"
    	}
    };
    var panels$4 = {
    	general: {
    		cards: {
    			general: {
    				title: "Impostazioni Generali",
    				description: "Questo pannello definisce alcune impostazioni da applicare alle modalità di allarme.",
    				fields: {
    					trigger_time: {
    						heading: "Tempo di attivazione",
    						description: "Tempo durante il quale suonerà la sirena"
    					},
    					disarm_after_trigger: {
    						heading: "Disattiva allarme dopo l'attivazione",
    						description: "Dopo che il tempo di attivazione è scaduto, disattivare l'allarme invece di tornare allo stato inserito."
    					},
    					enable_mqtt: {
    						heading: "Abilita MQTT",
    						description: "Permetti al pannello allarme di essere controllato attraverso MQTT."
    					}
    				},
    				actions: {
    					setup_mqtt: "Configurazione MQTT"
    				}
    			},
    			common: {
    				fields: {
    					leave_time: {
    						heading: "Tempo di preattivazione",
    						description: "Quando si attiva l'allarme, entro questo periodo di tempo i sensori non attiveranno ancora l'allarme."
    					},
    					entry_time: {
    						heading: "Ritardo di attivazione",
    						description: "Tempo di ritardo fino allo scatto dell'allarme dopo l'attivazione di uno dei sensori."
    					}
    				}
    			},
    			armed_away: {
    				description: "Modalità 'fuori casa': da utilizzare quando tutte le persone lasciano la casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, così come i sensori di movimento all'interno della casa."
    			},
    			armed_home: {
    				description: "Modalità 'in casa': da utilizzare quando si attiva l'allarme mentre le persone sono in casa. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi, ma non i sensori di movimento all'interno della casa."
    			},
    			armed_night: {
    				description: "Modalità 'notte': da utilizzare quando si imposta la sveglia prima di andare a dormire. Tutti i sensori di porte e finestre che consentono l'accesso alla casa saranno attivi e sensori di movimento selezionati (ad esempio al piano di sotto) nella casa."
    			},
    			armed_custom: {
    				description: "Modalità 'personalizzato': da utilizzare per definire una modalità di allarme specifica per le esigenze dell'utilizzatore."
    			},
    			mqtt: {
    				title: "Configurazione MQTT",
    				description: "Questo pannello può essere usato per le impostazioni MQTT.",
    				fields: {
    					state_topic: {
    						heading: "Topic di stato",
    						description: "Topic su cui vengono pubblicati gli aggiornamenti di stato"
    					},
    					command_topic: {
    						heading: "Topic di comando",
    						description: "Topic su cui vengono inviati i comandi di inserimento / disinserimento."
    					},
    					require_code: {
    						heading: "Richiedi Codice",
    						description: "Richiedi il codice da inviare con il comando."
    					},
    					state_payload: {
    						heading: "Configura payload per stato",
    						item: "Definisci un payload per lo stato '{state}'"
    					},
    					command_payload: {
    						heading: "Configura payload per comando",
    						item: "Definisci un payload per il comando '{command}'"
    					}
    				}
    			}
    		}
    	},
    	sensors: {
    		cards: {
    			sensors: {
    				title: "Sensori",
    				description: "Sensori attualmente configurati. Clicca sull'entità per modificare.",
    				no_items: "Non ci sono ancora sensori aggiunti a questo allarme. Assicurati di aggiungerli prima.",
    				table: {
    					arm_modes: "Modalità di attivazione",
    					always_on: "(Sempre)"
    				}
    			},
    			add_sensors: {
    				title: "Aggiungi Sensori",
    				description: "Aggiungi più sensori. Assicurati che i sensori abbiano un friendly_name (nome amichevole), in modo da identificarli più facilmente.",
    				no_items: "Non ci sono entità disponibili che possono essere configurate con l'allarme. Assicurati di includere entità del tipo binary_sensor (sensore binario).",
    				actions: {
    					add_to_alarm: "aggiungi all'allarme",
    					show_all: "Mostra tutti"
    				}
    			},
    			editor: {
    				title: "Modifica Sensore",
    				description: "Configura le impostazioni del sensore '{entity}'.",
    				fields: {
    					name: {
    						heading: "Nome",
    						description: "Sovrascrivi friendly name."
    					},
    					always_on: {
    						heading: "Sempre attivo",
    						description: "Il sensore attiverà sempre l'allarme."
    					},
    					modes: {
    						heading: "Modalità attive",
    						description: "Modalità di allarme in cui il sensore risulta collegato."
    					},
    					immediate: {
    						heading: "Immediato",
    						description: "Il sensore si attiva saltando il ritardo."
    					},
    					allow_open: {
    						heading: "Permetti apertura",
    						description: "Consentire a questo sensore di rimanere attivo poco dopo essere usciti."
    					},
    					trigger_unavailable: {
    						heading: "Fai scattare l'allarme quando non disponibile",
    						description: "L'allarme scatterà quando lo stato del sensore diverrà 'non disponibile'."
    					}
    				}
    			}
    		}
    	},
    	codes: {
    		cards: {
    			codes: {
    				title: "Codici",
    				description: "Modifica le impostazioni dei codici.",
    				fields: {
    					code_arm_required: {
    						heading: "Usa codice d'attivazione",
    						description: "Richiedi un codice per attivare l'allarme"
    					},
    					code_disarm_required: {
    						heading: "Usa codice di disattivazione",
    						description: "Richiedi un codice per disattivare l'allarme"
    					},
    					code_format: {
    						heading: "Formato del codice",
    						description: "Imposta il tipo di codice da digitare nella card di Lovelace.",
    						code_format_number: "codice numerico",
    						code_format_text: "password"
    					}
    				}
    			},
    			user_management: {
    				title: "Gestione utente",
    				description: "Ogni utente ha il suo codice per attivare/disattivare l'allarme.",
    				no_items: "Non è stato creato nessun utente per ora",
    				table: {
    					remarks: "Ruolo",
    					administrator: "Amministratore"
    				},
    				actions: {
    					new_user: "nuovo utente"
    				}
    			},
    			new_user: {
    				title: "Crea nuovo utente",
    				description: "Gli utenti potranno operare con l'allarme.",
    				fields: {
    					name: {
    						heading: "Nome",
    						description: "Nome dell'utente."
    					},
    					code: {
    						heading: "Codice operativo",
    						description: "Codice che utilizzerà quest'utente."
    					},
    					confirm_code: {
    						heading: "Ripeti codice operativo",
    						description: "Ripeti il codice operativo scelto."
    					},
    					is_admin: {
    						heading: "L'utente è un amministratore",
    						description: "Ciò consente al utente di effettuare modifiche al sistema di allarme"
    					},
    					can_arm: {
    						heading: "Utilizza codice per attivare l'allarme",
    						description: "Utilizza codice per attivare l'allarme"
    					},
    					can_disarm: {
    						heading: "Utilizza codice per disattivare l'allarme",
    						description: "Utilizza codice per disattivare l'allarme"
    					},
    					is_override_code: {
    						heading: "E' un codice di forzatura",
    						description: "Inserendo questo codice forzerai lo stato di attivazione dell'allarme"
    					}
    				},
    				errors: {
    					no_name: "Non hai inserito il nome.",
    					no_code: "Il codice deve avere almeno 4 numeri o caratteri.",
    					code_mismatch: "Il codice scelto non combacia, verifica il codice inserito."
    				}
    			},
    			edit_user: {
    				title: "Modifica Utente",
    				description: "Cambia impostazioni per l'utente '{name}'.",
    				fields: {
    					old_code: {
    						heading: "Modifica Codice",
    						description: "Codice attuale, lascia vuoto per non modificare."
    					}
    				}
    			}
    		}
    	},
    	actions: {
    		cards: {
    			notifications: {
    				title: "Notifiche",
    				description: "Con questo pannello puoi gestire le notifiche da inviare quanto accade un determinato evento",
    				table: {
    					enabled: "Abilitato",
    					no_items: "Non è stata creata nessuna notifica per ora."
    				},
    				actions: {
    					new_notification: "nuova notifica"
    				}
    			},
    			actions: {
    				title: "Azioni",
    				description: "Questo pannello è in fase di sviluppo. Sarà usato per cambiare lo stato di una o più entità.",
    				table: {
    					no_items: "Non è stata creata nessuna azione per ora."
    				},
    				actions: {
    					new_action: "nuova azione"
    				}
    			},
    			new_notification: {
    				title: "Crea notifica",
    				description: "Crea una nuova notifica.",
    				fields: {
    					name: {
    						heading: "Nome",
    						description: "Descrizione della notifica"
    					},
    					event: {
    						heading: "Evento",
    						description: "Quando questa notifica deve essere inviata"
    					},
    					mode: {
    						heading: "Modalità",
    						description: "Limita ad una specifica modalità di allarme (opzionale)"
    					},
    					title: {
    						heading: "Titolo",
    						description: "Titolo per il messaggio di notifica"
    					},
    					message: {
    						heading: "Messaggio",
    						description: "Contenuto del messaggio di notifica"
    					},
    					target: {
    						heading: "Destinatario",
    						description: "Dispositivo a cui inviare il messaggio di notifica"
    					}
    				}
    			},
    			new_action: {
    				title: "Crea azione",
    				description: "Questo pannello può essere usato per cambiare lo stato di un entità quando lo stato dell'allarme cambia.",
    				fields: {
    					name: {
    						heading: "Nome",
    						description: "Descrizione dell'azione"
    					},
    					event: {
    						heading: "Evento",
    						description: "Quando questa azione deve essere eseguita"
    					},
    					mode: {
    						heading: "Modalità",
    						description: "Limita ad una specifica modalità di allarme (opzionale)"
    					},
    					entity: {
    						heading: "Entità",
    						description: "Entità su cui eseguire l'azione"
    					},
    					action: {
    						heading: "Azione",
    						description: "Azione che deve eseguire l'entità",
    						turn_on: "Accendi",
    						turn_off: "Spegni"
    					}
    				}
    			}
    		},
    		validation_errors: {
    			no_triggers: "Nessuno evento o modalità scelto per l'attivazione di questa azione.",
    			empty_trigger: "Evento o modalità mancante per questa azione.",
    			invalid_trigger: "Uno degli eventi selezionati ha un valore non valido: {trigger}",
    			invalid_mode: "Input selezionato non valido per la modalità: {mode}",
    			no_actions: "Nessuna azione è stata scelta per questa azione.",
    			no_service: "Una di queste azioni ha un servizio mancante.",
    			invalid_service: "Il nome del servizio non è valido per una delle azioni: {service}",
    			no_service_data: "Dati del servizio non inseriti per una delle azioni.",
    			no_entity_in_service_data: "Nessun entity_id è stata inserita in service_data di una delle azioni.",
    			no_message_in_service_data: "Nessun messaggio è stato inserito nel service_data di una delle azioni."
    		}
    	}
    };
    var it = {
    	common: common$4,
    	components: components$4,
    	panels: panels$4
    };

    var it$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        common: common$4,
        components: components$4,
        panels: panels$4,
        'default': it
    });

    var languages = {
        en: en$1,
        et: et$1,
        nl: nl$1,
        fr: fr$1,
        it: it$1
    };
    function localize(string, language, search = '', replace = '') {
        const lang = language.replace(/['"]+/g, '').replace('-', '_');
        var translated;
        try {
            translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
        }
        catch (e) {
            translated = string.split('.').reduce((o, i) => o[i], languages['en']);
        }
        if (translated === undefined)
            translated = string.split('.').reduce((o, i) => o[i], languages['en']);
        if (search !== '' && replace !== '') {
            if (!Array.isArray(search))
                search = [search];
            if (!Array.isArray(replace))
                replace = [replace];
            for (let i = 0; i < search.length; i++) {
                translated = translated.replace(search[i], replace[i]);
            }
        }
        return translated;
    }

    let TimeSlider = class TimeSlider extends LitElement {
        constructor() {
            super(...arguments);
            this.min = 0;
            this.max = 100;
            this.step = 10;
            this.value = 0;
            this.scaleFactor = 1;
            this.unit = '';
            this.disabled = false;
        }
        firstUpdated() {
            if (this.value > 0 && this.value < 60)
                this.unit = "sec";
            if (this.unit == "min")
                this.scaleFactor = 1 / 60;
            if (this.unit == "min")
                this.step = 1;
        }
        render() {
            return html `
      <div class="container">
        <div class="prefix">
          <slot name="prefix"></slot>
        </div>
        <div class="slider">
          ${this.getSlider()}
        </div>
        <div
          class="value${this.disabled ? ' disabled' : ''}"
          @click=${this.toggleUnit}
        >
          ${this.getValue()}
        </div>
      </div>
    `;
        }
        getValue() {
            let value = Number(Math.round(this.value * this.scaleFactor));
            if (!value && this.zeroValue) {
                return this.zeroValue;
            }
            return `${value} ${this.getUnit()}`;
        }
        getUnit() {
            switch (this.unit) {
                case "sec":
                    return localize("components.time_slider.seconds", this.hass.language);
                case "min":
                    return localize("components.time_slider.minutes", this.hass.language);
                default:
                    return "";
            }
        }
        getSlider() {
            return html `
      <ha-slider
        pin
        min=${Math.round(this.min * this.scaleFactor)}
        max=${Math.round(this.max * this.scaleFactor)}
        step=${this.step}
        value=${Math.round(this.value * this.scaleFactor)}
        ?disabled=${this.disabled}
        @change=${this.updateValue}
      ></ha-slider>
    `;
        }
        updateValue(e) {
            const value = Number(e.target.value);
            this.value = Math.round(value / this.scaleFactor);
        }
        toggleUnit() {
            this.unit = this.unit == "min" ? "sec" : "min";
            this.scaleFactor = (this.unit == "min") ? 1 / 60 : 1;
            this.step = (this.unit == "min") ? 1 : 10;
        }
    };
    TimeSlider.styles = css `
    :host {
      display: flex;
      flex-direction: column;
      min-width: 250px;
    }

    div.container {
      display: grid;
      grid-template-columns: max-content 1fr 60px;
      grid-template-rows: min-content;
      grid-template-areas: 'prefix slider value';
    }

    div.prefix {
      grid-area: prefix;
      display: flex;
      align-items: center;
    }

    div.slider {
      grid-area: slider;
      display: flex;
      align-items: center;
      flex: 1;
    }

    div.value {
      grid-area: value;
      min-width: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
    }

    ha-slider {
      --paper-slider-pin-start-color: var(--primary-color);
      width: 100%;
    }

    .disabled {
      color: var(--disabled-text-color);
    }
  `;
    __decorate([
        property({ type: Number })
    ], TimeSlider.prototype, "min", void 0);
    __decorate([
        property({ type: Number })
    ], TimeSlider.prototype, "max", void 0);
    __decorate([
        property({ type: Number })
    ], TimeSlider.prototype, "step", void 0);
    __decorate([
        property({ type: Number })
    ], TimeSlider.prototype, "value", void 0);
    __decorate([
        property()
    ], TimeSlider.prototype, "scaleFactor", void 0);
    __decorate([
        property({ type: String })
    ], TimeSlider.prototype, "unit", void 0);
    __decorate([
        property({ type: Boolean })
    ], TimeSlider.prototype, "disabled", void 0);
    __decorate([
        property({ type: String })
    ], TimeSlider.prototype, "zeroValue", void 0);
    TimeSlider = __decorate([
        customElement('time-slider')
    ], TimeSlider);

    const VERSION = "1.5.1";
    var EArmModeIcons;
    (function (EArmModeIcons) {
        EArmModeIcons["ArmedAway"] = "hass:car-traction-control";
        EArmModeIcons["ArmedHome"] = "hass:home-outline";
        EArmModeIcons["ArmedNight"] = "hass:weather-night";
        EArmModeIcons["ArmedCustom"] = "hass:star-outline";
    })(EArmModeIcons || (EArmModeIcons = {}));
    var AlarmStates;
    (function (AlarmStates) {
        AlarmStates["STATE_ALARM_DISARMED"] = "disarmed";
        AlarmStates["STATE_ALARM_ARMED_HOME"] = "armed_home";
        AlarmStates["STATE_ALARM_ARMED_AWAY"] = "armed_away";
        AlarmStates["STATE_ALARM_ARMED_NIGHT"] = "armed_night";
        AlarmStates["STATE_ALARM_ARMED_CUSTOM_BYPASS"] = "armed_custom_bypass";
        AlarmStates["STATE_ALARM_PENDING"] = "pending";
        AlarmStates["STATE_ALARM_ARMING"] = "arming";
        AlarmStates["STATE_ALARM_DISARMING"] = "disarming";
        AlarmStates["STATE_ALARM_TRIGGERED"] = "triggered";
    })(AlarmStates || (AlarmStates = {}));
    var AlarmCommands;
    (function (AlarmCommands) {
        AlarmCommands["COMMAND_ALARM_DISARM"] = "disarm";
        AlarmCommands["COMMAND_ALARM_ARM_HOME"] = "arm_home";
        AlarmCommands["COMMAND_ALARM_ARM_AWAY"] = "arm_away";
        AlarmCommands["COMMAND_ALARM_ARM_NIGHT"] = "arm_night";
        AlarmCommands["COMMAND_ALARM_ARM_CUSTOM_BYPASS"] = "arm_custom_bypass";
    })(AlarmCommands || (AlarmCommands = {}));
    var ESensorTypes;
    (function (ESensorTypes) {
        ESensorTypes["Door"] = "door";
        ESensorTypes["Window"] = "window";
        ESensorTypes["Motion"] = "motion";
        ESensorTypes["Tamper"] = "tamper";
        ESensorTypes["Environmental"] = "environmental";
        ESensorTypes["Other"] = "other";
    })(ESensorTypes || (ESensorTypes = {}));
    var ESensorIcons;
    (function (ESensorIcons) {
        ESensorIcons["Door"] = "hass:door-closed";
        ESensorIcons["Window"] = "hass:window-closed";
        ESensorIcons["Motion"] = "hass:motion-sensor";
        ESensorIcons["Tamper"] = "hass:vibrate";
        ESensorIcons["Environmental"] = "hass:fire";
        ESensorIcons["Other"] = "hass:contactless-payment-circle-outline";
    })(ESensorIcons || (ESensorIcons = {}));

    function getDomain(entity) {
        const entity_id = typeof entity == 'string' ? entity : entity.entity_id;
        return String(entity_id.split('.').shift());
    }
    function computeIcon(entity) {
        return Q(entity);
    }
    function prettyPrint(input) {
        input = input.replace('_', ' ');
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
    function computeName(entity) {
        if (!entity)
            return '(unrecognized entity)';
        if (entity.attributes && entity.attributes.friendly_name)
            return entity.attributes.friendly_name;
        else
            return String(entity.entity_id.split('.').pop());
    }
    function Unique(array) {
        return array.filter((v, i, a) => a.indexOf(v) === i);
    }
    function Without(array, item) {
        return array.filter(e => e !== item);
    }
    function pick(obj, keys) {
        if (!obj)
            return {};
        return Object.entries(obj)
            .filter(([key]) => keys.includes(key))
            .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
    }
    function omit(obj, keys) {
        if (!obj)
            return {};
        return Object.entries(obj)
            .filter(([key]) => !keys.includes(key))
            .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
    }
    function IsEqual(obj1, obj2) {
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);
        if (keys1.length !== keys2.length)
            return false;
        for (let key of keys1) {
            if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
                if (IsEqual(obj1[key], obj2[key]))
                    return false;
            }
            else if (obj1[key] !== obj2[key])
                return false;
        }
        return true;
    }
    function showErrorDialog(ev, error) {
        const elem = ev.target;
        C(elem, 'show-dialog', {
            dialogTag: 'error-dialog',
            dialogImport: () => Promise.resolve().then(function () { return errorDialog; }),
            dialogParams: { error: error }
        });
    }
    function handleError(err, ev) {
        let errorMessage = html `
    <b>Something went wrong!</b><br>
    ${err.body.message ? html `${err.body.message}<br><br>` : ''}
    ${err.error}<br><br>
    Please <a href="https://github.com/nielsfaber/alarmo/issues">report</a> the bug.
  `;
        showErrorDialog(ev, errorMessage);
    }
    const commandToState = (command) => {
        switch (command) {
            case AlarmCommands.COMMAND_ALARM_DISARM:
                return AlarmStates.STATE_ALARM_DISARMED;
            case AlarmCommands.COMMAND_ALARM_ARM_HOME:
                return AlarmStates.STATE_ALARM_ARMED_HOME;
            case AlarmCommands.COMMAND_ALARM_ARM_AWAY:
                return AlarmStates.STATE_ALARM_ARMED_AWAY;
            case AlarmCommands.COMMAND_ALARM_ARM_NIGHT:
                return AlarmStates.STATE_ALARM_ARMED_NIGHT;
            case AlarmCommands.COMMAND_ALARM_ARM_CUSTOM_BYPASS:
                return AlarmStates.STATE_ALARM_ARMED_CUSTOM_BYPASS;
            default:
                return undefined;
        }
    };
    const filterState = (state, _config) => {
        if (!state)
            return false;
        switch (state) {
            case AlarmStates.STATE_ALARM_ARMED_AWAY:
                return true; //config.modes[EArmModes.ArmedAway].enabled;
            case AlarmStates.STATE_ALARM_ARMED_HOME:
                return true; //config.modes[EArmModes.ArmedHome].enabled;
            case AlarmStates.STATE_ALARM_ARMED_NIGHT:
                return true; //config.modes[EArmModes.ArmedNight].enabled;
            case AlarmStates.STATE_ALARM_ARMED_CUSTOM_BYPASS:
                return true; //config.modes[EArmModes.ArmedCustom].enabled;
            default:
                return true;
        }
    };
    function Assign(obj, changes) {
        Object.entries(changes).forEach(([key, val]) => {
            if (key in obj && typeof obj[key] == "object" && obj[key] !== null)
                obj = Object.assign(Object.assign({}, obj), { [key]: Assign(obj[key], val) });
            else
                obj = Object.assign(Object.assign({}, obj), { [key]: val });
        });
        return obj;
    }
<<<<<<< HEAD
  `,t([Z({type:Number})],ot.prototype,"min",void 0),t([Z({type:Number})],ot.prototype,"max",void 0),t([Z({type:Number})],ot.prototype,"step",void 0),t([Z({type:Number})],ot.prototype,"value",void 0),t([Z()],ot.prototype,"scaleFactor",void 0),t([Z({type:String})],ot.prototype,"unit",void 0),t([Z({type:Boolean})],ot.prototype,"disabled",void 0),t([Z({type:String})],ot.prototype,"zeroValue",void 0),ot=t([Q("time-slider")],ot);var rt,dt,lt,ct,ht,ut,mt,pt;function gt(e){return function(e){if(!e)return Ce;if(e.attributes.icon)return e.attributes.icon;var t=Oe(e.entity_id);return t in Ne?Ne[t](e):Ee(t,e.state)}(e)}function vt(e){return(e=e.replace("_"," ")).charAt(0).toUpperCase()+e.slice(1)}function _t(e){return e?e.attributes&&e.attributes.friendly_name?e.attributes.friendly_name:String(e.entity_id.split(".").pop()):"(unrecognized entity)"}function ft(e){return e.filter((e,t,a)=>a.indexOf(e)===t)}function bt(e,t){return e?Object.entries(e).filter(([e])=>t.includes(e)).reduce((e,[t,a])=>Object.assign(e,{[t]:a}),{}):{}}function wt(e,t){return e?Object.entries(e).filter(([e])=>!t.includes(e)).reduce((e,[t,a])=>Object.assign(e,{[t]:a}),{}):{}}function yt(e,t){const a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(const i of a)if("object"==typeof e[i]&&"object"==typeof t[i]){if(yt(e[i],t[i]))return!1}else if(e[i]!==t[i])return!1;return!0}function $t(e,t){const a=e.target;Te(a,"show-dialog",{dialogTag:"error-dialog",dialogImport:()=>Promise.resolve().then((function(){return ia})),dialogParams:{error:t}})}function kt(e,t){$t(t,R`
    <b>Something went wrong!</b><br />
    ${e.body.message?R`
          ${e.body.message}<br /><br />
        `:""}
    ${e.error}<br /><br />
    Please <a href="https://github.com/nielsfaber/alarmo/issues">report</a> the bug.
  `)}!function(e){e.ArmedAway="hass:car-traction-control",e.ArmedHome="hass:home-outline",e.ArmedNight="hass:weather-night",e.ArmedCustom="hass:star-outline"}(rt||(rt={})),function(e){e.STATE_ALARM_DISARMED="disarmed",e.STATE_ALARM_ARMED_HOME="armed_home",e.STATE_ALARM_ARMED_AWAY="armed_away",e.STATE_ALARM_ARMED_NIGHT="armed_night",e.STATE_ALARM_ARMED_CUSTOM_BYPASS="armed_custom_bypass",e.STATE_ALARM_PENDING="pending",e.STATE_ALARM_ARMING="arming",e.STATE_ALARM_DISARMING="disarming",e.STATE_ALARM_TRIGGERED="triggered"}(dt||(dt={})),function(e){e.COMMAND_ALARM_DISARM="disarm",e.COMMAND_ALARM_ARM_HOME="arm_home",e.COMMAND_ALARM_ARM_AWAY="arm_away",e.COMMAND_ALARM_ARM_NIGHT="arm_night",e.COMMAND_ALARM_ARM_CUSTOM_BYPASS="arm_custom_bypass"}(lt||(lt={})),function(e){e.Door="door",e.Window="window",e.Motion="motion",e.Tamper="tamper",e.Environmental="environmental",e.Other="other"}(ct||(ct={})),function(e){e.Door="hass:door-closed",e.Window="hass:window-closed",e.Motion="hass:motion-sensor",e.Tamper="hass:vibrate",e.Environmental="hass:fire",e.Other="hass:contactless-payment-circle-outline"}(ht||(ht={})),function(e){e.ArmedAway="armed_away",e.ArmedHome="armed_home",e.ArmedNight="armed_night",e.ArmedCustom="armed_custom_bypass"}(ut||(ut={})),function(e){e.Disarmed="disarmed",e.Armed="armed",e.Triggered="triggered",e.Pending="pending",e.Arming="arming"}(mt||(mt={})),function(e){e.ArmFailure="arm_failure"}(pt||(pt={}));const At=(e,t)=>{if(!e)return!1;switch(e){case dt.STATE_ALARM_ARMED_AWAY:return t[ut.ArmedAway].enabled;case dt.STATE_ALARM_ARMED_HOME:return t[ut.ArmedHome].enabled;case dt.STATE_ALARM_ARMED_NIGHT:return t[ut.ArmedNight].enabled;case dt.STATE_ALARM_ARMED_CUSTOM_BYPASS:return t[ut.ArmedCustom].enabled;default:return!0}};function xt(e,t){return Object.entries(t).forEach(([t,a])=>{e=t in e&&"object"==typeof e[t]&&null!==e[t]?Object.assign(Object.assign({},e),{[t]:xt(e[t],a)}):Object.assign(Object.assign({},e),{[t]:a})}),e}let St=class extends oe{constructor(){super(...arguments),this.label="",this.items=[],this.clearable=!1,this.icons=!1,this.rowRenderer=(e,t,a)=>{!e.firstElementChild&&this.icons?e.innerHTML='\n        <style>\n          paper-icon-item {\n              margin: -10px;\n              padding: 0;\n          }\n          ha-icon {\n              display: flex;\n              flex: 0 0 40px;\n              color: var(--state-icon-color);\n          }\n        </style>\n        <paper-icon-item>\n          <ha-icon icon="" slot="item-icon"></ha-icon>\n          <paper-item-body two-line>\n            <div class="name"></div>\n            <div secondary></div>\n          </paper-item-body>\n        </paper-icon-item>\n        ':e.firstElementChild||(e.innerHTML='\n        <style>\n          paper-item {\n              margin: -10px;\n              padding: 0;\n          }\n        </style>\n        <paper-item>\n          <paper-item-body two-line>\n            <div class="name"></div>\n            <div secondary></div>\n          </paper-item-body>\n        </paper-item>\n        '),e.querySelector(".name").textContent=a.item.name,e.querySelector("[secondary]").textContent=a.item.description,this.icons&&(e.querySelector("ha-icon").icon=a.item.icon)}}open(){this.updateComplete.then(()=>{var e,t;null===(t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("vaadin-combo-box-light"))||void 0===t||t.open()})}focus(){this.updateComplete.then(()=>{var e;(null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("paper-input")).focus()})}shouldUpdate(e){if(e.get("items")){if(yt(this.items,e.get("items")))return!1;this.firstUpdated()}return!0}firstUpdated(){this._comboBox.items=this.items}render(){return R`
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        .renderer=${this.rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this._value&&this.items.find(e=>e.value==this._value)?R`
                ${this.icons?R`
                      <ha-icon slot="prefix" icon="${this.items.find(e=>e.value==this._value).icon}"> </ha-icon>
                    `:""}
                ${this.clearable?R`
                      <ha-icon-button slot="suffix" class="clear-button" @click=${this._clearValue} icon="hass:close">
                      </ha-icon-button>
                    `:""}
              `:""}
          <ha-icon-button
            slot="suffix"
            class="toggle-button"
            icon="${this._opened?"hass:menu-up":"hass:menu-down"}"
          >
          </ha-icon-button>
        </paper-input>
      </vaadin-combo-box-light>
    `}_clearValue(e){e.stopPropagation(),this._setValue("")}get _value(){return this.value||""}_openedChanged(e){this._opened=e.detail.value}_valueChanged(e){const t=e.detail.value;t!==this._value&&this._setValue(t)}_setValue(e){this.value=e,setTimeout(()=>{Te(this,"value-changed",{value:e})},0)}static get styles(){return se`
      :host {
        line-height: 1em;
      }
      paper-input > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
      paper-input > ha-icon {
        display: flex;
        flex: 0 0 40px;
        color: var(--state-icon-color);
        width: 40px;
        height: 26px;
        align-items: center;
      }
    `}};var Ot,jt;t([Z({attribute:!1})],St.prototype,"hass",void 0),t([Z()],St.prototype,"label",void 0),t([Z()],St.prototype,"value",void 0),t([Z()],St.prototype,"items",void 0),t([Z()],St.prototype,"clearable",void 0),t([Z()],St.prototype,"icons",void 0),t([J()],St.prototype,"_opened",void 0),t([(Ot="vaadin-combo-box-light",jt=!0,(e,t)=>{const a={get(){return this.renderRoot.querySelector(Ot)},enumerable:!0,configurable:!0};if(jt){const e="symbol"==typeof t?Symbol():"__"+t;a.get=function(){return void 0===this[e]&&(this[e]=this.renderRoot.querySelector(Ot)),this[e]}}return void 0!==t?X(a,e,t):ee(a,e)})],St.prototype,"_comboBox",void 0),St=t([Q("alarmo-select")],St);const Ct=e=>e.callWS({type:"alarmo/config"}),Tt=e=>e.callWS({type:"alarmo/sensors"}),Mt=e=>e.callWS({type:"alarmo/users"}),Et=e=>e.callWS({type:"alarmo/automations"}),Dt=(e,t)=>e.callApi("POST","alarmo/config",t),zt=(e,t)=>e.callApi("POST","alarmo/sensors",t),Nt=(e,t)=>e.callApi("POST","alarmo/users",t),qt=(e,t)=>e.callApi("POST","alarmo/automations",t),Pt=(e,t)=>e.callApi("POST","alarmo/automations",{automation_id:t,remove:!0}),Rt=e=>e.callWS({type:"alarmo/areas"}),Lt=(e,t)=>e.callApi("POST","alarmo/area",t),Vt=e=>{class a extends e{connectedCallback(){super.connectedCallback(),this.__checkSubscribed()}disconnectedCallback(){if(super.disconnectedCallback(),this.__unsubs){for(;this.__unsubs.length;){const e=this.__unsubs.pop();e instanceof Promise?e.then(e=>e()):e()}this.__unsubs=void 0}}updated(e){super.updated(e),e.has("hass")&&this.__checkSubscribed()}hassSubscribe(){return[]}__checkSubscribed(){void 0===this.__unsubs&&this.isConnected&&void 0!==this.hass&&(this.__unsubs=this.hassSubscribe())}}return t([Z({attribute:!1})],a.prototype,"hass",void 0),a};let It=class extends(Vt(oe)){constructor(){super(...arguments),this.currentTab=0}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){this.hass&&(this.areas=await Rt(this.hass))}async firstUpdated(){this.areas=await Rt(this.hass),this.selectedArea=Object.keys(this.areas)[0],this.data=Object.assign({},this.areas[this.selectedArea].modes)}render(){if(!this.data)return R``;const e=Object.values(ut)[this.currentTab];return R`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${nt("panels.general.cards.modes.title",this.hass.language)}
          </div>

          ${Object.keys(this.areas).length>1?R`
              <alarmo-select
            .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
            value=${this.selectedArea}
            label=${this.hass.localize("ui.components.area-picker.area")}
            @value-changed=${e=>this.selectArea(e.target.value)}

              </alarmo-select>
              `:""}
        </div>
        <div class="card-content">
          ${nt("panels.general.cards.modes.description",this.hass.language)}
        </div>

        <mwc-tab-bar
          .activeIndex=${this.currentTab}
          @MDCTabBar:activated=${e=>this.currentTab=Number(e.detail.index)}
        >
          ${Object.entries(ut).map(([e,t])=>R`
              <mwc-tab
                label="${nt("common.modes_short."+t,this.hass.language)}"
                hasImageIcon
                stacked
                class="${this.data[t].enabled?"":"disabled"}"
              >
                <ha-icon icon="${rt[e]}" slot="icon"></ha-icon>
              </mwc-tab>
            `)}
        </mwc-tab-bar>

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading">${nt("common.modes_long."+e,this.hass.language)}</span>
          <span slot="description"
            >${nt("panels.general.cards.modes.fields.mode."+e,this.hass.language)}</span
          >

          <div style="display: flex; margin: 10px 0px; justify-content: center; width: 100%">
            <mwc-button
              class="${this.data[e].enabled?"active":""}"
              @click=${()=>this.data={...this.data,[e]:{...this.data[e],enabled:!0}}}
            >
              ${nt("panels.general.cards.modes.fields.mode.enabled",this.hass.language)}
            </mwc-button>
            <mwc-button
              class="${this.data[e].enabled?"":"active"}"
              @click=${()=>this.data={...this.data,[e]:{...this.data[e],enabled:!1}}}
            >
              ${nt("panels.general.cards.modes.fields.mode.disabled",this.hass.language)}
            </mwc-button>
          </div>
        </settings-row>

        ${this.data[e].enabled?R`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.general.cards.modes.fields.exit_delay.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.general.cards.modes.fields.exit_delay.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="sec"
                  max="180"
                  zeroValue=${nt("components.time_slider.none",this.hass.language)}
                  value=${this.data[e].exit_time||0}
                  @change=${t=>this.data={...this.data,[e]:{...this.data[e],exit_time:Number(t.target.value)}}}
                >
                </time-slider>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.general.cards.modes.fields.entry_delay.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.general.cards.modes.fields.entry_delay.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="sec"
                  max="180"
                  zeroValue=${nt("components.time_slider.none",this.hass.language)}
                  value=${this.data[e].entry_time||0}
                  @change=${t=>this.data={...this.data,[e]:{...this.data[e],entry_time:Number(t.target.value)}}}
                >
                </time-slider>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.general.cards.modes.fields.trigger_time.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.general.cards.modes.fields.trigger_time.description",this.hass.language)}</span
                >
                <time-slider
                  .hass=${this.hass}
                  unit="min"
                  max="3600"
                  zeroValue=${nt("components.time_slider.infinite",this.hass.language)}
                  value=${this.data[e].trigger_time||0}
                  @change=${t=>this.data={...this.data,[e]:{...this.data[e],trigger_time:Number(t.target.value)}}}
                >
                </time-slider>
              </settings-row>
            `:""}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `}selectArea(e){e!=this.selectedArea&&(this.selectedArea=e,this.data=Object.assign({},this.areas[e].modes))}saveClick(e){Lt(this.hass,{area_id:this.selectedArea,modes:this.data}).catch(t=>kt(t,e)).then()}};It.styles=Pe,t([Z()],It.prototype,"hass",void 0),t([Z()],It.prototype,"narrow",void 0),t([Z()],It.prototype,"currentTab",void 0),t([Z()],It.prototype,"config",void 0),t([Z()],It.prototype,"areas",void 0),t([Z()],It.prototype,"data",void 0),t([Z()],It.prototype,"selectedArea",void 0),It=t([Q("alarm-mode-card")],It);let Ut=class extends oe{constructor(){super(...arguments),this.threeLine=!1}render(){return R`
      <div class="info">
        <slot name="heading"></slot>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      <slot></slot>
    `}static get styles(){return se`
      :host {
        display: flex;
        flex-direction: row;
        padding: 0px 16px;
        align-items: center;
        min-height: 72px;
      }
      :host([large]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-bottom: none;
        border-top: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      .info {
        flex: 1 0 60px;
      }
      :host([large]) .info,
      :host([narrow]) .info {
        flex: 1 0 40px;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
    `}};t([Z({type:Boolean,reflect:!0})],Ut.prototype,"narrow",void 0),t([Z({type:Boolean,reflect:!0})],Ut.prototype,"large",void 0),t([Z({type:Boolean,attribute:"three-line"})],Ut.prototype,"threeLine",void 0),Ut=t([Q("settings-row")],Ut);let Ft=class extends oe{constructor(){super(...arguments),this.header="",this.open=!1}render(){return R`
      ${this.open?R`
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-down"
                @click=${()=>{this.open=!1}}
              >
              </ha-icon-button>
            </div>
            <slot></slot>
            <div class="header open">
              <span
                @click=${()=>{this.open=!1}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-up"
                @click=${()=>{this.open=!1}}
              >
              </ha-icon-button>
            </div>
          `:R`
            <div class="header">
              <span
                @click=${()=>{this.open=!0}}
              >
                ${this.header}
              </span>
              <ha-icon-button
                icon="hass:chevron-right"
                @click=${()=>{this.open=!0}}
              >
              </ha-icon-button>
            </div>
          `}
    `}static get styles(){return se`
      :host {
      }

      div.header {
        display: flex;
        align-items: center;
        padding: 0px 16px;
        cursor: pointer;
      }
      div.header.open:first-of-type {
        border-bottom: 1px solid var(--divider-color);
      }
      div.header.open:last-of-type {
        border-top: 1px solid var(--divider-color);
      }

      :host([narrow]) div.header {
        border-top: 1px solid var(--divider-color);
        border-bottom: none;
      }

      div.header span {
        display: flex;
        flex-grow: 1;
      }

      div.seperator {
        height: 1px;
        background: var(--divider-color);
      }
    `}};t([Z({type:Boolean,reflect:!0})],Ft.prototype,"narrow",void 0),t([Z()],Ft.prototype,"header",void 0),t([Z()],Ft.prototype,"open",void 0),Ft=t([Q("collapsible-section")],Ft);let Ht=class extends(Vt(oe)){constructor(){super(...arguments),this.areas={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){if(!this.hass)return;const e=await Ct(this.hass);this.config=e,this.areas=await Rt(this.hass),this.selection=wt(e.mqtt,["availability_topic"])}firstUpdated(){(async()=>{await qe()})()}render(){return this.hass&&this.selection?R`
      <ha-card>
        <div class="card-header">
          <div class="name">${nt("panels.general.cards.mqtt.title",this.hass.language)}</div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">${nt("panels.general.cards.mqtt.description",this.hass.language)}</div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.general.cards.mqtt.fields.state_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${nt("panels.general.cards.mqtt.fields.state_topic.heading",this.hass.language)}"
            value=${this.selection.state_topic}
            @change=${e=>{this.selection={...this.selection,state_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${nt("panels.general.cards.mqtt.fields.state_payload.heading",this.hass.language)}
        >
          ${Object.values(dt).filter(e=>Object.values(this.areas).some(t=>At(e,t.modes))).map(e=>R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${vt(e)}</span>
                  <span slot="description"
                    >${nt("panels.general.cards.mqtt.fields.state_payload.item",this.hass.language,"{state}",vt(e))}</span
                  >
                  <paper-input
                    label=${vt(e)}
                    placeholder=${e}
                    value=${this.selection.state_payload[e]||""}
                    @change=${t=>{this.selection=xt(this.selection,{state_payload:{[e]:t.target.value}})}}
                  >
                  </paper-input>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.general.cards.mqtt.fields.event_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${nt("panels.general.cards.mqtt.fields.event_topic.heading",this.hass.language)}"
            value=${this.selection.event_topic}
            @change=${e=>{this.selection={...this.selection,event_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.general.cards.mqtt.fields.command_topic.description",this.hass.language)}</span
          >
          <paper-input
            label="${nt("panels.general.cards.mqtt.fields.command_topic.heading",this.hass.language)}"
            value=${this.selection.command_topic}
            @change=${e=>{this.selection={...this.selection,command_topic:e.target.value}}}
          ></paper-input>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${nt("panels.general.cards.mqtt.fields.command_payload.heading",this.hass.language)}
        >
          ${Object.values(lt).filter(e=>Object.values(this.areas).some(t=>At((e=>{switch(e){case lt.COMMAND_ALARM_DISARM:return dt.STATE_ALARM_DISARMED;case lt.COMMAND_ALARM_ARM_HOME:return dt.STATE_ALARM_ARMED_HOME;case lt.COMMAND_ALARM_ARM_AWAY:return dt.STATE_ALARM_ARMED_AWAY;case lt.COMMAND_ALARM_ARM_NIGHT:return dt.STATE_ALARM_ARMED_NIGHT;case lt.COMMAND_ALARM_ARM_CUSTOM_BYPASS:return dt.STATE_ALARM_ARMED_CUSTOM_BYPASS;default:return}})(e),t.modes))).map(e=>R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading">${vt(e)}</span>
                  <span slot="description"
                    >${nt("panels.general.cards.mqtt.fields.command_payload.item",this.hass.language,"{command}",vt(e))}</span
                  >
                  <paper-input
                    label=${vt(e)}
                    placeholder=${e}
                    value=${this.selection.command_payload[e]||""}
                    @change=${t=>{this.selection=xt(this.selection,{command_payload:{[e]:t.target.value}})}}
                  >
                  </paper-input>
                </settings-row>
              `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.general.cards.mqtt.fields.require_code.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.general.cards.mqtt.fields.require_code.description",this.hass.language)}</span
          >
          <ha-switch
            ?checked=${this.selection.require_code}
            ?disabled=${!this.config.code_arm_required&&!this.config.code_disarm_required}
            @change=${e=>{this.selection={...this.selection,require_code:e.target.checked}}}
          >
          </ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `:R``}saveClick(e){this.hass&&Dt(this.hass,{mqtt:Object.assign(Object.assign({},this.selection),{enabled:!0})}).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}cancelClick(){De(0,"/alarmo/general",!0)}};Ht.styles=Pe,t([Z()],Ht.prototype,"narrow",void 0),t([Z()],Ht.prototype,"config",void 0),t([Z()],Ht.prototype,"areas",void 0),t([Z()],Ht.prototype,"selection",void 0),Ht=t([Q("mqtt-config-card")],Ht);
/**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
const Yt=new WeakMap,Bt=(e=>(...t)=>{const a=e(...t);return g.set(a,!0),a})(e=>t=>{if(!(t instanceof O))throw new Error("unsafeHTML can only be used in text bindings");const a=Yt.get(t);if(void 0!==a&&k(e)&&e===a.value&&t.value===a.fragment)return;const i=document.createElement("template");i.innerHTML=e;const s=document.importNode(i.content,!0);t.setValue(s),Yt.set(t,{value:e,fragment:s})});let Wt=class extends oe{render(){return this.columns&&this.data?R`
      <div class="table">
        ${this.renderHeaderRow()}
        ${this.data.length?this.data.map(e=>this.renderDataRow(e)):R`
              <div class="table-row">
                <div class="table-cell text grow">
                  <slot></slot>
                </div>
              </div>
            `}
      </div>
    `:R``}renderHeaderRow(){return this.columns?R`
      <div class="table-row header">
        ${Object.values(this.columns).map(e=>e.hide?"":R`
                <div
                  class="table-cell ${e.text?"text":""} ${e.grow?"grow":""} ${e.align?e.align:""}"
                  style="${e.grow?"":"width: "+e.width}"
                >
                  ${e.title||""}
                </div>
              `)}
      </div>
    `:R``}renderDataRow(e){return this.columns?R`
      <div class="table-row ${this.selectable?"selectable":""}" @click=${()=>this.handleClick(String(e.id))}>
        ${Object.entries(this.columns).map(([t,a])=>a.hide?"":R`
                <div
                  class="table-cell ${a.text?"text":""} ${a.grow?"grow":""} ${a.align?a.align:""}"
                  style="${a.grow?"":"width: "+a.width}"
                >
                  ${e[t]}
                </div>
              `)}
      </div>
    `:R``}handleClick(e){if(!this.selectable)return;const t=new CustomEvent("row-click",{detail:{id:e}});this.dispatchEvent(t)}};Wt.styles=se`
    :host {
      width: 100%;
    }
    div.table {
      display: inline-flex;
      flex-direction: column;
      box-sizing: border-box;
      overflow: hidden;
      width: 100%;
    }
    div.table .header {
      font-weight: bold;
    }
    div.table-row {
      display: flex;
      width: 100%;
      height: 52px;
      border-top: 1px solid var(--divider-color);
    }

    div.table-cell {
      align-self: center;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    div.table-cell.text {
      padding: 4px 16px;
    }
    div.table-cell.grow {
      flex-grow: 1;
      flex-shrink: 1;
    }

    div.table-cell > ha-switch {
      width: 68px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div.table-cell.right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    div.table-cell > ha-icon-button {
      color: var(--secondary-text-color);
    }

    div.table-row.selectable {
      cursor: pointer;
    }
    div.table-row.selectable:hover {
      background-color: rgba(var(--rgb-primary-text-color), 0.04);
    }

    ha-icon {
      color: var(--paper-item-icon-color);
      padding: 8px;
    }

    .secondary {
      color: var(--secondary-text-color);
      display: flex;
      padding-top: 4px;
    }

    a,
    a:visited {
      color: var(--primary-color);
    }
  `,t([Z()],Wt.prototype,"columns",void 0),t([Z()],Wt.prototype,"data",void 0),t([Z({type:Boolean})],Wt.prototype,"selectable",void 0),Wt=t([Q("alarmo-table")],Wt);let Gt=class extends oe{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params&&this._params.cancel(),this._params=void 0}render(){return this._params?R`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this._params.title}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.description}
        </div>

        <mwc-button slot="primaryAction" @click=${this.cancelClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button slot="secondaryAction" style="float: left" @click=${this.confirmClick} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:R``}confirmClick(){this._params.confirm()}cancelClick(){this._params.cancel()}static get styles(){return se`
      ${Pe}
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([Z({attribute:!1})],Gt.prototype,"hass",void 0),t([J()],Gt.prototype,"_params",void 0),Gt=t([Q("confirm-delete-dialog")],Gt);var Qt=Object.freeze({__proto__:null,get ConfirmDeleteDialog(){return Gt}});let Kt=class extends(Vt(oe)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={},this.name=""}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){this.hass&&(this.areas=await Rt(this.hass),this.sensors=await Tt(this.hass),this.automations=await Et(this.hass))}async showDialog(e){await this._fetchData(),this._params=e,e.area_id&&(this.area_id=e.area_id,this.name=this.areas[this.area_id].name),await this.updateComplete}async closeDialog(){this._params=void 0,this.area_id=void 0,this.name=""}render(){return this._params?R`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this.area_id?nt("panels.general.dialogs.edit_area.title",this.hass.language,"{area}",this.areas[this.area_id].name):nt("panels.general.dialogs.create_area.title",this.hass.language)}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${e=>this.name=e.target.value}
            value="${this.name}"
          >
          </paper-input>
          ${this.area_id?R`
                <span class="note"
                  >${nt("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span
                >
              `:""}
          ${this.area_id?"":R`
                <alarmo-select
                  .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
                  value=${this.selectedArea}
                  label="${nt("panels.general.dialogs.create_area.fields.copy_from",this.hass.language)}"
                  clearable=${!0}
                  @value-changed=${e=>this.selectedArea=e.target.value}
                >
                </alarmo-select>
              `}
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.area_id?R`
              <mwc-button
                slot="secondaryAction"
                @click=${this.deleteClick}
                class="warning"
                ?disabled=${1==Object.keys(this.areas).length}
              >
                ${this.hass.localize("ui.common.delete")}
              </mwc-button>
            `:""}
      </ha-dialog>
    `:R``}saveClick(e){const t=this.name.trim();if(!t.length)return;let a={name:t};this.area_id?a=Object.assign(Object.assign({},a),{area_id:this.area_id}):this.selectedArea&&(a=Object.assign(Object.assign({},a),{modes:Object.assign({},this.areas[this.selectedArea].modes)})),Lt(this.hass,a).catch(t=>kt(t,e)).then(()=>{this.closeDialog()})}async deleteClick(e){if(!this.area_id)return;const t=Object.values(this.sensors).filter(e=>e.area==this.area_id).length,a=Object.values(this.automations).filter(e=>e.area==this.area_id).length;let i=!1;var s,n;i=!t&&!a||await new Promise(i=>{Te(e.target,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Qt})),dialogParams:{title:nt("panels.general.dialogs.remove_area.title",this.hass.language),description:nt("panels.general.dialogs.remove_area.description",this.hass.language,["{sensors}","{automations}"],[String(t),String(a)]),cancel:()=>i(!1),confirm:()=>i(!0)}})}),i&&(s=this.hass,n=this.area_id,s.callApi("POST","alarmo/area",{area_id:n,remove:!0})).catch(t=>kt(t,e)).then(()=>{this.closeDialog()})}static get styles(){return se`
      ${Pe}
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `}};t([Z({attribute:!1})],Kt.prototype,"hass",void 0),t([J()],Kt.prototype,"_params",void 0),t([Z()],Kt.prototype,"areas",void 0),t([Z()],Kt.prototype,"sensors",void 0),t([Z()],Kt.prototype,"automations",void 0),t([Z()],Kt.prototype,"name",void 0),t([Z()],Kt.prototype,"area_id",void 0),t([Z()],Kt.prototype,"selectedArea",void 0),Kt=t([Q("create-area-dialog")],Kt);var Zt=Object.freeze({__proto__:null,get CreateAreaDialog(){return Kt}});let Jt=class extends(Vt(oe)){constructor(){super(...arguments),this.areas={},this.sensors={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){this.hass&&(this.areas=await Rt(this.hass),this.sensors=await Tt(this.hass),this.automations=await Et(this.hass))}render(){if(!this.hass)return R``;const e=Object.values(this.areas);e.sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1);const t={actions:{width:"48px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:nt("panels.general.cards.areas.table.remarks",this.hass.language),width:"60%",hide:this.narrow,text:!0}},a=Object.values(e).map(t=>{const a=Object.values(this.sensors).filter(e=>e.area==t.area_id).length,i=1==Object.values(e).length?Object.values(this.automations).filter(e=>!e.area||e.area==t.area_id).length:Object.values(this.automations).filter(e=>e.area==t.area_id).length,s=`<a href="/alarmo/sensors/filter/${t.area_id}">${nt("panels.general.cards.areas.table.summary_sensors",this.hass.language,"{number}",String(a))}</a>`,n=`<a href="/alarmo/actions/filter/${t.area_id}">${nt("panels.general.cards.areas.table.summary_automations",this.hass.language,"{number}",String(i))}</a>`;return{id:t.area_id,actions:R`
          <ha-icon-button @click=${e=>this.editClick(e,t.area_id)} icon="hass:pencil"></ha-icon-button>
        `,name:vt(t.name),remarks:Bt(nt("panels.general.cards.areas.table.summary",this.hass.language,["{summary_sensors}","{summary_automations}"],[s,n]))}});return R`
      <ha-card header="${nt("panels.general.cards.areas.title",this.hass.language)}">
        <div class="card-content">
          ${nt("panels.general.cards.areas.description",this.hass.language)}
        </div>

        <alarmo-table .columns=${t} .data=${a}>
          ${nt("panels.general.cards.areas.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addClick}>
            ${nt("panels.general.cards.areas.actions.add",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addClick(e){const t=e.target;Te(t,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Zt})),dialogParams:{}})}editClick(e,t){const a=e.target;Te(a,"show-dialog",{dialogTag:"create-area-dialog",dialogImport:()=>Promise.resolve().then((function(){return Zt})),dialogParams:{area_id:t}})}};Jt.styles=Pe,t([Z()],Jt.prototype,"narrow",void 0),t([Z()],Jt.prototype,"path",void 0),t([Z()],Jt.prototype,"config",void 0),t([Z()],Jt.prototype,"areas",void 0),t([Z()],Jt.prototype,"sensors",void 0),t([Z()],Jt.prototype,"automations",void 0),Jt=t([Q("area-config-card")],Jt);let Xt=class extends oe{constructor(){super(...arguments),this.name=""}async showDialog(e){this._params=e;const t=await Ct(this.hass);this.name=t.master.name||"",await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?R`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title"> ${nt("panels.general.dialogs.edit_master.title",this.hass.language)}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${e=>this.name=e.target.value}
            value="${this.name}"
          >
          </paper-input>
          <span class="note">${nt("panels.general.dialogs.edit_area.name_warning",this.hass.language)}</span>
        </div>
        <mwc-button slot="primaryAction" @click=${this.saveClick}>
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        <mwc-button slot="secondaryAction" @click=${this.closeDialog}>
          ${this.hass.localize("ui.common.cancel")}
        </mwc-button>
      </ha-dialog>
    `:R``}saveClick(){const e=this.name.trim();e.length&&Dt(this.hass,{master:{enabled:!0,name:e}}).catch().then(()=>{this.closeDialog()})}static get styles(){return se`
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `}};t([Z({attribute:!1})],Xt.prototype,"hass",void 0),t([J()],Xt.prototype,"_params",void 0),t([Z()],Xt.prototype,"name",void 0),Xt=t([Q("edit-master-dialog")],Xt);var ea=Object.freeze({__proto__:null,get EditMasterDialog(){return Xt}});let ta=class extends(Vt(oe)){constructor(){super(...arguments),this.areas={},this.automations={}}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){this.hass&&(this.config=await Ct(this.hass),this.areas=await Rt(this.hass),this.automations=await Et(this.hass),this.data=bt(this.config,["trigger_time","disarm_after_trigger","mqtt","master"]))}firstUpdated(){(async()=>{await qe()})()}render(){var e,t,a,i,s,n,o,r;return this.hass&&this.config&&this.data?this.path&&"mqtt_configuration"==this.path[0]?R`
        <mqtt-config-card .hass=${this.hass} .narrow=${this.narrow}> </mqtt-config-card>
      `:this.path&&"edit_area"==this.path[0]&&2==this.path.length?R`
        <area-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}> </area-editor-card>
      `:R`
        <ha-card header="${nt("panels.general.title",this.hass.language)}">
          <div class="card-content">
            ${nt("panels.general.cards.general.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.general.cards.general.fields.disarm_after_trigger.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.general.cards.general.fields.disarm_after_trigger.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.data.disarm_after_trigger}
              @change=${e=>this.data={...this.data,disarm_after_trigger:e.target.checked}}
              }}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.general.cards.general.fields.enable_mqtt.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.general.cards.general.fields.enable_mqtt.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${null===(t=null===(e=this.data)||void 0===e?void 0:e.mqtt)||void 0===t?void 0:t.enabled}
              @change=${e=>{this.data={...this.data,mqtt:{...this.data.mqtt,enabled:e.target.checked}}}}
            >
            </ha-switch>
          </settings-row>

          ${(null===(i=null===(a=this.data)||void 0===a?void 0:a.mqtt)||void 0===i?void 0:i.enabled)?R`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${()=>De(0,"/alarmo/general/mqtt_configuration",!0)}>
                    ${nt("panels.general.cards.general.actions.setup_mqtt",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}
          ${Object.keys(this.areas).length>=2?R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${nt("panels.general.cards.general.fields.enable_master.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${nt("panels.general.cards.general.fields.enable_master.description",this.hass.language)}</span
                  >
                  <ha-switch
                    ?checked=${(null===(n=null===(s=this.data)||void 0===s?void 0:s.master)||void 0===n?void 0:n.enabled)&&Object.keys(this.areas).length>=2}
                    ?disabled=${Object.keys(this.areas).length<2}
                    @change=${this.toggleEnableMaster}
                  >
                  </ha-switch>
                </settings-row>
              `:""}
          ${(null===(r=null===(o=this.data)||void 0===o?void 0:o.master)||void 0===r?void 0:r.enabled)&&Object.keys(this.areas).length>=2?R`
                <div style="padding: 0px 0px 16px 16px">
                  <mwc-button outlined @click=${this.setupMasterClick}>
                    ${nt("panels.general.cards.general.actions.setup_master",this.hass.language)}
                  </mwc-button>
                </div>
              `:""}

          <div class="card-actions">
            <mwc-button @click=${this.saveClick}>
              ${this.hass.localize("ui.common.save")}
            </mwc-button>
          </div>
        </ha-card>

        <alarm-mode-card .hass=${this.hass} .narrow=${this.narrow}> </alarm-mode-card>

        <area-config-card .hass=${this.hass} .narrow=${this.narrow}> </area-config-card>
      `:R``}setupMasterClick(e){const t=e.target;Te(t,"show-dialog",{dialogTag:"edit-master-dialog",dialogImport:()=>Promise.resolve().then((function(){return ea})),dialogParams:{}})}async toggleEnableMaster(e){const t=e.target;let a=t.checked;if(!a){const e=Object.values(this.automations).filter(e=>!e.area).length;if(e){await new Promise(a=>{Te(t,"show-dialog",{dialogTag:"confirm-delete-dialog",dialogImport:()=>Promise.resolve().then((function(){return Qt})),dialogParams:{title:nt("panels.general.dialogs.disable_master.title",this.hass.language),description:nt("panels.general.dialogs.disable_master.description",this.hass.language,["{automations}"],[String(e)]),cancel:()=>a(!1),confirm:()=>a(!0)}})})||(a=!0,t.checked=!0)}}this.data=Object.assign(Object.assign({},this.data),{master:Object.assign(Object.assign({},this.data.master),{enabled:a})})}saveClick(e){this.hass&&this.data&&Dt(this.hass,this.data).catch(t=>kt(t,e)).then()}};ta.styles=Pe,t([Z()],ta.prototype,"narrow",void 0),t([Z()],ta.prototype,"path",void 0),t([Z()],ta.prototype,"data",void 0),t([Z()],ta.prototype,"config",void 0),t([Z()],ta.prototype,"areas",void 0),t([Z()],ta.prototype,"automations",void 0),ta=t([Q("alarm-view-general")],ta);let aa=class extends oe{async showDialog(e){this._params=e,await this.updateComplete}async closeDialog(){this._params=void 0}render(){return this._params?R`
      <ha-dialog open .heading=${!0} @closed=${this.closeDialog} @close-dialog=${this.closeDialog}>
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button slot="navigationIcon" dialogAction="cancel" icon="mdi:close"> </ha-icon-button>
            <span slot="title">
              ${this.hass.localize("state_badge.default.error")}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          ${this._params.error||""}
        </div>

        <mwc-button slot="primaryAction" style="float: left" @click=${this.closeDialog} dialogAction="close">
          ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
    `:R``}static get styles(){return se`
      div.wrapper {
        color: var(--primary-text-color);
      }
    `}};t([Z({attribute:!1})],aa.prototype,"hass",void 0),t([J()],aa.prototype,"_params",void 0),aa=t([Q("error-dialog")],aa);var ia=Object.freeze({__proto__:null,get ErrorDialog(){return aa}});const sa=(e,t)=>{if("binary_sensor"==function(e){const t="string"==typeof e?e:e.entity_id;return String(t.split(".").shift())}(e.entity_id)){if(t)return!0;const a=e.attributes.device_class;return!!a&&!!["door","garage_door","gas","heat","lock","moisture","motion","moving","occupancy","opening","presence","safety","smoke","sound","vibration","window"].includes(a)}return!1},na=e=>{const t=t=>t.filter(t=>e.includes(t));return{[ct.Door]:{modes:t([ut.ArmedAway,ut.ArmedHome,ut.ArmedNight]),always_on:!1,allow_open:!1,arm_on_close:!0,immediate:!1},[ct.Window]:{modes:t([ut.ArmedAway,ut.ArmedHome,ut.ArmedNight]),always_on:!1,allow_open:!1,arm_on_close:!1,immediate:!0},[ct.Motion]:{modes:t([ut.ArmedAway]),always_on:!1,allow_open:!0,arm_on_close:!1,immediate:!1},[ct.Tamper]:{modes:t([ut.ArmedAway,ut.ArmedHome,ut.ArmedNight,ut.ArmedCustom]),always_on:!1,allow_open:!1,arm_on_close:!1,immediate:!0},[ct.Environmental]:{modes:t([ut.ArmedAway,ut.ArmedHome,ut.ArmedNight,ut.ArmedCustom]),always_on:!0,allow_open:!1,arm_on_close:!1,immediate:!1}}};function oa(e,t){if(!e)return null;const a=Oe(e.entity_id);let i={entity_id:e.entity_id,name:e.attributes.friendly_name||e.entity_id,modes:[],immediate:!1,arm_on_close:!1,allow_open:!1,always_on:!1,trigger_unavailable:!1,type:ct.Other,enabled:!0};if("binary_sensor"==a){const a=(e=>{switch(e.attributes.device_class){case"door":case"garage_door":case"lock":case"opening":return ct.Door;case"window":return ct.Window;case"gas":case"heat":case"moisture":case"smoke":case"safety":return ct.Environmental;case"motion":case"moving":case"occupancy":case"presence":return ct.Motion;case"sound":case"opening":case"vibration":return ct.Tamper;default:return}})(e);a&&(i=Object.assign(Object.assign(Object.assign({},i),{type:a}),na(t)[a]))}return i}let ra=class extends oe{async firstUpdated(){const e=await Rt(this.hass);this.areas=e;const t=await Tt(this.hass);this.data=t[this.item],this.data.area||1!=Object.keys(e).length||(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}render(){if(!this.data)return R``;const e=this.hass.states[this.data.entity_id];return R`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${nt("panels.sensors.cards.editor.title",this.hass.language)}
          </div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${nt("panels.sensors.cards.editor.description",this.hass.language,"{entity}",this.item)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${nt("panels.sensors.cards.editor.fields.name.heading",this.hass.language)}</span>
          <span slot="description"
            >${nt("panels.sensors.cards.editor.fields.name.description",this.hass.language)}</span
          >

          <paper-input
            label="${nt("panels.sensors.cards.editor.fields.name.heading",this.hass.language)}"
            placeholder=${(null==e?void 0:e.attributes.friendly_name)||""}
            value=${this.data.name}
            @change=${e=>this.data={...this.data,name:e.target.value}}
          >
          </paper-input>
        </settings-row>

        ${Object.keys(this.areas).length>1?R`
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${nt("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}</span>
          <span slot="description">${nt("panels.sensors.cards.editor.fields.area.description",this.hass.language)}</span>

          <alarmo-select
            .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
            value=${this.data.area}
            label=${nt("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
            @value-changed=${e=>this.data={...this.data,area:e.target.value}}
          </alarmo-select>
        </settings-row>`:""}

        <settings-row .narrow=${this.narrow} .large=${!0}>
          <span slot="heading"
            >${nt("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.sensors.cards.editor.fields.device_type.description",this.hass.language)}</span
          >

          <alarmo-select
            .hass=${this.hass}
            .items=${Object.entries(ct).filter(([,e])=>e!=ct.Other).map(([e,t])=>Object({value:t,name:nt(`panels.sensors.cards.editor.fields.device_type.choose.${t}.name`,this.hass.language),description:nt(`panels.sensors.cards.editor.fields.device_type.choose.${t}.description`,this.hass.language),icon:ht[e]}))}
            label=${nt("panels.sensors.cards.editor.fields.device_type.heading",this.hass.language)}
            clearable=${!0}
            icons=${!0}
            value=${this.data.type}
            @value-changed=${e=>this.setType(e.target.value||ct.Other)}
          >
          </alarmo-select>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.sensors.cards.editor.fields.modes.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.sensors.cards.editor.fields.modes.description",this.hass.language)}</span
          >

          <div>
            ${this.modesByArea(this.data.area).map(e=>R`
                <mwc-button
                  class="${this.data.modes.includes(e)?"active":""}"
                  @click=${()=>{var t,a;this.data={...this.data,modes:this.data.modes.includes(e)?(t=this.data.modes,a=e,t.filter(e=>e!==a)):ft(this.data.modes.concat([e]))}}}
                >
                  <ha-icon icon="${rt[Object.entries(ut).find(([,t])=>t==e)[0]]}"></ha-icon>
                  ${nt("common.modes_short."+e,this.hass.language)}
                </mwc-button>
              `)}
          </div>
        </settings-row>

        <collapsible-section
          .narrow=${this.narrow}
          header=${nt("panels.sensors.cards.editor.actions.toggle_advanced",this.hass.language)}
        >
          ${!this.data.type||[ct.Environmental,ct.Other].includes(this.data.type)?R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${nt("panels.sensors.cards.editor.fields.always_on.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${nt("panels.sensors.cards.editor.fields.always_on.description",this.hass.language)}</span
                  >

                  <ha-switch
                    ?checked=${this.data.always_on}
                    @change=${e=>this.data=e.target.checked?{...this.data,always_on:!0,arm_on_close:!1,immediate:!0,allow_open:!1}:{...this.data,always_on:!1}}
                  >
                  </ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ct.Door,ct.Other].includes(this.data.type)?R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${nt("panels.sensors.cards.editor.fields.arm_on_close.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${nt("panels.sensors.cards.editor.fields.arm_on_close.description",this.hass.language)}</span
                  >

                  <ha-switch
                    ?checked=${this.data.arm_on_close}
                    ?disabled=${this.data.always_on}
                    @change=${e=>this.data=e.target.checked?{...this.data,arm_on_close:!0,allow_open:!1,immediate:!1,always_on:!1}:{...this.data,arm_on_close:!1}}
                  >
                  </ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ct.Window,ct.Door,ct.Motion,ct.Tamper,ct.Other].includes(this.data.type)?R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${nt("panels.sensors.cards.editor.fields.immediate.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${nt("panels.sensors.cards.editor.fields.immediate.description",this.hass.language)}</span
                  >

                  <ha-switch
                    ?checked=${this.data.immediate}
                    ?disabled=${this.data.always_on||this.data.arm_on_close}
                    @change=${e=>this.data=e.target.checked?{...this.data,immediate:!0,arm_on_close:!1,always_on:!1,allow_open:!1}:{...this.data,immediate:!1}}
                  >
                  </ha-switch>
                </settings-row>
              `:""}
          ${!this.data.type||[ct.Motion,ct.Other].includes(this.data.type)?R`
                <settings-row .narrow=${this.narrow}>
                  <span slot="heading"
                    >${nt("panels.sensors.cards.editor.fields.allow_open.heading",this.hass.language)}</span
                  >
                  <span slot="description"
                    >${nt("panels.sensors.cards.editor.fields.allow_open.description",this.hass.language)}</span
                  >

                  <ha-switch
                    ?checked=${this.data.allow_open}
                    ?disabled=${this.data.always_on||this.data.immediate||this.data.arm_on_close}
                    @change=${e=>this.data=e.target.checked?{...this.data,allow_open:!0,arm_on_close:!1,always_on:!1,immediate:!1}:{...this.data,allow_open:!1}}
                  >
                  </ha-switch>
                </settings-row>
              `:""}

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.sensors.cards.editor.fields.trigger_unavailable.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.sensors.cards.editor.fields.trigger_unavailable.description",this.hass.language)}</span
            >

            <ha-switch
              ?checked=${this.data.trigger_unavailable}
              @change=${e=>this.data={...this.data,trigger_unavailable:e.target.checked}}
            >
            </ha-switch>
          </settings-row>
        </collapsible-section>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          <mwc-button class="warning" @click=${this.deleteClick}>
            ${nt("panels.sensors.cards.editor.actions.remove",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}modesByArea(e){const t=Object.keys(this.areas).reduce((e,t)=>Object.assign(e,{[t]:Object.entries(this.areas[t].modes).filter(([,e])=>e.enabled).map(([e])=>e)}),{});return e?t[e]:Object.values(t).reduce((e,t)=>e.filter(e=>t.includes(e)))}setType(e){const t=e!=ct.Other?na(this.modesByArea(this.data.area))[e]:{};this.data=Object.assign(Object.assign(Object.assign({},this.data),{type:e}),t)}deleteClick(e){var t,a;(t=this.hass,a=this.item,t.callApi("POST","alarmo/sensors",{entity_id:a,remove:!0})).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}saveClick(e){const t=[];this.data.area||t.push(nt("panels.sensors.cards.editor.errors.no_area",this.hass.language)),this.data.modes.length||this.data.always_on||t.push(nt("panels.sensors.cards.editor.errors.no_modes",this.hass.language)),t.length?$t(e,R`
          ${nt("panels.sensors.cards.editor.errors.description",this.hass.language)}
          <ul>
            ${t.map(e=>R`
                  <li>${e}</li>
                `)}
          </ul>
        `):zt(this.hass,Object.assign({},this.data)).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}cancelClick(){De(0,"/alarmo/sensors",!0)}};ra.styles=Pe,t([Z()],ra.prototype,"hass",void 0),t([Z()],ra.prototype,"narrow",void 0),t([Z()],ra.prototype,"item",void 0),t([Z()],ra.prototype,"data",void 0),ra=t([Q("sensor-editor-card")],ra);let da=class extends oe{constructor(){super(...arguments),this.items=[],this.value=null}render(){return R`
      ${this.items.map(e=>R`
          <div class="chip ${this.value==e.value?"selected":""}" @click=${()=>this.selectItem(e.value)}>
            ${void 0!==e.count?R`
                  <span class="count">${e.count>99?99:e.count}</span>
                `:""}
            <span class="label">${e.name}</span>
          </div>
        `)}
    `}selectItem(e){this.value=this.value==e?null:e,Te(this,"value-changed")}static get styles(){return se`
      :host {
      }
      .chip {
        display: inline-flex;
        background: rgba(var(--rgb-primary-text-color), 0.08);
        color: rgba(var(--rgb-primary-text-color), 0.8);
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 0px 6px;
        margin: 1px 0px;
        height: 32px;
        min-width: 35px;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
      }
      .chip span.label {
        margin: 0px 6px;
      }
      .chip span.count {
        background: rgba(var(--rgb-secondary-text-color), 0.85);
        color: rgba(var(--rgb-text-primary-color), 1);
        border-radius: 10px;
        height: 20px;
        display: flex;
        width: 20px;
        justify-content: center;
        align-items: flex-start;
        font-size: 12px;
        line-height: 20px;
      }
      .chip:hover {
        background: rgba(var(--rgb-primary-text-color), 0.12);
      }
      .chip:active {
        background: rgba(var(--rgb-primary-text-color), 0.24);
      }
      .chip.selected {
        background: rgba(var(--rgb-primary-color), 0.9);
        color: var(--text-primary-color);
      }
      .chip.selected:hover {
        background: rgba(var(--rgb-primary-color), 0.85);
      }
      .chip.selected:active {
        background: rgba(var(--rgb-primary-color), 0.74);
      }
    `}};t([Z({attribute:!1})],da.prototype,"hass",void 0),t([Z()],da.prototype,"items",void 0),t([Z()],da.prototype,"value",void 0),da=t([Q("alarmo-chips")],da);let la=class extends(Vt(oe)){constructor(){super(...arguments),this.areas={},this.sensors={},this.addSelection=[],this.showAllSensorEntities=!1,this.areaFilterOptions=[]}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){this.hass&&(this.areas=await Rt(this.hass),this.sensors=await Tt(this.hass),this.areaFilterOptions=[{value:"no_area",name:nt("panels.sensors.cards.sensors.filter.no_area",this.hass.language),count:Object.values(this.sensors).filter(e=>!e.area).length}].concat(Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,count:Object.values(this.sensors).filter(t=>t.area==e.area_id).length})).sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1)))}firstUpdated(){(async()=>{await qe()})(),this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.selectedArea=this.path[1])}render(){return this.hass?this.path&&2==this.path.length&&"edit"==this.path[0]?R`
        <sensor-editor-card .hass=${this.hass} .narrow=${this.narrow} .item=${this.path[1]}> </sensor-editor-card>
      `:R`
        ${this.sensorsPanel()} ${this.addSensorsPanel()}
      `:R``}sensorsPanel(){if(!this.hass)return R``;const e=Object.keys(this.sensors).map(e=>{const t=this.hass.states[e];return{id:e,name:_t(t),icon:gt(t)}});e.sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1);const t={icon:{width:"40px"},name:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"60%",grow:!0,text:!0},modes:{title:nt("panels.sensors.cards.sensors.table.arm_modes",this.hass.language),width:"25%",hide:this.narrow,text:!0},enabled:{title:"Enabled",width:"68px",align:"center"}},a=e.filter(e=>!this.selectedArea||!this.areaFilterOptions.find(e=>e.value==this.selectedArea)||this.sensors[e.id].area==this.selectedArea||"no_area"===this.selectedArea&&!this.sensors[e.id].area).map(e=>{const t=Object.entries(ct).find(([,t])=>t==this.sensors[e.id].type)[0];return{icon:R`
            <paper-tooltip animation-delay="0">
              ${nt(`panels.sensors.cards.editor.fields.device_type.choose.${ct[t]}.name`,this.hass.language)}
            </paper-tooltip>
            <ha-icon icon="${ht[t]}"> </ha-icon>
          `,name:R`
            ${this.sensors[e.id].name||vt(e.name)}
            <span class="secondary">${e.id}</span>
          `,id:e.id,modes:R`
            ${this.sensors[e.id].always_on?nt("panels.sensors.cards.sensors.table.always_on",this.hass.language):Object.values(ut).filter(t=>this.sensors[e.id].modes.includes(t)).map(e=>nt("common.modes_short."+e,this.hass.language)).join(", ")}
          `,enabled:R`
            <ha-switch
              @click=${e=>{e.stopPropagation()}}
              ?checked=${this.sensors[e.id].enabled}
              @change=${t=>this.toggleEnabled(t,e.id)}
            >
            </ha-switch>
          `}});return R`
      <ha-card header="${nt("panels.sensors.title",this.hass.language)}">
        <div class="card-content">
          ${nt("panels.sensors.cards.sensors.description",this.hass.language)}
        </div>

        ${this.areaFilterOptions.length>1?R`
              <div class="table-filter" ?narrow=${this.narrow}>
                <span class="header"
                  >${nt("panels.sensors.cards.sensors.filter.label",this.hass.language)}:</span
                >
                <alarmo-chips
                  .items=${this.areaFilterOptions}
                  value=${this.selectedArea}
                  @value-changed=${e=>this.selectedArea=e.target.value}
                >
                </alarmo-chips>
              </div>
            `:""}
        <alarmo-table
          ?selectable=${!0}
          .columns=${t}
          .data=${a}
          @row-click=${e=>{const t=String(e.detail.id);De(0,"/alarmo/sensors/edit/"+t,!0)}}
        >
          ${nt("panels.sensors.cards.sensors.no_items",this.hass.language)}
        </alarmo-table>
      </ha-card>
    `}addSensorsPanel(){if(!this.hass)return R``;const e=Object.values(this.hass.states).filter(e=>sa(e,this.showAllSensorEntities)).filter(e=>!Object.keys(this.sensors).includes(e.entity_id)).map(e=>Object({id:e.entity_id,name:_t(e),icon:gt(e)}));e.sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1);const t={checkbox:{width:"48px"},icon:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},id:{title:this.hass.localize("ui.components.entity.entity-picker.entity"),width:"40%",hide:this.narrow,text:!0}},a=e.map(e=>({checkbox:R`
          <ha-checkbox
            @change=${t=>this.toggleSelect(t,e.id)}
            ?checked=${this.addSelection.includes(e.id)}
          >
          </ha-checkbox>
        `,icon:R`
          <state-badge .hass=${this.hass} .stateObj=${this.hass.states[e.id]}></state-badge>
        `,name:vt(e.name),id:e.id}));return R`
      <ha-card header="${nt("panels.sensors.cards.add_sensors.title",this.hass.language)}">
        <div class="card-content">
          ${nt("panels.sensors.cards.add_sensors.description",this.hass.language)}
        </div>

        <div style="display: flex; justify-content: flex-end; padding: 8px 16px">
          <ha-switch
            @change=${e=>{this.showAllSensorEntities=e.target.checked}}
            style="padding: 0px 8px"
          >
          </ha-switch>
          ${nt("panels.sensors.cards.add_sensors.actions.show_all",this.hass.language)}
        </div>

        <alarmo-table .columns=${t} .data=${a}>
          ${nt("panels.sensors.cards.add_sensors.no_items",this.hass.language)}
        </alarmo-table>

        <div class="card-actions">
          <mwc-button @click=${this.addSelected} ?disabled=${0==this.addSelection.length}>
            ${nt("panels.sensors.cards.add_sensors.actions.add_to_alarm",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}toggleSelect(e,t){const a=e.target.checked;this.addSelection=a&&!this.addSelection.includes(t)?[...this.addSelection,t]:a?this.addSelection:this.addSelection.filter(e=>e!=t)}toggleEnabled(e,t){const a=e.target.checked;zt(this.hass,{entity_id:t,enabled:a}).catch(t=>kt(t,e)).then()}addSelected(e){if(!this.hass)return;const t=Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,t)=>e.filter(e=>t.includes(e)));this.addSelection.map(e=>oa(this.hass.states[e],t)).map(e=>1==Object.keys(this.areas).length?Object.assign(e,{area:Object.keys(this.areas)[0]}):e).filter(e=>e).forEach(t=>{zt(this.hass,t).catch(t=>kt(t,e)).then()}),this.addSelection=[]}};la.styles=Pe,t([Z()],la.prototype,"narrow",void 0),t([Z()],la.prototype,"path",void 0),t([Z()],la.prototype,"areas",void 0),t([Z()],la.prototype,"sensors",void 0),t([Z()],la.prototype,"addSelection",void 0),t([Z()],la.prototype,"showAllSensorEntities",void 0),t([Z()],la.prototype,"selectedArea",void 0),t([Z()],la.prototype,"areaFilterOptions",void 0),la=t([Q("alarm-view-sensors")],la);let ca=class extends oe{async firstUpdated(){if(this.users=await Mt(this.hass),this.data={name:"",code:"",old_code:"",confirm_code:"",is_admin:!1,can_arm:!0,can_disarm:!0,is_override_code:!1},this.item){const e=this.users[this.item];this.data=Object.assign(Object.assign({},this.data),bt(e,["name","is_admin","can_arm","can_disarm","is_override_code"]))}}render(){return this.data?R`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${this.item?nt("panels.codes.cards.edit_user.title",this.hass.language):nt("panels.codes.cards.new_user.title",this.hass.language)}
          </div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${this.item?nt("panels.codes.cards.edit_user.description",this.hass.language,"{name}",this.users[this.item].name):nt("panels.codes.cards.new_user.description",this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${nt("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}</span>
          <span slot="description"
            >${nt("panels.codes.cards.new_user.fields.name.description",this.hass.language)}</span
          >

          <paper-input
            label="${nt("panels.codes.cards.new_user.fields.name.heading",this.hass.language)}"
            placeholder=""
            value=${this.data.name}
            @change=${e=>this.data={...this.data,name:e.target.value}}
          >
          </paper-input>
        </settings-row>

        ${this.item?R`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.codes.cards.edit_user.fields.old_code.description",this.hass.language)}</span
                >

                <paper-input
                  label="${nt("panels.codes.cards.edit_user.fields.old_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.old_code}
                  @change=${e=>this.data={...this.data,old_code:e.target.value}}
                >
                </paper-input>
              </settings-row>
            `:""}
        ${this.item&&!this.data.old_code.length?"":R`
              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.codes.cards.new_user.fields.code.description",this.hass.language)}</span
                >

                <paper-input
                  label="${nt("panels.codes.cards.new_user.fields.code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.code}
                  @change=${e=>this.data={...this.data,code:e.target.value}}
                >
                </paper-input>
              </settings-row>

              <settings-row .narrow=${this.narrow}>
                <span slot="heading"
                  >${nt("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}</span
                >
                <span slot="description"
                  >${nt("panels.codes.cards.new_user.fields.confirm_code.description",this.hass.language)}</span
                >

                <paper-input
                  label="${nt("panels.codes.cards.new_user.fields.confirm_code.heading",this.hass.language)}"
                  placeholder=""
                  type="password"
                  value=${this.data.confirm_code}
                  @change=${e=>this.data={...this.data,confirm_code:e.target.value}}
                >
                </paper-input>
              </settings-row>
            `}

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.codes.cards.new_user.fields.is_admin.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.codes.cards.new_user.fields.is_admin.description",this.hass.language)}</span
          >

          <ha-switch
            ?checked=${this.data.is_admin}
            @change=${e=>this.data={...this.data,is_admin:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.codes.cards.new_user.fields.can_arm.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.codes.cards.new_user.fields.can_arm.description",this.hass.language)}</span
          >

          <ha-switch
            ?checked=${this.data.can_arm||this.data.is_admin}
            ?disabled=${this.data.is_admin}
            @change=${e=>this.data={...this.data,can_arm:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.codes.cards.new_user.fields.can_disarm.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.codes.cards.new_user.fields.can_disarm.description",this.hass.language)}</span
          >

          <ha-switch
            ?checked=${this.data.can_disarm||this.data.is_admin}
            ?disabled=${this.data.is_admin}
            @change=${e=>this.data={...this.data,can_disarm:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading"
            >${nt("panels.codes.cards.new_user.fields.is_override_code.heading",this.hass.language)}</span
          >
          <span slot="description"
            >${nt("panels.codes.cards.new_user.fields.is_override_code.description",this.hass.language)}</span
          >

          <ha-switch
            ?checked=${this.data.is_override_code}
            @change=${e=>this.data={...this.data,is_override_code:e.target.checked}}
          >
          </ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?R`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}
        </div>
      </ha-card>
    `:R``}deleteClick(e){var t,a;this.item&&(t=this.hass,a=this.item,t.callApi("POST","alarmo/users",{user_id:a,remove:!0})).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}saveClick(e){if(this.data)if(this.data.name.length)if(this.data.code.length<4&&(!this.item||this.data.old_code.length))$t(e,nt("panels.codes.cards.new_user.errors.no_code",this.hass.language));else if(this.data.code!==this.data.confirm_code)$t(e,nt("panels.codes.cards.new_user.errors.code_mismatch",this.hass.language));else if(this.data.is_admin&&(this.data=Object.assign(Object.assign({},this.data),{can_arm:!0,can_disarm:!0})),this.item){let t=Object.assign(Object.assign({},bt(this.data,["name","is_admin","can_arm","can_disarm"])),{user_id:this.item});this.data.old_code.length&&(t=Object.assign(Object.assign({},t),{old_code:this.data.old_code,code:this.data.code})),Nt(this.hass,t).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}else Nt(this.hass,wt(this.data,["confirm_code","old_code"])).catch(t=>kt(t,e)).then(()=>{this.cancelClick()});else $t(e,nt("panels.codes.cards.new_user.errors.no_name",this.hass.language))}cancelClick(){De(0,"/alarmo/codes",!0)}};ca.styles=Pe,t([Z()],ca.prototype,"hass",void 0),t([Z()],ca.prototype,"narrow",void 0),t([Z()],ca.prototype,"item",void 0),t([Z()],ca.prototype,"data",void 0),ca=t([Q("user-editor-card")],ca);let ha=class extends(Vt(oe)){constructor(){super(...arguments),this.users={},this.code_arm_required=!1,this.code_disarm_required=!1,this.code_format="number"}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){if(!this.hass)return;const e=await Ct(this.hass);this.config=e,this.code_arm_required=e.code_arm_required,this.code_disarm_required=e.code_disarm_required,this.code_format=e.code_format;const t=await Mt(this.hass);this.users=t}render(){return this.hass?this.path&&"new_user"==this.path[0]?R`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow}> </user-editor-card>
      `:this.path&&2==this.path.length&&"edit_user"==this.path[0]?R`
        <user-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}> </user-editor-card>
      `:R`
        <ha-card header="${nt("panels.codes.title",this.hass.language)}">
          <div class="card-content">
            ${nt("panels.codes.cards.codes.description",this.hass.language)}
          </div>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.codes.cards.codes.fields.code_arm_required.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.codes.cards.codes.fields.code_arm_required.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.code_arm_required}
              @change=${e=>{this.code_arm_required=e.target.checked}}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.codes.cards.codes.fields.code_disarm_required.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.codes.cards.codes.fields.code_disarm_required.description",this.hass.language)}</span
            >
            <ha-switch
              ?checked=${this.code_disarm_required}
              @change=${e=>{this.code_disarm_required=e.target.checked}}
            >
            </ha-switch>
          </settings-row>

          <settings-row .narrow=${this.narrow}>
            <span slot="heading"
              >${nt("panels.codes.cards.codes.fields.code_format.heading",this.hass.language)}</span
            >
            <span slot="description"
              >${nt("panels.codes.cards.codes.fields.code_format.description",this.hass.language)}</span
            >
            <mwc-button
              class="${"number"==this.code_format?"active":""} ${this.code_arm_required||this.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.code_format="number"}}
              ?disabled=${!this.code_arm_required&&!this.code_disarm_required}
              >${nt("panels.codes.cards.codes.fields.code_format.code_format_number",this.hass.language)}</mwc-button
            >
            <mwc-button
              class="${"text"==this.code_format?"active":""} ${this.code_arm_required||this.code_disarm_required?"":"disabled"}"
              @click=${()=>{this.code_format="text"}}
              ?disabled=${!this.code_arm_required&&!this.code_disarm_required}
            >
              ${nt("panels.codes.cards.codes.fields.code_format.code_format_text",this.hass.language)}</mwc-button
            >
          </settings-row>

          <div class="card-actions">
            <mwc-button @click=${this.saveClick}>
              ${this.hass.localize("ui.common.save")}
            </mwc-button>
          </div>
        </ha-card>

        ${this.usersPanel()}
      `:R``}usersPanel(){if(!this.hass)return R``;const e=Object.values(this.users);e.sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1);const t={icon:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},remarks:{title:nt("panels.codes.cards.user_management.table.remarks",this.hass.language),width:"40%",hide:this.narrow,text:!0}},a=e.map(e=>({id:e.user_id,icon:R`
          <ha-icon icon="mdi:account-outline"></ha-icon>
        `,name:vt(e.name),remarks:e.is_admin?nt("panels.codes.cards.user_management.table.administrator",this.hass.language):""}));return R`
      <ha-card header="${nt("panels.codes.cards.user_management.title",this.hass.language)}">
        <div class="card-content">
          ${nt("panels.codes.cards.user_management.description",this.hass.language)}
        </div>

        <alarmo-table
          ?selectable=${!0}
          .columns=${t}
          .data=${a}
          @row-click=${e=>{const t=String(e.detail.id);De(0,"/alarmo/codes/edit_user/"+t,!0)}}
        >
          ${nt("panels.codes.cards.user_management.no_items",this.hass.language)}
        </alarmo-table>
        <div class="card-actions">
          <mwc-button @click=${this.addUserClick}>
            ${nt("panels.codes.cards.user_management.actions.new_user",this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `}addUserClick(){De(0,"/alarmo/codes/new_user",!0)}saveClick(e){this.hass&&Dt(this.hass,{code_arm_required:this.code_arm_required,code_disarm_required:this.code_disarm_required,code_format:this.code_format}).catch(t=>kt(t,e)).then()}};ha.styles=Pe,t([Z()],ha.prototype,"narrow",void 0),t([Z()],ha.prototype,"path",void 0),t([Z()],ha.prototype,"config",void 0),t([Z()],ha.prototype,"users",void 0),t([Z()],ha.prototype,"code_arm_required",void 0),t([Z()],ha.prototype,"code_disarm_required",void 0),t([Z()],ha.prototype,"code_format",void 0),ha=t([Q("alarm-view-codes")],ha);let ua=class extends oe{constructor(){super(...arguments),this.label="",this.options=[],this.value=[],this.numOptions=1}firstUpdated(){this.value||(this.value=[]),this.value.length>1&&(this.numOptions=this.value.length)}render(){return R`
      <div class="container">
        ${[...Array(this.numOptions).keys()].map(e=>this.renderSelect(e))}
      </div>
    `}renderSelect(e){return R`
      <div>
        <paper-dropdown-menu label=${this.label} ?disabled=${this.disabled}>
          <paper-listbox
            slot="dropdown-content"
            selected=${this.getSelected(e)}
            @selected-item-changed=${t=>this.selectedChange(t,e)}
          >
            ${this.renderOptions(e)}
          </paper-listbox>
        </paper-dropdown-menu>
        ${this.renderButton(e)}
      </div>
    `}renderButton(e){return e!=this.numOptions-1||e==this.options.length-1?R`
        <ha-icon icon="hass:minus" @click=${()=>this.removeOption(e)}></ha-icon>
      `:this.value&&this.value.length>e?R`
        <ha-icon icon="hass:plus" @click=${this.addOption}></ha-icon>
      `:R`
        <ha-icon class="disabled" icon="hass:plus"></ha-icon>
      `}renderOptions(e){const t=this.value.slice(0,e).concat(this.value.slice(e+1));return this.options.filter(e=>e.value).map(e=>R`
          <paper-item value="${e.value}" ?disabled=${t.includes(e.value)}>
            ${e.name||e.value}
          </paper-item>
        `)}getSelected(e){return this.options.filter(e=>e.value).findIndex(t=>t.value==this.value[e])}selectedChange(e,t){if(!e.target.selectedItem)return;const a=e.target.selectedItem.getAttribute("value"),i=this.value.length==t?[...this.value,a]:this.value.slice(0,t).concat(a,this.value.slice(t+1));if(yt(i,this.value))return;this.value=i;const s=new CustomEvent("change");this.dispatchEvent(s)}addOption(){this.numOptions=this.numOptions+1}removeOption(e){this.numOptions=this.numOptions-1,e==this.value.length-1?this.value=this.value.slice(0,e):this.value=this.value.slice(0,e).concat(this.value.slice(e+1))}};ua.styles=se`
    ha-icon {
      padding: 4px;
      display: inline-block;
      vertical-align: bottom;
      cursor: pointer;
    }

    ha-icon.disabled {
      color: var(--disabled-text-color);
    }

    div.container {
      display: flex;
      flex-direction: column;
    }
  `,t([Z()],ua.prototype,"label",void 0),t([Z()],ua.prototype,"options",void 0),t([Z()],ua.prototype,"value",void 0),t([Z({type:Boolean})],ua.prototype,"disabled",void 0),t([Z()],ua.prototype,"numOptions",void 0),ua=t([Q("alarmo-multi-select")],ua);const ma=e=>[{value:mt.Armed,name:nt("panels.actions.cards.new_notification.fields.event.choose.armed.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.armed.description",e.language),icon:"hass:shield-check-outline",trigger:{state:mt.Armed}},{value:mt.Disarmed,name:nt("panels.actions.cards.new_notification.fields.event.choose.disarmed.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.disarmed.description",e.language),icon:"hass:shield-off-outline",trigger:{state:mt.Disarmed}},{value:mt.Triggered,name:nt("panels.actions.cards.new_notification.fields.event.choose.triggered.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.triggered.description",e.language),icon:"hass:bell-alert-outline",trigger:{state:mt.Triggered}},{value:pt.ArmFailure,name:nt("panels.actions.cards.new_notification.fields.event.choose.arm_failure.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.arm_failure.description",e.language),icon:"hass:alert-outline",trigger:{event:pt.ArmFailure}},{value:mt.Arming,name:nt("panels.actions.cards.new_notification.fields.event.choose.arming.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.arming.description",e.language),icon:"hass:home-export-outline",trigger:{state:mt.Arming}},{value:mt.Pending,name:nt("panels.actions.cards.new_notification.fields.event.choose.pending.name",e.language),description:nt("panels.actions.cards.new_notification.fields.event.choose.pending.description",e.language),icon:"hass:home-import-outline",trigger:{state:mt.Pending}}];function pa(e){const t=Object.keys(e.services.notify).map(t=>{let a={value:"notify."+t,name:t};const i=e.states["device_tracker."+t.replace("mobile_app_","")];return i&&(a=Object.assign(Object.assign({},a),{name:i.attributes.friendly_name||je(i.entity_id)})),a});return t.sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1),t}const ga={name:"",triggers:[],actions:[{service:"",service_data:{message:""}}]},va={name:"",triggers:[],actions:[{service:"",service_data:{}}]};function _a(e){if(1!=e.triggers.length)return"";if(e.triggers[0].state)switch(e.triggers[0].state){case mt.Armed:return"The alarm is now ON.";case mt.Disarmed:return"The alarm is now OFF.";case mt.Arming:return"The alarm will be armed soon, please leave the house.";case mt.Pending:return"The alarm is about to trigger, disarm it quickly!";case mt.Triggered:return"The alarm is triggered! Cause: {{open_sensors}}.";default:return""}else if(e.triggers[0].event)switch(e.triggers[0].event){case pt.ArmFailure:return"The alarm could not be armed right now, due to: {{open_sensors}}.";default:return""}return""}const fa=["switch","input_boolean","light","script"];function ba(e,t){if(!e.triggers.length)return nt("panels.actions.validation_errors.no_triggers",t.language);for(let a=0;a<e.triggers.length;a++){const i=e.triggers[a];if(!i.event&&!i.state)return nt("panels.actions.validation_errors.empty_trigger",t.language);if(!ma(t).find(e=>JSON.stringify(e.trigger)===JSON.stringify(i)))return nt("panels.actions.validation_errors.invalid_trigger",t.language,"{trigger}",JSON.stringify(i))}if(void 0!==e.modes&&e.modes.length)for(let a=0;a<e.modes.length;a++){const i=e.modes[a];if(!Object.values(ut).includes(i))return nt("panels.actions.validation_errors.empty_trigger",t.language,"{mode}",i)}if(!e.actions.length)return nt("panels.actions.validation_errors.no_actions",t.language);for(let a=0;a<e.actions.length;a++){const i=e.actions[a];if(!i.service)return nt("panels.actions.validation_errors.no_service",t.language);if(!Object.keys(t.services).includes(Oe(i.service)))return nt("panels.actions.validation_errors.invalid_service",t.language,"{service}",i.service);if(!Object.keys(t.services[Oe(i.service)]).includes(je(i.service)))return nt("panels.actions.validation_errors.invalid_service",t.language,"{service}",i.service);if(!i.service_data||!Object.keys(i.service_data).length)return nt("panels.actions.validation_errors.no_service_data",t.language);if(e.is_notification){if(!Object.keys(i.service_data).includes("message")||!i.service_data.message.length)return nt("panels.actions.validation_errors.no_message_in_service_data",t.language)}else if(!Object.keys(i.service_data).includes("entity_id"))return nt("panels.actions.validation_errors.no_entity_in_service_data",t.language)}}let wa=class extends oe{constructor(){super(...arguments),this.yamlMode=!1,this.namePlaceholder="",this.areas={}}async firstUpdated(){const e=await Rt(this.hass);this.areas=e;const t=await Et(this.hass);if(this.item)t[this.item]&&t[this.item].is_notification?this.data=wt(t[this.item],["automation_id","is_notification","enabled"]):this.data=Object.assign({},ga);else{this.data=Object.assign({},ga);let t="My notification";const a=await Et(this.hass);if(Object.values(a).find(e=>e.name==t)){let e=2;for(;Object.values(a).find(a=>a.name==`${t} ${e}`);)e++;t=`${t} ${e}`}this.namePlaceholder=t,this.data.area||1!=Object.keys(e).length||(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}}render(){return this.data?R`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${nt("panels.actions.cards.new_notification.title",this.hass.language)}
          </div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${nt("panels.actions.cards.new_notification.description",this.hass.language)}
        </div>

        <div style="text-align: right; padding: 0px 16px 16px 16px">
          <mwc-button @click=${this.toggleYaml}>
            ${this.yamlMode?nt("components.editor.ui_mode",this.hass.language):nt("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        ${this.yamlMode?R`
              <ha-yaml-editor
                .label="Label"
                .name="Data"
                .defaultValue=${this.data}
                @value-changed=${e=>{this.yamlCode=e.detail.value}}
              >
              </ha-yaml-editor>
            `:R`

  <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.event.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.event.description",this.hass.language)}</span>

    <alarmo-select
      .hass=${this.hass}
      .items=${ma(this.hass)}
      label=${nt("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
      icons=${!0}
      .value=${this.data.triggers.map(e=>ma(this.hass).find(t=>JSON.stringify(t.trigger)==JSON.stringify(e)).value)[0]}
      @value-changed=${e=>this.updateTriggers(e.target.value)}
    >
    </alarmo-select>

  </settings-row>
  
  ${this.areas&&Object.keys(this.areas).length>1?R`
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.area.description",this.hass.language)}</span>

    <alarmo-select
      .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
      value=${this.data.area||""}
      clearable=${!0}
      label=${nt("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
      @value-changed=${e=>this.data={...this.data,area:e.target.value}}
    </alarmo-select>
  </settings-row>`:""}

  <div class="separator"></div>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.mode.description",this.hass.language)}</span>

    <alarmo-multi-select
      label=${nt("panels.actions.cards.new_notification.fields.mode.heading",this.hass.language)}
      ?disabled=${!this.data.triggers.length||this.data.triggers.some(e=>e.state&&e.state==mt.Disarmed)}
      .options=${this.getModeList()}
      .value=${this.data.modes||[]}
      @change=${e=>this.updateModes(e.target.value)}
    </alarmo-multi-select>

  </settings-row>
  
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.title.description",this.hass.language)}</span>

    <paper-input
      label="${nt("panels.actions.cards.new_notification.fields.title.heading",this.hass.language)}"
      placeholder=""
      value=${this.data.actions[0].service_data.title||""}
      @change=${e=>this.updateTitle(e.target.value)}
    >
    </paper-input>
  </settings-row>

    <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.message.description",this.hass.language)}</span>

    <paper-textarea
      label="${nt("panels.actions.cards.new_notification.fields.message.heading",this.hass.language)}"
      placeholder=${_a(this.data)}
      value=${this.data.actions[0].service_data.message||""}
      @blur=${e=>{this.updateMessage(e.target.value)}}
    >
    </paper-textarea>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.target.description",this.hass.language)}</span>

    <alarmo-multi-select
      label=${nt("panels.actions.cards.new_notification.fields.target.heading",this.hass.language)}
      .options=${this.getTargetList()}
      .value=${this.data.actions.map(e=>e.service)}
      @change=${e=>this.updateTargets(e.target.value)}
    </alarmo-multi-select>
  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_notification.fields.name.description",this.hass.language)}</span>

    <paper-input
      label="${nt("panels.actions.cards.new_notification.fields.name.heading",this.hass.language)}"
      placeholder=${this.namePlaceholder}
      value=${this.data.name}
      @change=${e=>this.data={...this.data,name:e.target.value}}
    >
    </paper-input>
  </settings-row>
  `}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            <ha-icon icon="hass:content-save-outline"></ha-icon>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?R`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  <ha-icon icon="hass:trash-can-outline"></ha-icon>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}

          <mwc-button @click=${this.testClick} style="float: right" trailingIcon>
            ${nt("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>
    `:R``}getTargetList(){return[...Object.values(pa(this.hass)),,...this.data.actions.filter(e=>!pa(this.hass).find(t=>t.value==e.service)).map(e=>Object({value:e.service}))]}getModeList(){var e;return((null===(e=this.data)||void 0===e?void 0:e.area)?this.areas[this.data.area]?Object.entries(this.areas[this.data.area].modes).filter(([,e])=>e.enabled).map(([e])=>e):[]:Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,t)=>e.filter(e=>t.includes(e)))).map(e=>Object({name:nt("common.modes_long."+e,this.hass.language),value:e}))}updateTriggers(e){this.data=Object.assign(Object.assign({},this.data),{triggers:[ma(this.hass).find(t=>t.value==e).trigger]})}updateModes(e){this.data=Object.assign(Object.assign({},this.data),{modes:e})}updateTitle(e){this.data=Object.assign(Object.assign({},this.data),{actions:this.data.actions.map(t=>Object(Object.assign(Object.assign({},t),{service_data:Object.assign(Object.assign({},t.service_data),{title:e})})))})}updateMessage(e){this.data=Object.assign(Object.assign({},this.data),{actions:this.data.actions.map(t=>Object(Object.assign(Object.assign({},t),{service_data:Object.assign(Object.assign({},t.service_data),{message:e})})))})}updateTargets(e){this.data=Object.assign(Object.assign({},this.data),{actions:e.map(e=>Object({service:e,service_data:Object.assign({},this.data.actions[0].service_data)}))})}deleteClick(e){this.item&&Pt(this.hass,this.item).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}loadFormData(){let e=this.yamlMode?Object.assign({},this.yamlCode):this.data;return e=Object.assign(Object.assign({},e),{is_notification:!0,actions:e.actions.map(t=>!t.service_data||t.service_data.message&&t.service_data.message.length?t:Object.assign(Object.assign({},t),{service_data:Object.assign(Object.assign({},t.service_data),{message:_a(e)})})),name:e.name||this.namePlaceholder,area:e.area||""}),e}async saveClick(e){let t=this.loadFormData();const a=ba(t,this.hass);a?$t(e,a):(this.item&&(t=Object.assign(Object.assign({},t),{automation_id:this.item})),qt(this.hass,t).catch(t=>kt(t,e)).then(()=>{this.cancelClick()}))}toggleYaml(){this.data&&(this.yamlMode=!this.yamlMode,!this.yamlMode&&this.yamlCode?this.data=Object.assign({},this.yamlCode):this.yamlCode=Object.assign({},this.data))}cancelClick(){De(0,"/alarmo/actions",!0)}testClick(e){const t=this.loadFormData(),a=ba(t,this.hass);a?$t(e,a):t.actions.forEach(t=>{const[a,i]=t.service.split(".");let s=t.service_data.message;s=s.replace("{{open_sensors}}","Some Example Sensor is open"),s=s.replace("{{bypassed_sensors}}","Some Bypassed Sensor"),s=s.replace("{{arm_mode}}","armed_away"),s=s.replace("{{changed_by}}","Some Example User"),t=Object.assign(Object.assign({},t),{service_data:Object.assign(Object.assign({},t.service_data),{message:s})}),this.hass.callService(a,i,t.service_data).then().catch(t=>{$t(e,t.message)})})}};wa.styles=Pe,t([Z()],wa.prototype,"narrow",void 0),t([Z()],wa.prototype,"item",void 0),t([Z()],wa.prototype,"data",void 0),t([Z()],wa.prototype,"yamlMode",void 0),t([Z()],wa.prototype,"namePlaceholder",void 0),t([Z()],wa.prototype,"areas",void 0),wa=t([Q("notification-editor-card")],wa);let ya=class extends oe{constructor(){super(...arguments),this.includeDomains=[],this.options=[],this.value=[],this.numOptions=1}firstUpdated(){this.value.length>1&&(this.numOptions=this.value.length)}render(){return this.hass?R`
      <div class="container">
        ${[...Array(this.numOptions).keys()].map(e=>this.renderSelect(e))}
      </div>
    `:R``}renderSelect(e){return R`
      <div class="container-item">
        <div class="dropdown-holder">
          <ha-entity-picker
            @change=${t=>{this.selectedChange(t,e)}}
            .includeDomains=${this.includeDomains}
            .hass=${this.hass}
            value=${this.getValue(e)}
            .allowCustomEntity=${!0}
          ></ha-entity-picker>
        </div>
        <div class="icon-holder">
          ${this.renderButton(e)}
        </div>
      </div>
    `}renderButton(e){return e!=this.numOptions-1||e==this.options.length-1?R`
        <ha-icon icon="hass:minus" @click=${()=>this.removeOption(e)}></ha-icon>
      `:this.value&&this.value.length>e?R`
        <ha-icon icon="hass:plus" @click=${this.addOption}></ha-icon>
      `:R`
        <ha-icon class="disabled" icon="hass:plus"></ha-icon>
      `}getValue(e){return e>this.value.length-1?"":this.value[e]}entityFilter(e,t){return!this.value.slice(0,t).concat(this.value.slice(t+1)).includes(e)}selectedChange(e,t){const a=e.target.value;if(!this.entityFilter(a,t))return void this.removeOption(t);const i=this.value.length==t?[...this.value,a]:this.value.slice(0,t).concat(a,this.value.slice(t+1));this.value=i.filter(e=>e);const s=new CustomEvent("change");this.dispatchEvent(s)}addOption(){this.numOptions=this.numOptions+1}removeOption(e){this.numOptions=this.numOptions-1,e==this.value.length-1?this.value=this.value.slice(0,e):this.value=this.value.slice(0,e).concat(this.value.slice(e+1))}};ya.styles=se`
    ha-icon {
      padding: 4px;
      display: inline-block;
      vertical-align: bottom;
      cursor: pointer;
    }

    ha-icon.disabled {
      color: var(--disabled-text-color);
    }

    div.container {
      display: flex;
      flex-direction: column;
    }

    div.container-item {
      display: grid;
      grid-template-columns: 1fr max-content;
      grid-template-rows: min-content;
      grid-template-areas: 'dropdown icon';
      align-items: flex-end;
    }

    div.dropdown-holder {
      grid-area: dropdown;
    }
    div.icon-holder {
      grid-area: icon;
    }
  `,t([Z()],ya.prototype,"includeDomains",void 0),t([Z()],ya.prototype,"options",void 0),t([Z()],ya.prototype,"value",void 0),t([Z()],ya.prototype,"numOptions",void 0),ya=t([Q("alarmo-multi-entity-select")],ya);let $a=class extends oe{constructor(){super(...arguments),this.yamlMode=!1,this.namePlaceholder="",this.areas={}}async firstUpdated(){const e=await Rt(this.hass);this.areas=e;const t=await Et(this.hass);if(this.item)t[this.item]&&!t[this.item].is_notification?this.data=wt(t[this.item],["automation_id","is_notification","enabled"]):this.data=Object.assign({},va);else{this.data=Object.assign({},va);let t="My notification";const a=await Et(this.hass);if(Object.values(a).find(e=>e.name==t)){let e=2;for(;Object.values(a).find(a=>a.name==`${t} ${e}`);)e++;t=`${t} ${e}`}this.namePlaceholder=t,this.data.area||1!=Object.keys(e).length||(this.data=Object.assign(Object.assign({},this.data),{area:Object.keys(this.areas)[0]}))}}render(){return this.data?R`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${nt("panels.actions.cards.new_action.title",this.hass.language)}
          </div>
          <ha-icon-button icon="hass:close" @click=${this.cancelClick}> </ha-icon-button>
        </div>
        <div class="card-content">
          ${nt("panels.actions.cards.new_action.description",this.hass.language)}
        </div>

        <div style="text-align: right; padding: 0px 16px 16px 16px">
          <mwc-button @click=${this.toggleYaml}>
            ${this.yamlMode?nt("components.editor.ui_mode",this.hass.language):nt("components.editor.yaml_mode",this.hass.language)}
          </mwc-button>
        </div>

        ${this.yamlMode?R`
              <ha-yaml-editor
                .label="Label"
                .name="Data"
                .defaultValue=${this.data}
                @value-changed=${e=>{this.yamlCode=e.detail.value}}
              >
              </ha-yaml-editor>
            `:R`

  <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.event.description",this.hass.language)}</span>

    <alarmo-select
      .hass=${this.hass}
      .items=${ma(this.hass)}
      label=${nt("panels.actions.cards.new_action.fields.event.heading",this.hass.language)}
      icons=${!0}
      .value=${this.data.triggers.map(e=>ma(this.hass).find(t=>JSON.stringify(t.trigger)==JSON.stringify(e)).value)[0]}
      @value-changed=${e=>this.updateTriggers(e.target.value)}
    >
    </alarmo-select>

  </settings-row>

  ${this.areas&&Object.keys(this.areas).length>1?R`
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.area.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.area.description",this.hass.language)}</span>

    <alarmo-select
      .items=${Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name}))}
      value=${this.data.area||""}
      clearable=${!0}
      label=${nt("panels.sensors.cards.editor.fields.area.heading",this.hass.language)}
      @value-changed=${e=>this.data={...this.data,area:e.target.value}}
    </alarmo-select>
  </settings-row>`:""}

  <div class="separator"></div>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.mode.description",this.hass.language)}</span>

    <alarmo-multi-select
      label=${nt("panels.actions.cards.new_action.fields.mode.heading",this.hass.language)}
      ?disabled=${!this.data.triggers.length||this.data.triggers.some(e=>e.state&&e.state==mt.Disarmed)}
      .options=${this.getModeList()}
      .value=${this.data.modes||[]}
      @change=${e=>this.updateModes(e.target.value)}
    </alarmo-multi-select>

  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.entity.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.entity.description",this.hass.language)}</span>

    <alarmo-multi-entity-select
      .hass=${this.hass}
      .includeDomains=${fa}
      .value=${this.getEntityValues()}
      @change=${e=>this.updateEntities(e.target.value)}
    ></alarmo-multi-entity-select>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.action.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.action.description",this.hass.language)}</span>
    <div>
    <mwc-button
      class="${"turn_on"==this.getAction()?"active":""}"
      @click=${()=>{this.updateAction("turn_on")}}
      >
        ${nt("panels.actions.cards.new_action.fields.action.turn_on",this.hass.language)}
      </mwc-button>
    <mwc-button
      class="${"turn_off"==this.getAction()?"active":""}"
      @click=${()=>{this.updateAction("turn_off")}}
    >
      ${nt("panels.actions.cards.new_action.fields.action.turn_off",this.hass.language)}
    </mwc-button>
    </div>
  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${!0}>
    <span slot="heading">${nt("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}</span>
    <span slot="description">${nt("panels.actions.cards.new_action.fields.name.description",this.hass.language)}</span>

    <paper-input
      label="${nt("panels.actions.cards.new_action.fields.name.heading",this.hass.language)}"
      placeholder=""
      value=${this.data.name}
      @change=${e=>this.data={...this.data,name:e.target.value}}
    >
    </paper-input>
  </settings-row>

  `}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            <ha-icon icon="hass:content-save-outline"></ha-icon>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>

          ${this.item?R`
                <mwc-button class="warning" @click=${this.deleteClick}>
                  <ha-icon icon="hass:trash-can-outline"></ha-icon>
                  ${this.hass.localize("ui.common.delete")}
                </mwc-button>
              `:""}

          <mwc-button @click=${this.testClick} style="float: right" trailingIcon>
            ${nt("panels.actions.cards.new_notification.actions.test",this.hass.language)}
            <ha-icon icon="hass:arrow-right"></ha-icon>
          </mwc-button>
        </div>
      </ha-card>
    `:R``}getEntityValues(){var e;return null===(e=this.data)||void 0===e?void 0:e.actions.map(e=>{var t;return null===(t=e.service_data)||void 0===t?void 0:t.entity_id}).filter(e=>e)}getModeList(){var e;return((null===(e=this.data)||void 0===e?void 0:e.area)?this.areas[this.data.area]?Object.entries(this.areas[this.data.area].modes).filter(([,e])=>e.enabled).map(([e])=>e):[]:Object.values(this.areas).map(e=>Object.entries(e.modes).filter(([,e])=>e.enabled).map(([e])=>e)).reduce((e,t)=>e.filter(e=>t.includes(e)))).map(e=>Object({name:nt("common.modes_long."+e,this.hass.language),value:e}))}updateTriggers(e){this.data=Object.assign(Object.assign({},this.data),{triggers:[ma(this.hass).find(t=>t.value==e).trigger]})}updateModes(e){this.data=Object.assign(Object.assign({},this.data),{modes:e})}updateEntities(e){var t;const a=this.getAction(),i=[...(null===(t=this.data)||void 0===t?void 0:t.actions)||[]];e.forEach((e,t)=>{var s;t<i.length&&Oe(i[t].service||(null===(s=i[t].service_data)||void 0===s?void 0:s.entity_id)||"")==Oe(e[t])?i[t]=Object.assign(Object.assign({},i[t]),{service_data:Object.assign(Object.assign({},i[t].service_data),{entity_id:e})}):t<i.length?i[t]={service:a?Oe(e)+"."+a:"",service_data:{entity_id:e}}:i.push({service:a?Oe(e)+"."+a:"",service_data:{entity_id:e}})}),this.data=Object.assign(Object.assign({},this.data),{actions:i})}getAction(){var e;const t=(null===(e=this.data)||void 0===e?void 0:e.actions.map(e=>je(e.service)).filter(e=>e))||[];return 1==ft(t).length?t[0]:""}updateAction(e){this.data=Object.assign(Object.assign({},this.data),{actions:this.data.actions.map(t=>{var a;return Object(Object.assign(Object.assign({},t),{service:(Oe((null===(a=t.service_data)||void 0===a?void 0:a.entity_id)||"")||"homeassistant")+"."+e}))})})}deleteClick(e){this.item&&Pt(this.hass,this.item).catch(t=>kt(t,e)).then(()=>{this.cancelClick()})}loadFormData(){let e=this.yamlMode?Object.assign({},this.yamlCode):this.data;return e=Object.assign(Object.assign({},e),{name:e.name||this.namePlaceholder,area:e.area||""}),e}saveClick(e){let t=this.loadFormData();const a=ba(t,this.hass);a?$t(e,a):(this.item&&(t=Object.assign(Object.assign({},t),{automation_id:this.item})),qt(this.hass,t).catch(t=>kt(t,e)).then(()=>{this.cancelClick()}))}toggleYaml(){this.data&&(this.yamlMode=!this.yamlMode,!this.yamlMode&&this.yamlCode?this.data=Object.assign({},this.yamlCode):this.yamlCode=Object.assign({},this.data))}cancelClick(){De(0,"/alarmo/actions",!0)}testClick(e){const t=this.loadFormData(),a=ba(t,this.hass);a?$t(e,a):t.actions.forEach(t=>{const[a,i]=t.service.split(".");this.hass.callService(a,i,t.service_data).then().catch(t=>{$t(e,t.message)})})}};$a.styles=Pe,t([Z()],$a.prototype,"narrow",void 0),t([Z()],$a.prototype,"item",void 0),t([Z()],$a.prototype,"data",void 0),t([Z()],$a.prototype,"yamlMode",void 0),t([Z()],$a.prototype,"namePlaceholder",void 0),t([Z()],$a.prototype,"areas",void 0),$a=t([Q("automation-editor-card")],$a);let ka=class extends(Vt(oe)){constructor(){super(...arguments),this.automations=[],this.areas={},this.notificationFilterOptions=[],this.automationFilterOptions=[]}hassSubscribe(){return this._fetchData(),[this.hass.connection.subscribeEvents(()=>this._fetchData(),"alarmo_updated")]}async _fetchData(){if(!this.hass)return;const e=await Et(this.hass);this.automations=Object.values(e),this.areas=await Rt(this.hass),this.notificationFilterOptions=[{value:"no_area",name:nt("panels.actions.cards.notifications.filter.no_area",this.hass.language),count:Object.values(this.automations).filter(e=>e.is_notification&&!e.area).length}].concat(Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,count:Object.values(this.automations).filter(t=>t.is_notification&&t.area==e.area_id).length})).sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1)),this.automationFilterOptions=[{value:"no_area",name:nt("panels.actions.cards.notifications.filter.no_area",this.hass.language),count:Object.values(this.automations).filter(e=>!e.is_notification&&!e.area).length}].concat(Object.values(this.areas).map(e=>Object({value:e.area_id,name:e.name,count:Object.values(this.automations).filter(t=>!t.is_notification&&t.area==e.area_id).length})).sort((e,t)=>e.name.toLowerCase()<t.name.toLowerCase()?-1:1))}firstUpdated(){this.path&&2==this.path.length&&"filter"==this.path[0]&&(this.notificationFilter=this.path[1],this.automationFilter=this.path[1]),(async()=>{await qe()})()}render(){if(!this.hass)return R``;if(this.path&&this.path.length&&"new_notification"==this.path[0])return R`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow}> </notification-editor-card>
      `;if(this.path&&2==this.path.length&&"edit_notification"==this.path[0])return R`
        <notification-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}>
        </notification-editor-card>
      `;if(this.path&&this.path.length&&"new_action"==this.path[0])return R`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow}> </automation-editor-card>
      `;if(this.path&&2==this.path.length&&"edit_action"==this.path[0])return R`
        <automation-editor-card .hass=${this.hass} .narrow=${this.narrow} item=${this.path[1]}>
        </automation-editor-card>
      `;{const e={type:{width:"40px"},name:{title:this.hass.localize("ui.components.area-picker.add_dialog.name"),width:"40%",grow:!0,text:!0},enabled:{title:nt("panels.actions.cards.notifications.table.enabled",this.hass.language),width:"68px",align:"center"}},t=this.automations.filter(e=>e.is_notification).filter(e=>!this.notificationFilter||!this.notificationFilterOptions.find(e=>e.value==this.notificationFilter)||e.area==this.notificationFilter||"no_area"===this.notificationFilter&&!e.area).map(e=>Object({id:e.automation_id,type:R`
              <ha-icon icon="hass:message-text-outline"></ha-icon>
            `,name:e.name,enabled:R`
              <ha-switch
                ?checked=${e.enabled}
                @click=${t=>{t.stopPropagation(),this.toggleEnable(t,e.automation_id)}}
              ></ha-switch>
            `})),a=this.automations.filter(e=>!e.is_notification).filter(e=>!this.automationFilter||!this.automationFilterOptions.find(e=>e.value==this.automationFilter)||e.area==this.automationFilter||"no_area"===this.automationFilter&&!e.area).map(e=>Object({id:e.automation_id,type:R`
              <ha-icon icon="hass:flash"></ha-icon>
            `,name:e.name,enabled:R`
              <ha-switch
                ?checked=${e.enabled}
                @click=${t=>{t.stopPropagation(),this.toggleEnable(t,e.automation_id)}}
              ></ha-switch>
            `}));return R`
        <ha-card header="${nt("panels.actions.cards.notifications.title",this.hass.language)}">
          <div class="card-content">
            ${nt("panels.actions.cards.notifications.description",this.hass.language)}
          </div>

          ${this.notificationFilterOptions.length>1?R`
                <div class="table-filter" ?narrow=${this.narrow}>
                  <span class="header"
                    >${nt("panels.actions.cards.notifications.filter.label",this.hass.language)}:</span
                  >
                  <alarmo-chips
                    .items=${this.notificationFilterOptions}
                    value=${this.notificationFilter}
                    @value-changed=${e=>this.notificationFilter=e.target.value}
                  >
                  </alarmo-chips>
                </div>
              `:""}
          <alarmo-table
            ?selectable=${!0}
            .columns=${e}
            .data=${t}
            @row-click=${e=>{const t=String(e.detail.id);De(0,"/alarmo/actions/edit_notification/"+t,!0)}}
          >
            ${nt("panels.actions.cards.notifications.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addNotificationClick}>
              ${nt("panels.actions.cards.notifications.actions.new_notification",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>

        <ha-card header="${nt("panels.actions.title",this.hass.language)}">
          <div class="card-content">${nt("panels.actions.cards.actions.description",this.hass.language)}</div>

          ${this.automationFilterOptions.length>1?R`
                <div class="table-filter" ?narrow=${this.narrow}>
                  <span class="header"
                    >${nt("panels.actions.cards.notifications.filter.label",this.hass.language)}:</span
                  >
                  <alarmo-chips
                    .items=${this.automationFilterOptions}
                    value=${this.automationFilter}
                    @value-changed=${e=>this.automationFilter=e.target.value}
                  >
                  </alarmo-chips>
                </div>
              `:""}
          <alarmo-table
            ?selectable=${!0}
            .columns=${e}
            .data=${a}
            @row-click=${e=>{const t=String(e.detail.id);De(0,"/alarmo/actions/edit_action/"+t,!0)}}
          >
            ${nt("panels.actions.cards.actions.table.no_items",this.hass.language)}
          </alarmo-table>

          <div class="card-actions">
            <mwc-button @click=${this.addActionClick}>
              ${nt("panels.actions.cards.actions.actions.new_action",this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>
      `}}toggleEnable(e,t){qt(this.hass,{automation_id:t,enabled:!e.target.checked}).catch(t=>kt(t,e)).then()}addNotificationClick(){De(0,"/alarmo/actions/new_notification",!0)}addActionClick(){De(0,"/alarmo/actions/new_action",!0)}};ka.styles=Pe,t([Z()],ka.prototype,"hass",void 0),t([Z()],ka.prototype,"narrow",void 0),t([Z()],ka.prototype,"path",void 0),t([Z()],ka.prototype,"alarmEntity",void 0),t([Z()],ka.prototype,"automations",void 0),t([Z()],ka.prototype,"areas",void 0),t([Z()],ka.prototype,"notificationFilter",void 0),t([Z()],ka.prototype,"automationFilter",void 0),t([Z()],ka.prototype,"notificationFilterOptions",void 0),t([Z()],ka.prototype,"automationFilterOptions",void 0),ka=t([Q("alarm-view-actions")],ka),e.MyAlarmPanel=class extends oe{async firstUpdated(){window.addEventListener("location-changed",()=>{this.requestUpdate()}),await qe(),this.userConfig=await Mt(this.hass),this.requestUpdate()}render(){if(!customElements.get("ha-app-layout")||!this.userConfig)return R`
        loading...
      `;const e=Object.values(this.userConfig).find(e=>e.name.toLowerCase()==this.hass.user.name.toLowerCase());return this.hass.user.is_admin||e&&e.is_admin?R`
        <ha-app-layout>
          <app-header fixed slot="header">
            <app-toolbar>
              <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}> </ha-menu-button>
              <div main-title>
                ${nt("title",this.hass.language)}
              </div>
              <div class="version">
                v${"1.5.2"}
              </div>
            </app-toolbar>
            <paper-tabs
              scrollable
              attr-for-selected="page-name"
              .selected=${this.getPath()}
              @iron-activate=${this.handlePageSelected}
            >
              <paper-tab page-name="general">
                ${nt("panels.general.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="sensors">
                ${nt("panels.sensors.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="codes">
                ${nt("panels.codes.title",this.hass.language)}
              </paper-tab>
              <paper-tab page-name="actions">
                ${nt("panels.actions.title",this.hass.language)}
              </paper-tab>
            </paper-tabs>
          </app-header>
        </ha-app-layout>
        <div class="view">
          ${this.getView()}
        </div>
      `:R`
        <ha-app-layout>
          <app-header fixed slot="header">
            <app-toolbar>
              <ha-menu-button .hass=${this.hass} .narrow=${this.narrow}> </ha-menu-button>
              <div main-title>
                Alarm panel
              </div>
            </app-toolbar>
          </app-header>
        </ha-app-layout>
        <div class="view">
          <div>
            <ha-card header="Access is blocked">
              <div class="card-content">
                You have no access to view this page. Please check the following:
                <ul>
                  <li>
                    You are logged in using HA user account <b>${this.hass.user.name}</b>. This account
                    <b>${this.hass.user.is_admin?"does":"does NOT"}</b> have administrator permission.
                  </li>
                </ul>
                <ul>
                  <li>
                    There is <b>${e?"a":"NO"}</b> user configured in Alarmo with name
                    <b>${this.hass.user.name}</b>.
                    ${e?`This user ${e.is_admin?"does":"does NOT"}</b> have administrator permission. `:""}
                  </li>
                </ul>
              </div>
            </ha-card>
          </div>
        </div>
      `}getPath(){return window.location.pathname.split("/")}getView(){const e=this.getPath(),t=e[2]||"general",a=e.slice(3);switch(t){case"general":return R`
          <alarm-view-general
            .hass=${this.hass}
            .narrow=${this.narrow}
            .path=${a.length?a:null}
          ></alarm-view-general>
        `;case"sensors":return R`
          <alarm-view-sensors .hass=${this.hass} .narrow=${this.narrow} .path=${a.length?a:null}>
          </alarm-view-sensors>
        `;case"codes":return R`
          <alarm-view-codes .hass=${this.hass} .narrow=${this.narrow} .path=${a.length?a:null}>
          </alarm-view-codes>
        `;case"actions":return R`
          <alarm-view-actions .hass=${this.hass} .narrow=${this.narrow} .path=${a.length?a:null}>
          </alarm-view-actions>
        `;default:return R`
          no view
        `}}handlePageSelected(e){const t=e.detail.item.getAttribute("page-name");t!==this.getPath()?(De(0,"/alarmo/"+t),this.requestUpdate()):scrollTo(0,0)}static get styles(){return se`
      ${Pe} :host {
        color: var(--primary-text-color);
        --paper-card-header-color: var(--primary-text-color);
=======

    let AlarmoSelect = class AlarmoSelect extends LitElement {
        constructor() {
            super(...arguments);
            this.label = "";
            this.items = [];
            this.clearable = false;
            this.icons = false;
            this.rowRenderer = (root, _owner, entry) => {
                if (!root.firstElementChild && this.icons) {
                    root.innerHTML = `
        <style>
          paper-icon-item {
              margin: -10px;
              padding: 0;
          }
          ha-icon {
              display: flex;
              flex: 0 0 40px;
              color: var(--state-icon-color);
          }
        </style>
        <paper-icon-item>
          <ha-icon icon="" slot="item-icon"></ha-icon>
          <paper-item-body two-line>
            <div class="name"></div>
            <div secondary></div>
          </paper-item-body>
        </paper-icon-item>
        `;
                }
                else if (!root.firstElementChild) {
                    root.innerHTML = `
        <style>
          paper-item {
              margin: -10px;
              padding: 0;
          }
        </style>
        <paper-item>
          <paper-item-body two-line>
            <div class="name"></div>
            <div secondary></div>
          </paper-item-body>
        </paper-item>
        `;
                }
                root.querySelector(".name").textContent = entry.item.name;
                root.querySelector("[secondary]").textContent = entry.item.description;
                if (this.icons)
                    root.querySelector("ha-icon").icon = entry.item.icon;
            };
        }
        open() {
            this.updateComplete.then(() => {
                var _a, _b;
                (_b = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("vaadin-combo-box-light")) === null || _b === void 0 ? void 0 : _b.open();
            });
        }
        focus() {
            this.updateComplete.then(() => {
                var _a;
                ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("paper-input")).focus();
            });
        }
        shouldUpdate(changedProps) {
            if (changedProps.get("items")) {
                if (!IsEqual(this.items, changedProps.get("items")))
                    this.firstUpdated();
                else
                    return false;
            }
            return true;
        }
        firstUpdated() {
            this._comboBox.items = this.items;
        }
        render() {
            return html `
      <vaadin-combo-box-light
        item-value-path="value"
        item-id-path="value"
        item-label-path="name"
        .value=${this._value}
        .renderer=${this.rowRenderer}
        @opened-changed=${this._openedChanged}
        @value-changed=${this._valueChanged}
      >
        <paper-input
          .label=${this.label}
          class="input"
          autocapitalize="none"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
        >
          ${this._value && this.items.find(e => e.value == this._value)
            ? html `
                ${this.icons
                ? html `
                <ha-icon 
                  slot="prefix"
                  icon="${this.items.find(e => e.value == this._value).icon}"
                >
                </ha-icon>
                ` :
                ''}
                ${this.clearable
                ? html `
                <ha-icon-button
                  slot="suffix"
                  class="clear-button"
                  @click=${this._clearValue}
                  icon="hass:close"
                >
                </ha-icon-button>
                ` :
                ''}
              `
            : ""}
          <ha-icon-button
            slot="suffix"
            class="toggle-button"
            icon="${this._opened ? "hass:menu-up" : "hass:menu-down"}"
          >
          </ha-icon-button>
        </paper-input>
      </vaadin-combo-box-light>
    `;
        }
        _clearValue(ev) {
            ev.stopPropagation();
            this._setValue("");
        }
        get _value() {
            return this.value || "";
        }
        _openedChanged(ev) {
            this._opened = ev.detail.value;
        }
        _valueChanged(ev) {
            const newValue = ev.detail.value;
            if (newValue !== this._value) {
                this._setValue(newValue);
            }
        }
        _setValue(value) {
            this.value = value;
            setTimeout(() => {
                C(this, "value-changed", { value });
            }, 0);
        }
        static get styles() {
            return css `
      :host {
        line-height: 1em;
      }
      paper-input > ha-icon-button {
        --mdc-icon-button-size: 24px;
        padding: 2px;
        color: var(--secondary-text-color);
      }
      [hidden] {
        display: none;
      }
      paper-input > ha-icon {
          display: flex;
          flex: 0 0 40px;
          color: var(--state-icon-color);
          width: 40px;
          height: 26px;
          align-items: center;
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], AlarmoSelect.prototype, "hass", void 0);
    __decorate([
        property()
    ], AlarmoSelect.prototype, "label", void 0);
    __decorate([
        property()
    ], AlarmoSelect.prototype, "value", void 0);
    __decorate([
        property()
    ], AlarmoSelect.prototype, "items", void 0);
    __decorate([
        property()
    ], AlarmoSelect.prototype, "clearable", void 0);
    __decorate([
        property()
    ], AlarmoSelect.prototype, "icons", void 0);
    __decorate([
        internalProperty()
    ], AlarmoSelect.prototype, "_opened", void 0);
    __decorate([
        query("vaadin-combo-box-light", true)
    ], AlarmoSelect.prototype, "_comboBox", void 0);
    AlarmoSelect = __decorate([
        customElement("alarmo-select")
    ], AlarmoSelect);

    var EArmModes;
    (function (EArmModes) {
        EArmModes["ArmedAway"] = "armed_away";
        EArmModes["ArmedHome"] = "armed_home";
        EArmModes["ArmedNight"] = "armed_night";
        EArmModes["ArmedCustom"] = "armed_custom_bypass";
    })(EArmModes || (EArmModes = {}));
    var EAlarmStates;
    (function (EAlarmStates) {
        EAlarmStates["Disarmed"] = "disarmed";
        EAlarmStates["Armed"] = "armed";
        EAlarmStates["Triggered"] = "triggered";
        EAlarmStates["Pending"] = "pending";
        EAlarmStates["Arming"] = "arming";
    })(EAlarmStates || (EAlarmStates = {}));
    var EAlarmEvents;
    (function (EAlarmEvents) {
        EAlarmEvents["ArmFailure"] = "arm_failure";
    })(EAlarmEvents || (EAlarmEvents = {}));

    const fetchConfig = (hass) => hass.callWS({
        type: "alarmo/config",
    });
    const fetchSensors = (hass) => hass.callWS({
        type: "alarmo/sensors",
    });
    const fetchUsers = (hass) => hass.callWS({
        type: "alarmo/users",
    });
    const fetchAutomations = (hass) => hass.callWS({
        type: "alarmo/automations",
    });
    const saveConfig = (hass, config) => {
        return hass
            .callApi("POST", "alarmo/config", config);
    };
    const saveSensor = (hass, config) => {
        return hass
            .callApi("POST", "alarmo/sensors", config);
    };
    const deleteSensor = (hass, entity_id) => {
        return hass
            .callApi("POST", "alarmo/sensors", {
            entity_id: entity_id,
            remove: true
        });
    };
    const saveUser = (hass, config) => {
        return hass
            .callApi("POST", "alarmo/users", config);
    };
    const deleteUser = (hass, user_id) => {
        return hass
            .callApi("POST", "alarmo/users", {
            user_id: user_id,
            remove: true
        });
    };
    const saveAutomation = (hass, config) => {
        return hass
            .callApi("POST", "alarmo/automations", config);
    };
    const deleteAutomation = (hass, automation_id) => {
        return hass
            .callApi("POST", "alarmo/automations", {
            automation_id: automation_id,
            remove: true
        });
    };
    const fetchAreas = (hass) => hass.callWS({
        type: "alarmo/areas",
    });
    const saveArea = (hass, config) => {
        return hass
            .callApi("POST", "alarmo/area", config);
    };
    const deleteArea = (hass, area_id) => {
        return hass
            .callApi("POST", "alarmo/area", {
            area_id: area_id,
            remove: true
        });
    };

    const SubscribeMixin = (superClass) => {
        class SubscribeClass extends superClass {
            connectedCallback() {
                super.connectedCallback();
                this.__checkSubscribed();
            }
            disconnectedCallback() {
                super.disconnectedCallback();
                if (this.__unsubs) {
                    while (this.__unsubs.length) {
                        const unsub = this.__unsubs.pop();
                        if (unsub instanceof Promise) {
                            unsub.then((unsubFunc) => unsubFunc());
                        }
                        else {
                            unsub();
                        }
                    }
                    this.__unsubs = undefined;
                }
            }
            updated(changedProps) {
                super.updated(changedProps);
                if (changedProps.has("hass")) {
                    this.__checkSubscribed();
                }
            }
            hassSubscribe() {
                return [];
            }
            __checkSubscribed() {
                if (this.__unsubs !== undefined ||
                    !this.isConnected ||
                    this.hass === undefined) {
                    return;
                }
                this.__unsubs = this.hassSubscribe();
            }
        }
        __decorate([
            property({ attribute: false })
        ], SubscribeClass.prototype, "hass", void 0);
        return SubscribeClass;
    };

    let AlarmModeCard = class AlarmModeCard extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.currentTab = 0;
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            this.areas = await fetchAreas(this.hass);
        }
        async firstUpdated() {
            this.areas = await fetchAreas(this.hass);
            this.selectedArea = Object.keys(this.areas)[0];
            this.data = Object.assign({}, this.areas[this.selectedArea].modes);
        }
        render() {
            if (!this.data)
                return html ``;
            const mode = Object.values(EArmModes)[this.currentTab];
            return html `
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${localize("panels.general.cards.modes.title", this.hass.language)}
          </div>

          ${Object.keys(this.areas).length > 1
            ? html `
              <alarmo-select
            .items=${Object.values(this.areas).map(e => Object({ value: e.area_id, name: e.name }))}
            value=${this.selectedArea}
            label=${this.hass.localize("ui.components.area-picker.area")}
            @value-changed=${(ev) => this.selectArea(ev.target.value)}

              </alarmo-select>
              ` : ''}

        </div>
        <div class="card-content">
          ${localize("panels.general.cards.modes.description", this.hass.language)}
        </div>

        <mwc-tab-bar
          .activeIndex=${this.currentTab}
          @MDCTabBar:activated=${(ev) => this.currentTab = Number(ev.detail.index)}
        >
          ${Object.entries(EArmModes)
            .map(([k, v]) => html `
          <mwc-tab
            label="${localize(`common.modes_short.${v}`, this.hass.language)}"
            hasImageIcon
            stacked
            class="${this.data[v].enabled ? "" : "disabled"}"
          >
            <ha-icon icon="${EArmModeIcons[k]}" slot="icon"></ha-icon>
          </mwc-tab>
          `)}
        </mwc-tab-bar>

        <settings-row .narrow=${this.narrow} .large=${true}>
          <span slot="heading">${localize(`common.modes_long.${mode}`, this.hass.language)}</span>
          <span slot="description">${localize(`panels.general.cards.modes.fields.mode.${mode}`, this.hass.language)}</span>

          <div style="display: flex; margin: 10px 0px; justify-content: center; width: 100%">
            <mwc-button
              class="${this.data[mode].enabled ? "active" : ""}"
              @click=${() => this.data = { ...this.data, [mode]: { ...this.data[mode], enabled: true } }}
            >
              ${localize("panels.general.cards.modes.fields.mode.enabled", this.hass.language)}
            </mwc-button>
            <mwc-button
              class="${this.data[mode].enabled ? "" : "active"}"
              @click=${() => this.data = { ...this.data, [mode]: { ...this.data[mode], enabled: false } }}
            >
              ${localize("panels.general.cards.modes.fields.mode.disabled", this.hass.language)}
            </mwc-button>
          </div>
        </settings-row>

        ${this.data[mode].enabled ? html `

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.modes.fields.exit_delay.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.modes.fields.exit_delay.description", this.hass.language)}</span>
          <time-slider
            .hass=${this.hass}
            unit="sec"
            max="180"
            zeroValue=${localize("components.time_slider.none", this.hass.language)}
            value=${this.data[mode].exit_time || 0}
            @change=${(ev) => this.data = { ...this.data, [mode]: { ...this.data[mode], exit_time: Number(ev.target.value) } }}
          >
          </time-slider>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.modes.fields.entry_delay.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.modes.fields.entry_delay.description", this.hass.language)}</span>
          <time-slider
            .hass=${this.hass}
            unit="sec"
            max="180"
            zeroValue=${localize("components.time_slider.none", this.hass.language)}
            value=${this.data[mode].entry_time || 0}
            @change=${(ev) => this.data = { ...this.data, [mode]: { ...this.data[mode], entry_time: Number(ev.target.value) } }}
          >
          </time-slider>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.modes.fields.trigger_time.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.modes.fields.trigger_time.description", this.hass.language)}</span>
          <time-slider
            .hass=${this.hass}
            unit="min"
            max="3600"
            zeroValue=${localize("components.time_slider.infinite", this.hass.language)}
            value=${this.data[mode].trigger_time || 0}
            @change=${(ev) => this.data = { ...this.data, [mode]: { ...this.data[mode], trigger_time: Number(ev.target.value) } }}          >
          </time-slider>
        </settings-row>

        ` : ''}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
    `;
        }
        selectArea(area_id) {
            if (area_id == this.selectedArea)
                return;
            this.selectedArea = area_id;
            this.data = Object.assign({}, this.areas[area_id].modes);
        }
        saveClick(ev) {
            saveArea(this.hass, { area_id: this.selectedArea, modes: this.data })
                .catch(e => handleError(e, ev))
                .then(() => { });
        }
    };
    AlarmModeCard.styles = commonStyle;
    __decorate([
        property()
    ], AlarmModeCard.prototype, "hass", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "currentTab", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "config", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "areas", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "data", void 0);
    __decorate([
        property()
    ], AlarmModeCard.prototype, "selectedArea", void 0);
    AlarmModeCard = __decorate([
        customElement('alarm-mode-card')
    ], AlarmModeCard);

    let SettingsRow = class SettingsRow extends LitElement {
        constructor() {
            super(...arguments);
            this.threeLine = false;
        }
        render() {
            return html `
      <div class="info">
        <slot name="heading"></slot>
        <div class="secondary"><slot name="description"></slot></div>
      </div>
      <slot></slot>
    `;
        }
        static get styles() {
            return css `
      :host {
        display: flex;
        flex-direction: row;
        padding: 0px 16px;
        align-items: center;
        min-height: 72px;
      }
      :host([large]) {
        align-items: normal;
        flex-direction: column;
        border-top: 1px solid var(--divider-color);
        border-bottom: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      :host([narrow]) {
        align-items: normal;
        flex-direction: column;
        border-bottom: none;
        border-top: 1px solid var(--divider-color);
        padding: 16px 16px;
      }
      ::slotted(ha-switch) {
        padding: 16px 0;
      }
      .info {
        flex: 1 0 60px;
      }
      :host([large]) .info, :host([narrow]) .info {
        flex: 1 0 40px;
      }
      .secondary {
        color: var(--secondary-text-color);
      }
    `;
        }
    };
    __decorate([
        property({ type: Boolean, reflect: true })
    ], SettingsRow.prototype, "narrow", void 0);
    __decorate([
        property({ type: Boolean, reflect: true })
    ], SettingsRow.prototype, "large", void 0);
    __decorate([
        property({ type: Boolean, attribute: 'three-line' })
    ], SettingsRow.prototype, "threeLine", void 0);
    SettingsRow = __decorate([
        customElement('settings-row')
    ], SettingsRow);

    let CollapsibleSection = class CollapsibleSection extends LitElement {
        constructor() {
            super(...arguments);
            this.header = "";
            this.open = false;
        }
        render() {
            return html `
      ${this.open
            ?
                html `
        <div class="header open">
          <span
            @click=${() => { this.open = false; }}
          >
            ${this.header}
          </span>
          <ha-icon-button
            icon="hass:chevron-down"
            @click=${() => { this.open = false; }}
          >
          </ha-icon-button>
        </div>
        <slot></slot>
        <div class="header open">
          <span
            @click=${() => { this.open = false; }}
          >
            ${this.header}
          </span>
          <ha-icon-button
            icon="hass:chevron-up"
            @click=${() => { this.open = false; }}
          >
          </ha-icon-button>
        </div>
        `
            :
                html `
        <div class="header">
          <span
            @click=${() => { this.open = true; }}
          >
            ${this.header}
          </span>
          <ha-icon-button
            icon="hass:chevron-right"
            @click=${() => { this.open = true; }}
          >
          </ha-icon-button>
        </div>
      `}

    `;
        }
        static get styles() {
            return css `

  :host {

  }

  div.header {
    display: flex;
    align-items: center;
    padding: 0px 16px;
    cursor: pointer;
  }
  div.header.open:first-of-type {
    border-bottom: 1px solid var(--divider-color);
  }
  div.header.open:last-of-type {
    border-top: 1px solid var(--divider-color);
  }
  
  :host([narrow]) div.header {
    border-top: 1px solid var(--divider-color);
    border-bottom: none;
  }

  div.header span {
    display: flex;
    flex-grow: 1;
  }

  div.seperator {
    height: 1px;
    background: var(--divider-color);
  }
    `;
        }
    };
    __decorate([
        property({ type: Boolean, reflect: true })
    ], CollapsibleSection.prototype, "narrow", void 0);
    __decorate([
        property()
    ], CollapsibleSection.prototype, "header", void 0);
    __decorate([
        property()
    ], CollapsibleSection.prototype, "open", void 0);
    CollapsibleSection = __decorate([
        customElement('collapsible-section')
    ], CollapsibleSection);

    let MqttConfigCard = class MqttConfigCard extends SubscribeMixin(LitElement) {
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            const config = await fetchConfig(this.hass);
            this.config = config;
            this.selection = omit(config.mqtt, ['availability_topic']);
        }
        firstUpdated() {
            (async () => await loadHaForm())();
        }
        render() {
            if (!this.hass || !this.selection)
                return html ``;
            return html `
      <ha-card>
        <div class="card-header">
          <div class="name">${localize("panels.general.cards.mqtt.title", this.hass.language)}</div>
          <ha-icon-button
            icon="hass:close"
            @click=${this.cancelClick}
          >
          </ha-icon-button>
        </div>
        <div class="card-content">${localize("panels.general.cards.mqtt.description", this.hass.language)}</div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.mqtt.fields.state_topic.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.mqtt.fields.state_topic.description", this.hass.language)}</span>
          <paper-input
            label="${localize("panels.general.cards.mqtt.fields.state_topic.heading", this.hass.language)}"
            value=${this.selection.state_topic}
            @change=${(ev) => { this.selection = { ...this.selection, state_topic: ev.target.value }; }}
          ></paper-input>
        </settings-row>

        <collapsible-section
           .narrow=${this.narrow}
          header=${localize("panels.general.cards.mqtt.fields.state_payload.heading", this.hass.language)}
        >
          ${Object.values(AlarmStates)
            .filter(e => filterState(e, this.config))
            .map(e => html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${prettyPrint(e)}</span>
            <span slot="description">${localize("panels.general.cards.mqtt.fields.state_payload.item", this.hass.language, "{state}", prettyPrint(e))}</span>
            <paper-input
              label=${prettyPrint(e)}
              placeholder=${e}
              value=${this.selection.state_payload[e] || ""}
              @change=${(ev) => { this.selection = Assign(this.selection, { state_payload: { [e]: ev.target.value } }); }}
            >
            </paper-input>
          </settings-row>
          `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.mqtt.fields.command_topic.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.mqtt.fields.command_topic.description", this.hass.language)}</span>
          <paper-input
            label="${localize("panels.general.cards.mqtt.fields.command_topic.heading", this.hass.language)}"
            value=${this.selection.command_topic}
            @change=${(ev) => { this.selection = { ...this.selection, command_topic: ev.target.value }; }}
          ></paper-input>
        </settings-row>

        <collapsible-section
           .narrow=${this.narrow}
          header=${localize("panels.general.cards.mqtt.fields.command_payload.heading", this.hass.language)}
        >
          ${Object.values(AlarmCommands)
            .filter(e => filterState(commandToState(e), this.config))
            .map(e => html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${prettyPrint(e)}</span>
            <span slot="description">${localize("panels.general.cards.mqtt.fields.command_payload.item", this.hass.language, "{command}", prettyPrint(e))}</span>
            <paper-input
              label=${prettyPrint(e)}
              placeholder=${e}
              value=${this.selection.command_payload[e] || ""}
              @change=${(ev) => { this.selection = Assign(this.selection, { command_payload: { [e]: ev.target.value } }); }}
            >
            </paper-input>
          </settings-row>
          `)}
        </collapsible-section>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.mqtt.fields.require_code.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.mqtt.fields.require_code.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${this.selection.require_code}
            ?disabled=${!this.config.code_arm_required && !this.config.code_disarm_required}
            @change=${(ev) => { this.selection = { ...this.selection, require_code: ev.target.checked }; }}
          >
          </ha-switch>
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>
      
    `;
        }
        saveClick(ev) {
            if (!this.hass)
                return;
            saveConfig(this.hass, { mqtt: Object.assign(Object.assign({}, this.selection), { enabled: true }) })
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        cancelClick() {
            F(this, "/alarmo/general", true);
        }
    };
    MqttConfigCard.styles = commonStyle;
    __decorate([
        property()
    ], MqttConfigCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], MqttConfigCard.prototype, "config", void 0);
    __decorate([
        property()
    ], MqttConfigCard.prototype, "selection", void 0);
    MqttConfigCard = __decorate([
        customElement('mqtt-config-card')
    ], MqttConfigCard);

    /**
     * @license
     * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     * This code may only be used under the BSD style license found at
     * http://polymer.github.io/LICENSE.txt
     * The complete set of authors may be found at
     * http://polymer.github.io/AUTHORS.txt
     * The complete set of contributors may be found at
     * http://polymer.github.io/CONTRIBUTORS.txt
     * Code distributed by Google as part of the polymer project is also
     * subject to an additional IP rights grant found at
     * http://polymer.github.io/PATENTS.txt
     */
    // For each part, remember the value that was last rendered to the part by the
    // unsafeHTML directive, and the DocumentFragment that was last set as a value.
    // The DocumentFragment is used as a unique key to check if the last value
    // rendered to the part was with unsafeHTML. If not, we'll always re-render the
    // value passed to unsafeHTML.
    const previousValues = new WeakMap();
    /**
     * Renders the result as HTML, rather than text.
     *
     * Note, this is unsafe to use with any user-provided input that hasn't been
     * sanitized or escaped, as it may lead to cross-site-scripting
     * vulnerabilities.
     */
    const unsafeHTML = directive((value) => (part) => {
        if (!(part instanceof NodePart)) {
            throw new Error('unsafeHTML can only be used in text bindings');
        }
        const previousValue = previousValues.get(part);
        if (previousValue !== undefined && isPrimitive(value) &&
            value === previousValue.value && part.value === previousValue.fragment) {
            return;
        }
        const template = document.createElement('template');
        template.innerHTML = value; // innerHTML casts to string internally
        const fragment = document.importNode(template.content, true);
        part.setValue(fragment);
        previousValues.set(part, { value, fragment });
    });

    let AlarmoTable = class AlarmoTable extends LitElement {
        render() {
            if (!this.columns || !this.data)
                return html ``;
            return html `
      <div class="table">
        ${this.renderHeaderRow()}
        ${this.data.length
            ? this.data.map(e => this.renderDataRow(e))
            : html `
          <div class="table-row">
            <div class="table-cell text grow">
              <slot></slot>
            </div>
          </div>
        `}
      </div>
    `;
        }
        renderHeaderRow() {
            if (!this.columns)
                return html ``;
            return html `
      <div class="table-row header">
        ${Object.values(this.columns).map(e => e.hide ? '' : html `
          <div
            class="table-cell ${e.text ? "text" : ""} ${e.grow ? "grow" : ""} ${e.align ? e.align : ""}" style="${e.grow ? "" : `width: ${e.width}`}"
          >
            ${e.title || ""}
          </div>
        `)}
      </div>
    `;
        }
        renderDataRow(data) {
            if (!this.columns)
                return html ``;
            return html `
      <div
        class="table-row ${this.selectable ? "selectable" : ""}"
        @click=${() => this.handleClick(String(data.id))}
      >
        ${Object.entries(this.columns).map(([col, e]) => e.hide ? '' : html `
          <div
            class="table-cell ${e.text ? "text" : ""} ${e.grow ? "grow" : ""} ${e.align ? e.align : ""}" style="${e.grow ? "" : `width: ${e.width}`}"
          >
            ${data[col]}
          </div>
        `)}
      </div>
    `;
        }
        handleClick(id) {
            if (!this.selectable)
                return;
            const myEvent = new CustomEvent("row-click", { detail: { id: id } });
            this.dispatchEvent(myEvent);
        }
    };
    AlarmoTable.styles = css `
      :host {
        width: 100%;
      }
      div.table {
        display: inline-flex;
        flex-direction: column;
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
      }
      div.table .header {
        font-weight: bold;
      }
      div.table-row {
        display: flex;
        width: 100%;
        height: 52px;
        border-top: 1px solid var(--divider-color);
      }

      div.table-cell {
        align-self: center;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-shrink: 0;
        box-sizing: border-box;
      }
      div.table-cell.text {
        padding: 4px 16px;
      }
      div.table-cell.grow {
        flex-grow: 1;
        flex-shrink: 1;
      }

      div.table-cell > ha-switch {
        width: 68px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      div.table-cell.center {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      div.table-cell.right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }

      div.table-cell > ha-icon-button {
        color: var(--secondary-text-color);
      }
      
      div.table-row.selectable {
        cursor: pointer;
      }
      div.table-row.selectable:hover {
        background-color: rgba(var(--rgb-primary-text-color), 0.04);
      }

      ha-icon {
        color: var(--paper-item-icon-color);
        padding: 8px;
      }

      .secondary {
        color: var(--secondary-text-color);
        display: flex;
        padding-top: 4px;
      }

      a, a:visited {
        color: var(--primary-color);
      }
  `;
    __decorate([
        property()
    ], AlarmoTable.prototype, "columns", void 0);
    __decorate([
        property()
    ], AlarmoTable.prototype, "data", void 0);
    __decorate([
        property({ type: Boolean })
    ], AlarmoTable.prototype, "selectable", void 0);
    AlarmoTable = __decorate([
        customElement('alarmo-table')
    ], AlarmoTable);

    let ConfirmDeleteDialog = class ConfirmDeleteDialog extends LitElement {
        async showDialog(params) {
            this._params = params;
            await this.updateComplete;
        }
        async closeDialog() {
            if (this._params)
                this._params.cancel();
            this._params = undefined;
        }
        render() {
            if (!this._params)
                return html ``;
            return html `
      <ha-dialog
        open
        .heading=${true}
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
      <div slot="heading">
        <ha-header-bar>
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            icon="mdi:close"
          >
          </ha-icon-button>
          <span slot="title">
            ${this._params.title}
          </span>
        </ha-header-bar>
      </div>
      <div class="wrapper">
        ${this._params.description}
      </div>
    
        <mwc-button
          slot="primaryAction"
          @click=${this.cancelClick}
          dialogAction="close"
        >
            ${this.hass.localize("ui.dialogs.generic.cancel")}
        </mwc-button>
        <mwc-button
          slot="secondaryAction"
          style="float: left"
          @click=${this.confirmClick}
          dialogAction="close"
        >
            ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
      
    `;
        }
        confirmClick() {
            this._params.confirm();
        }
        cancelClick() {
            this._params.cancel();
        }
        static get styles() {
            return css `
      ${commonStyle}
      div.wrapper {
        color: var(--primary-text-color);
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], ConfirmDeleteDialog.prototype, "hass", void 0);
    __decorate([
        internalProperty()
    ], ConfirmDeleteDialog.prototype, "_params", void 0);
    ConfirmDeleteDialog = __decorate([
        customElement('confirm-delete-dialog')
    ], ConfirmDeleteDialog);

    var confirmDeleteDialog = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get ConfirmDeleteDialog () { return ConfirmDeleteDialog; }
    });

    let CreateAreaDialog = class CreateAreaDialog extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.areas = {};
            this.sensors = {};
            this.automations = {};
            this.name = "";
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass)
                return;
            this.areas = await fetchAreas(this.hass);
            this.sensors = await fetchSensors(this.hass);
            this.automations = await fetchAutomations(this.hass);
        }
        async showDialog(params) {
            await this._fetchData();
            this._params = params;
            if (params.area_id) {
                this.area_id = params.area_id;
                this.name = this.areas[this.area_id].name;
            }
            await this.updateComplete;
        }
        async closeDialog() {
            this._params = undefined;
            this.area_id = undefined;
            this.name = "";
        }
        render() {
            if (!this._params)
                return html ``;
            return html `
      <ha-dialog
        open
        .heading=${true}
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              dialogAction="cancel"
              icon="mdi:close"
            >
            </ha-icon-button>
            <span slot="title">
      ${this.area_id
            ? localize("panels.general.dialogs.edit_area.title", this.hass.language, "{area}", this.areas[this.area_id].name)
            : localize("panels.general.dialogs.create_area.title", this.hass.language)}
            </span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${(ev) => this.name = ev.target.value}
            value="${this.name}"
          >
          </paper-input>
      ${this.area_id
            ? html `<span class="note">${localize("panels.general.dialogs.edit_area.name_warning", this.hass.language)}</span>`
            : ''}
      ${!this.area_id
            ? html `
        <alarmo-select
          .items=${Object.values(this.areas).map(e => Object({ value: e.area_id, name: e.name }))}
          value=${this.selectedArea}
          label="${localize("panels.general.dialogs.create_area.fields.copy_from", this.hass.language)}"
          clearable=${true}
          @value-changed=${(ev) => this.selectedArea = ev.target.value}
        >
        </alarmo-select>
        `
            : ''}
        </div>
        <mwc-button
          slot="primaryAction"
          @click=${this.saveClick}
        >
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        ${this.area_id ?
            html `
        <mwc-button
          slot="secondaryAction"
          @click=${this.deleteClick}
          class="warning"
          ?disabled=${Object.keys(this.areas).length == 1}
        >
          ${this.hass.localize("ui.common.delete")}
        </mwc-button>
        ` : ''}
      </ha-dialog>
    `;
        }
        saveClick(ev) {
            const name = this.name.trim();
            if (!name.length)
                return;
            let data = {
                name: name
            };
            if (this.area_id)
                data = Object.assign(Object.assign({}, data), { area_id: this.area_id });
            else if (this.selectedArea)
                data = Object.assign(Object.assign({}, data), { modes: Object.assign({}, this.areas[this.selectedArea].modes) });
            saveArea(this.hass, data)
                .catch(e => handleError(e, ev))
                .then(() => { this.closeDialog(); });
        }
        async deleteClick(ev) {
            if (!this.area_id)
                return;
            const sensors = Object.values(this.sensors).filter(e => e.area == this.area_id).length;
            const automations = Object.values(this.automations).filter(e => e.area == this.area_id).length;
            let result = false;
            if (sensors || automations) {
                result = await new Promise((resolve) => {
                    C(ev.target, 'show-dialog', {
                        dialogTag: 'confirm-delete-dialog',
                        dialogImport: () => Promise.resolve().then(function () { return confirmDeleteDialog; }),
                        dialogParams: {
                            title: localize("panels.general.dialogs.remove_area.title", this.hass.language),
                            description: localize("panels.general.dialogs.remove_area.description", this.hass.language, ["{sensors}", "{automations}"], [String(sensors), String(automations)]),
                            cancel: () => resolve(false),
                            confirm: () => resolve(true)
                        }
                    });
                });
            }
            else
                result = true;
            if (result) {
                deleteArea(this.hass, this.area_id)
                    .catch(e => handleError(e, ev))
                    .then(() => { this.closeDialog(); });
            }
        }
        static get styles() {
            return css `
      ${commonStyle}
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], CreateAreaDialog.prototype, "hass", void 0);
    __decorate([
        internalProperty()
    ], CreateAreaDialog.prototype, "_params", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "areas", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "sensors", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "automations", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "name", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "area_id", void 0);
    __decorate([
        property()
    ], CreateAreaDialog.prototype, "selectedArea", void 0);
    CreateAreaDialog = __decorate([
        customElement('create-area-dialog')
    ], CreateAreaDialog);

    var createAreaDialog = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get CreateAreaDialog () { return CreateAreaDialog; }
    });

    let AreaConfigCard = class AreaConfigCard extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.areas = {};
            this.sensors = {};
            this.automations = {};
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass)
                return;
            this.areas = await fetchAreas(this.hass);
            this.sensors = await fetchSensors(this.hass);
            this.automations = await fetchAutomations(this.hass);
        }
        render() {
            if (!this.hass)
                return html ``;
            let areas = Object.values(this.areas);
            areas.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
            const columns = {
                actions: {
                    width: "48px"
                },
                name: {
                    title: this.hass.localize("ui.components.area-picker.add_dialog.name"),
                    width: "40%",
                    grow: true,
                    text: true
                },
                remarks: {
                    title: localize("panels.general.cards.areas.table.remarks", this.hass.language),
                    width: "60%",
                    hide: this.narrow,
                    text: true
                },
            };
            const data = Object.values(areas).map(item => {
                const sensors = Object.values(this.sensors).filter(e => e.area == item.area_id).length;
                const automations = Object.values(areas).length == 1
                    ? Object.values(this.automations).filter(e => !e.area || e.area == item.area_id).length
                    : Object.values(this.automations).filter(e => e.area == item.area_id).length;
                const summary_sensors = `<a href="/alarmo/sensors/filter/${item.area_id}">${localize("panels.general.cards.areas.table.summary_sensors", this.hass.language, "{number}", String(sensors))}</a>`;
                const summary_automations = `<a href="/alarmo/actions/filter/${item.area_id}">${localize("panels.general.cards.areas.table.summary_automations", this.hass.language, "{number}", String(automations))}</a>`;
                let output = {
                    id: item.area_id,
                    actions: html `<ha-icon-button @click=${(ev) => this.editClick(ev, item.area_id)} icon="hass:pencil"></ha-icon-button>`,
                    name: prettyPrint(item.name),
                    remarks: unsafeHTML(localize("panels.general.cards.areas.table.summary", this.hass.language, ["{summary_sensors}", "{summary_automations}"], [summary_sensors, summary_automations]))
                };
                return output;
            });
            return html `
      <ha-card header="${localize("panels.general.cards.areas.title", this.hass.language)}">
        <div class="card-content">
          ${localize("panels.general.cards.areas.description", this.hass.language)}
        </div>

      <alarmo-table
      .columns=${columns}
      .data=${data}
      >
        ${localize("panels.general.cards.areas.no_items", this.hass.language)}
      </alarmo-table>
      <div class="card-actions">
        <mwc-button @click=${this.addClick}>
          ${localize("panels.general.cards.areas.actions.add", this.hass.language)}
        </mwc-button>
      </div>
    </ha-card>
    `;
        }
        addClick(ev) {
            const element = ev.target;
            C(element, 'show-dialog', {
                dialogTag: 'create-area-dialog',
                dialogImport: () => Promise.resolve().then(function () { return createAreaDialog; }),
                dialogParams: {},
            });
        }
        editClick(ev, area_id) {
            const element = ev.target;
            C(element, 'show-dialog', {
                dialogTag: 'create-area-dialog',
                dialogImport: () => Promise.resolve().then(function () { return createAreaDialog; }),
                dialogParams: { area_id: area_id },
            });
        }
    };
    AreaConfigCard.styles = commonStyle;
    __decorate([
        property()
    ], AreaConfigCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AreaConfigCard.prototype, "path", void 0);
    __decorate([
        property()
    ], AreaConfigCard.prototype, "config", void 0);
    __decorate([
        property()
    ], AreaConfigCard.prototype, "areas", void 0);
    __decorate([
        property()
    ], AreaConfigCard.prototype, "sensors", void 0);
    __decorate([
        property()
    ], AreaConfigCard.prototype, "automations", void 0);
    AreaConfigCard = __decorate([
        customElement('area-config-card')
    ], AreaConfigCard);

    let EditMasterDialog = class EditMasterDialog extends LitElement {
        constructor() {
            super(...arguments);
            this.name = "";
        }
        async showDialog(params) {
            this._params = params;
            const config = await fetchConfig(this.hass);
            this.name = config.master["name"] || "";
            await this.updateComplete;
        }
        async closeDialog() {
            this._params = undefined;
        }
        render() {
            if (!this._params)
                return html ``;
            return html `
      <ha-dialog
        open
        .heading=${true}
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
        <div slot="heading">
          <ha-header-bar>
            <ha-icon-button
              slot="navigationIcon"
              dialogAction="cancel"
              icon="mdi:close"
            >
            </ha-icon-button>
            <span slot="title"> ${localize("panels.general.dialogs.edit_master.title", this.hass.language)}</span>
          </ha-header-bar>
        </div>
        <div class="wrapper">
          <paper-input
            label=${this.hass.localize("ui.components.area-picker.add_dialog.name")}
            @value-changed=${(ev) => this.name = ev.target.value}
            value="${this.name}"
          >
          </paper-input>
          <span class="note">${localize("panels.general.dialogs.edit_area.name_warning", this.hass.language)}</span>
        </div>
        <mwc-button
          slot="primaryAction"
          @click=${this.saveClick}
        >
          ${this.hass.localize("ui.common.save")}
        </mwc-button>
        <mwc-button
          slot="secondaryAction"
          @click=${this.closeDialog}
        >
          ${this.hass.localize("ui.common.cancel")}
        </mwc-button>
      </ha-dialog>
      
    `;
        }
        saveClick() {
            const name = this.name.trim();
            if (!name.length)
                return;
            saveConfig(this.hass, {
                master: {
                    enabled: true,
                    name: name
                }
            })
                .catch(() => { })
                .then(() => { this.closeDialog(); });
        }
        static get styles() {
            return css `
      div.wrapper {
        color: var(--primary-text-color);
      }
      span.note {
        color: var(--secondary-text-color);
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], EditMasterDialog.prototype, "hass", void 0);
    __decorate([
        internalProperty()
    ], EditMasterDialog.prototype, "_params", void 0);
    __decorate([
        property()
    ], EditMasterDialog.prototype, "name", void 0);
    EditMasterDialog = __decorate([
        customElement('edit-master-dialog')
    ], EditMasterDialog);

    var editMasterDialog = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get EditMasterDialog () { return EditMasterDialog; }
    });

    let AlarmViewGeneral = class AlarmViewGeneral extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.areas = {};
            this.automations = {};
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            this.config = await fetchConfig(this.hass);
            this.areas = await fetchAreas(this.hass);
            this.automations = await fetchAutomations(this.hass);
            this.data = pick(this.config, ['trigger_time', 'disarm_after_trigger', 'mqtt', 'master']);
        }
        firstUpdated() {
            (async () => await loadHaForm())();
        }
        render() {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (!this.hass || !this.config || !this.data)
                return html ``;
            if (this.path && this.path[0] == "mqtt_configuration") {
                return html `
      <mqtt-config-card
        .hass=${this.hass}
        .narrow=${this.narrow}
      >
      </mqtt-config-card>
    `;
            }
            if (this.path && this.path[0] == "edit_area" && this.path.length == 2) {
                return html `
      <area-editor-card
        .hass=${this.hass}
        .narrow=${this.narrow}
        item=${this.path[1]}
      >
      </area-editor-card>
      `;
            }
            else {
                return html `
      <ha-card header="${localize("panels.general.title", this.hass.language)}">


        <div class="card-content">
          ${localize("panels.general.cards.general.description", this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.general.fields.disarm_after_trigger.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.general.fields.disarm_after_trigger.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${this.data.disarm_after_trigger}
            @change=${(ev) => this.data = { ...this.data, disarm_after_trigger: ev.target.checked }}
        }}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.general.fields.enable_mqtt.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.general.fields.enable_mqtt.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${(_b = (_a = this.data) === null || _a === void 0 ? void 0 : _a.mqtt) === null || _b === void 0 ? void 0 : _b.enabled}
            @change=${(ev) => { this.data = { ...this.data, mqtt: { ...this.data.mqtt, enabled: ev.target.checked } }; }}
          >
          </ha-switch>
        </settings-row>

        ${((_d = (_c = this.data) === null || _c === void 0 ? void 0 : _c.mqtt) === null || _d === void 0 ? void 0 : _d.enabled) ?
                html `
        <div style="padding: 0px 0px 16px 16px">
          <mwc-button
            outlined
            @click=${() => F(this, "/alarmo/general/mqtt_configuration", true)}
          >
            ${localize("panels.general.cards.general.actions.setup_mqtt", this.hass.language)}
          </mwc-button>
        </div>
        `
                :
                    ''}

        ${Object.keys(this.areas).length >= 2
                ? html `
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.general.cards.general.fields.enable_master.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.general.cards.general.fields.enable_master.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${((_f = (_e = this.data) === null || _e === void 0 ? void 0 : _e.master) === null || _f === void 0 ? void 0 : _f.enabled) && Object.keys(this.areas).length >= 2}
            ?disabled=${Object.keys(this.areas).length < 2}
            @change=${this.toggleEnableMaster}
          >
          </ha-switch>
        </settings-row>
        ` : ''}

        ${((_h = (_g = this.data) === null || _g === void 0 ? void 0 : _g.master) === null || _h === void 0 ? void 0 : _h.enabled) && Object.keys(this.areas).length >= 2
                ?
                    html `
        <div style="padding: 0px 0px 16px 16px">
          <mwc-button
            outlined
            @click=${this.setupMasterClick}
          >
            ${localize("panels.general.cards.general.actions.setup_master", this.hass.language)}
          </mwc-button>
        </div>
        ` : ''}

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>

      <alarm-mode-card
        .hass=${this.hass}
        .narrow=${this.narrow}
      >
      </alarm-mode-card>

      <area-config-card
        .hass=${this.hass}
        .narrow=${this.narrow}
      >
      </area-config-card>
    `;
            }
        }
        setupMasterClick(ev) {
            const element = ev.target;
            C(element, 'show-dialog', {
                dialogTag: 'edit-master-dialog',
                dialogImport: () => Promise.resolve().then(function () { return editMasterDialog; }),
                dialogParams: {},
            });
        }
        async toggleEnableMaster(ev) {
            const target = ev.target;
            let enabled = target.checked;
            if (!enabled) {
                const automations = Object.values(this.automations).filter(e => !e.area).length;
                if (automations) {
                    const result = await new Promise((resolve) => {
                        C(target, 'show-dialog', {
                            dialogTag: 'confirm-delete-dialog',
                            dialogImport: () => Promise.resolve().then(function () { return confirmDeleteDialog; }),
                            dialogParams: {
                                title: localize("panels.general.dialogs.disable_master.title", this.hass.language),
                                description: localize("panels.general.dialogs.disable_master.description", this.hass.language, ["{automations}"], [String(automations)]),
                                cancel: () => resolve(false),
                                confirm: () => resolve(true)
                            }
                        });
                    });
                    if (!result) {
                        enabled = true;
                        target.checked = true;
                    }
                }
            }
            this.data = Object.assign(Object.assign({}, this.data), { master: Object.assign(Object.assign({}, this.data.master), { enabled: enabled }) });
        }
        saveClick(ev) {
            if (!this.hass || !this.data)
                return;
            saveConfig(this.hass, this.data)
                .catch(e => handleError(e, ev))
                .then(() => {
            });
        }
    };
    AlarmViewGeneral.styles = commonStyle;
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "path", void 0);
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "data", void 0);
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "config", void 0);
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "areas", void 0);
    __decorate([
        property()
    ], AlarmViewGeneral.prototype, "automations", void 0);
    AlarmViewGeneral = __decorate([
        customElement('alarm-view-general')
    ], AlarmViewGeneral);

    let ErrorDialog = class ErrorDialog extends LitElement {
        async showDialog(params) {
            this._params = params;
            await this.updateComplete;
        }
        async closeDialog() {
            this._params = undefined;
        }
        render() {
            if (!this._params)
                return html ``;
            return html `
      <ha-dialog
        open
        .heading=${true}
        @closed=${this.closeDialog}
        @close-dialog=${this.closeDialog}
      >
      <div slot="heading">
        <ha-header-bar>
          <ha-icon-button
            slot="navigationIcon"
            dialogAction="cancel"
            icon="mdi:close"
          >
          </ha-icon-button>
          <span slot="title">
        ${this.hass.localize("state_badge.default.error")}
          </span>
        </ha-header-bar>
      </div>
      <div class="wrapper">
        ${this._params.error || ""}
      </div>
    
        <mwc-button
          slot="primaryAction"
          style="float: left"
          @click=${this.closeDialog}
          dialogAction="close"
        >
            ${this.hass.localize("ui.dialogs.generic.ok")}
        </mwc-button>
      </ha-dialog>
      
    `;
        }
        static get styles() {
            return css `
      div.wrapper {
        color: var(--primary-text-color);
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], ErrorDialog.prototype, "hass", void 0);
    __decorate([
        internalProperty()
    ], ErrorDialog.prototype, "_params", void 0);
    ErrorDialog = __decorate([
        customElement('error-dialog')
    ], ErrorDialog);

    var errorDialog = /*#__PURE__*/Object.freeze({
        __proto__: null,
        get ErrorDialog () { return ErrorDialog; }
    });

    const isValidSensor = (entity, showAllDeviceClasses) => {
        const domain = getDomain(entity.entity_id);
        if (domain == 'binary_sensor') {
            if (showAllDeviceClasses)
                return true;
            const type = entity.attributes.device_class;
            if (!type)
                return false;
            if ([
                'door',
                'garage_door',
                'gas',
                'heat',
                'lock',
                'moisture',
                'motion',
                'moving',
                'occupancy',
                'opening',
                'presence',
                'safety',
                'smoke',
                'sound',
                'vibration',
                'window',
            ].includes(type))
                return true;
            return false;
        }
        return false;
    };
    const sensorClassToType = (stateObj) => {
        switch (stateObj.attributes.device_class) {
            case 'door':
            case 'garage_door':
            case 'lock':
            case 'opening':
                return ESensorTypes.Door;
            case 'window':
                return ESensorTypes.Window;
            case 'gas':
            case 'heat':
            case 'moisture':
            case 'smoke':
            case 'safety':
                return ESensorTypes.Environmental;
            case 'motion':
            case 'moving':
            case 'occupancy':
            case 'presence':
                return ESensorTypes.Motion;
            case 'sound':
            case 'opening':
            case 'vibration':
                return ESensorTypes.Tamper;
            default:
                return;
        }
    };
    function defaultSensorConfig(stateObj, modeList) {
        if (!stateObj)
            return null;
        const domain = d(stateObj.entity_id);
        let config = {
            entity_id: stateObj.entity_id,
            name: stateObj.attributes.friendly_name || stateObj.entity_id,
            modes: [],
            immediate: false,
            arm_on_close: false,
            allow_open: false,
            always_on: false,
            trigger_unavailable: false,
            type: ESensorTypes.Other,
            enabled: true
        };
        if (domain == 'binary_sensor') {
            const type = sensorClassToType(stateObj);
            if (type) {
                config = Object.assign(Object.assign(Object.assign({}, config), { type: type }), sensorConfigByType(modeList)[type]);
            }
        }
        return config;
    }
    const sensorConfigByType = (modeList) => {
        const filterModes = (modes) => modes.filter(e => modeList.includes(e));
        return {
            [ESensorTypes.Door]: {
                modes: filterModes([EArmModes.ArmedAway, EArmModes.ArmedHome, EArmModes.ArmedNight]),
                always_on: false,
                allow_open: false,
                arm_on_close: true,
                immediate: false,
            },
            [ESensorTypes.Window]: {
                modes: filterModes([EArmModes.ArmedAway, EArmModes.ArmedHome, EArmModes.ArmedNight]),
                always_on: false,
                allow_open: false,
                arm_on_close: false,
                immediate: true,
            },
            [ESensorTypes.Motion]: {
                modes: filterModes([EArmModes.ArmedAway]),
                always_on: false,
                allow_open: true,
                arm_on_close: false,
                immediate: false,
            },
            [ESensorTypes.Tamper]: {
                modes: filterModes([EArmModes.ArmedAway, EArmModes.ArmedHome, EArmModes.ArmedNight, EArmModes.ArmedCustom]),
                always_on: false,
                allow_open: false,
                arm_on_close: false,
                immediate: true,
            },
            [ESensorTypes.Environmental]: {
                modes: filterModes([EArmModes.ArmedAway, EArmModes.ArmedHome, EArmModes.ArmedNight, EArmModes.ArmedCustom]),
                always_on: true,
                allow_open: false,
                arm_on_close: false,
                immediate: false,
            }
        };
    };

    let sensorEditorCard = class sensorEditorCard extends LitElement {
        async firstUpdated() {
            const areas = await fetchAreas(this.hass);
            this.areas = areas;
            const sensors = await fetchSensors(this.hass);
            this.data = sensors[this.item];
            if (!this.data.area && Object.keys(areas).length == 1)
                this.data = Object.assign(Object.assign({}, this.data), { area: Object.keys(this.areas)[0] });
        }
        render() {
            if (!this.data)
                return html ``;
            const stateObj = this.hass.states[this.data.entity_id];
            return html `
        <ha-card
        >
          <div class="card-header">
            <div class="name">
              ${localize("panels.sensors.cards.editor.title", this.hass.language)}
            </div>
            <ha-icon-button
              icon="hass:close"
              @click=${this.cancelClick}
            >
            </ha-icon-button>
          </div>
          <div class="card-content">
              ${localize("panels.sensors.cards.editor.description", this.hass.language, "{entity}", this.item)}
          </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.sensors.cards.editor.fields.name.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.sensors.cards.editor.fields.name.description", this.hass.language)}</span>

          <paper-input
            label="${localize("panels.sensors.cards.editor.fields.name.heading", this.hass.language)}"
            placeholder=${(stateObj === null || stateObj === void 0 ? void 0 : stateObj.attributes.friendly_name) || ""}
            value=${this.data.name}
            @change=${(ev) => this.data = { ...this.data, name: ev.target.value }}
          >
          </paper-input>

        </settings-row>

        ${Object.keys(this.areas).length > 1
            ? html `
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.sensors.cards.editor.fields.area.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.sensors.cards.editor.fields.area.description", this.hass.language)}</span>

          <alarmo-select
            .items=${Object.values(this.areas).map(e => Object({ value: e.area_id, name: e.name }))}
            value=${this.data.area}
            label=${localize("panels.sensors.cards.editor.fields.area.heading", this.hass.language)}
            @value-changed=${(ev) => this.data = { ...this.data, area: ev.target.value }}
          </alarmo-select>
        </settings-row>`
            : ''}
        
        <settings-row .narrow=${this.narrow}  .large=${true}>
          <span slot="heading">${localize("panels.sensors.cards.editor.fields.device_type.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.sensors.cards.editor.fields.device_type.description", this.hass.language)}</span>

          <alarmo-select
            .hass=${this.hass}
            .items=${Object.entries(ESensorTypes)
            .filter(([, e]) => e != ESensorTypes.Other)
            .map(([k, v]) => Object({
            value: v,
            name: localize(`panels.sensors.cards.editor.fields.device_type.choose.${v}.name`, this.hass.language),
            description: localize(`panels.sensors.cards.editor.fields.device_type.choose.${v}.description`, this.hass.language),
            icon: ESensorIcons[k]
        }))}
            label=${localize("panels.sensors.cards.editor.fields.device_type.heading", this.hass.language)}
            clearable=${true}
            icons=${true}
            value=${this.data["type"]}
            @value-changed=${(ev) => this.setType((ev.target.value || ESensorTypes.Other))}
          >
          </alarmo-select>
        </settings-row>
        
        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.sensors.cards.editor.fields.modes.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.sensors.cards.editor.fields.modes.description", this.hass.language)}</span>
          
          <div>
            ${this.modesByArea(this.data.area)
            .map(el => html `
              <mwc-button
                class="${this.data.modes.includes(el) ? "active" : ""}"
                @click=${() => {
            this.data = {
                ...this.data,
                modes: this.data.modes.includes(el)
                    ? Without(this.data.modes, el)
                    : Unique(this.data.modes.concat([el]))
            };
        }}
              >
                <ha-icon icon="${EArmModeIcons[Object.entries(EArmModes).find(([, v]) => v == el)[0]]}"></ha-icon>
                ${localize(`common.modes_short.${el}`, this.hass.language)}
              </mwc-button>
              `)}
          </div>

        </settings-row>

        <collapsible-section
           .narrow=${this.narrow}
          header=${localize("panels.sensors.cards.editor.actions.toggle_advanced", this.hass.language)}
        >
      ${!this.data.type || [ESensorTypes.Environmental, ESensorTypes.Other].includes(this.data.type)
            ? html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${localize("panels.sensors.cards.editor.fields.always_on.heading", this.hass.language)}</span>
            <span slot="description">${localize("panels.sensors.cards.editor.fields.always_on.description", this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.always_on}
              @change=${(ev) => this.data = ev.target.checked
                ? { ...this.data, always_on: true, arm_on_close: false, immediate: true, allow_open: false }
                : { ...this.data, always_on: false }}
            >
            </ha-switch>
          </settings-row>
          ` : ''}
  
      ${!this.data.type || [ESensorTypes.Door, ESensorTypes.Other].includes(this.data.type)
            ? html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${localize("panels.sensors.cards.editor.fields.arm_on_close.heading", this.hass.language)}</span>
            <span slot="description">${localize("panels.sensors.cards.editor.fields.arm_on_close.description", this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.arm_on_close}
              ?disabled=${this.data.always_on}
              @change=${(ev) => this.data = ev.target.checked
                ? { ...this.data, arm_on_close: true, allow_open: false, immediate: false, always_on: false }
                : { ...this.data, arm_on_close: false }}
            >
            </ha-switch>
          </settings-row>
          ` : ''}

      ${!this.data.type || [ESensorTypes.Window, ESensorTypes.Door, ESensorTypes.Motion, ESensorTypes.Tamper, ESensorTypes.Other].includes(this.data.type)
            ? html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${localize("panels.sensors.cards.editor.fields.immediate.heading", this.hass.language)}</span>
            <span slot="description">${localize("panels.sensors.cards.editor.fields.immediate.description", this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.immediate}
              ?disabled=${this.data.always_on || this.data.arm_on_close}
              @change=${(ev) => this.data = ev.target.checked
                ? { ...this.data, immediate: true, arm_on_close: false, always_on: false, allow_open: false }
                : { ...this.data, immediate: false }}
            >
            </ha-switch>
          </settings-row>
          ` : ''}
        
      ${!this.data.type || [ESensorTypes.Motion, ESensorTypes.Other].includes(this.data.type)
            ? html `
          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${localize("panels.sensors.cards.editor.fields.allow_open.heading", this.hass.language)}</span>
            <span slot="description">${localize("panels.sensors.cards.editor.fields.allow_open.description", this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.allow_open}
              ?disabled=${this.data.always_on || this.data.immediate || this.data.arm_on_close}
              @change=${(ev) => this.data = ev.target.checked
                ? { ...this.data, allow_open: true, arm_on_close: false, always_on: false, immediate: false }
                : { ...this.data, allow_open: false }}
            >
            </ha-switch>
          </settings-row>
          ` : ''}

          <settings-row .narrow=${this.narrow}>
            <span slot="heading">${localize("panels.sensors.cards.editor.fields.trigger_unavailable.heading", this.hass.language)}</span>
            <span slot="description">${localize("panels.sensors.cards.editor.fields.trigger_unavailable.description", this.hass.language)}</span>

            <ha-switch
              ?checked=${this.data.trigger_unavailable}
              @change=${(ev) => this.data = { ...this.data, trigger_unavailable: ev.target.checked }}
            >
            </ha-switch>
          </settings-row>

          
        </collapsible-section>
  
          <div class="card-actions">
            <mwc-button
              @click=${this.saveClick}
            >
              ${this.hass.localize("ui.common.save")}
            </mwc-button>

            <mwc-button
              class="warning"
              @click=${this.deleteClick}
            >
              ${localize("panels.sensors.cards.editor.actions.remove", this.hass.language)}
            </mwc-button>
          </div>
        </ha-card>
    `;
        }
        modesByArea(area_id) {
            const modesPerArea = Object.keys(this.areas)
                .reduce((obj, e) => Object.assign(obj, {
                [e]: Object.entries(this.areas[e].modes)
                    .filter(([, v]) => v.enabled)
                    .map(([k]) => k)
            }), {});
            return area_id
                ? modesPerArea[area_id]
                : Object.values(modesPerArea).reduce((a, b) => a.filter(i => b.includes(i)));
        }
        setType(type) {
            const config = this.data.area
                ? this.areas[this.data.area].modes
                : Object.values(this.areas).map(e => e.modes)[0];
            const settings = type != ESensorTypes.Other ? sensorConfigByType(this.modesByArea(this.data.area))[type] : {};
            this.data = Object.assign(Object.assign(Object.assign({}, this.data), { type: type }), settings);
        }
        deleteClick(ev) {
            deleteSensor(this.hass, this.item)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        saveClick(ev) {
            let errors = [];
            if (!this.data.area)
                errors.push(localize("panels.sensors.cards.editor.errors.no_area", this.hass.language));
            if (!this.data.modes.length && !this.data.always_on)
                errors.push(localize("panels.sensors.cards.editor.errors.no_modes", this.hass.language));
            if (errors.length) {
                showErrorDialog(ev, html `
        ${localize("panels.sensors.cards.editor.errors.description", this.hass.language)}
        <ul>
          ${errors.map(e => html `<li>${e}</li>`)}
        </ul>
      `);
            }
            else {
                saveSensor(this.hass, Object.assign({}, this.data))
                    .catch(e => handleError(e, ev))
                    .then(() => { this.cancelClick(); });
            }
        }
        cancelClick() {
            F(this, "/alarmo/sensors", true);
        }
    };
    sensorEditorCard.styles = commonStyle;
    __decorate([
        property()
    ], sensorEditorCard.prototype, "hass", void 0);
    __decorate([
        property()
    ], sensorEditorCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], sensorEditorCard.prototype, "item", void 0);
    __decorate([
        property()
    ], sensorEditorCard.prototype, "data", void 0);
    sensorEditorCard = __decorate([
        customElement('sensor-editor-card')
    ], sensorEditorCard);

    let AlarmoChips = class AlarmoChips extends LitElement {
        constructor() {
            super(...arguments);
            this.items = [];
            this.value = null;
        }
        render() {
            return html `
      ${this.items.map(e => {
            return html `
          <div class="chip ${this.value == e.value ? "selected" : ""}" @click=${() => this.selectItem(e.value)}>
            ${e.count !== undefined
                ? html `<span class="count">${e.count > 99 ? 99 : e.count}</span>`
                : ''}
            <span class="label">${e.name}</span>
          </div>
        `;
        })}
    `;
        }
        selectItem(value) {
            this.value = this.value == value
                ? null
                : value;
            C(this, "value-changed");
        }
        static get styles() {
            return css `
      :host {
      }
      .chip {
        display: inline-flex;
        background: rgba(var(--rgb-primary-text-color), 0.08);
        color: rgba(var(--rgb-primary-text-color), 0.8);
        align-items: center;
        justify-content: center;
        border-radius: 16px;
        padding: 0px 6px;
        margin: 1px 0px;
        height: 32px;
        min-width: 35px;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
      }
      .chip span.label {
        margin: 0px 6px;
      }
      .chip span.count {
        background: rgba(var(--rgb-secondary-text-color), 0.85);
        color: rgba(var(--rgb-text-primary-color), 1);
        border-radius: 10px;
        height: 20px;
        display: flex;
        width: 20px;
        justify-content: center;
        align-items: flex-start;
        font-size: 12px;
        line-height: 20px;
      }
      .chip:hover {
        background: rgba(var(--rgb-primary-text-color), 0.12);
      }
      .chip:active {
        background: rgba(var(--rgb-primary-text-color), 0.24);
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
      }
      .chip.selected {
        background: rgba(var(--rgb-primary-color), 0.9);
        color: var(--text-primary-color);
      }
      .chip.selected:hover {
        background: rgba(var(--rgb-primary-color), 0.85);
      }
      .chip.selected:active {
        background: rgba(var(--rgb-primary-color), 0.74);
      }
    `;
        }
    };
    __decorate([
        property({ attribute: false })
    ], AlarmoChips.prototype, "hass", void 0);
    __decorate([
        property()
    ], AlarmoChips.prototype, "items", void 0);
    __decorate([
        property()
    ], AlarmoChips.prototype, "value", void 0);
    AlarmoChips = __decorate([
        customElement("alarmo-chips")
    ], AlarmoChips);

    let AlarmViewSensors = class AlarmViewSensors extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.areas = {};
            this.sensors = {};
            this.addSelection = [];
            this.showAllSensorEntities = false;
            this.areaFilterOptions = [];
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            this.areas = await fetchAreas(this.hass);
            this.sensors = await fetchSensors(this.hass);
            this.areaFilterOptions = [
                {
                    value: "no_area",
                    name: localize("panels.sensors.cards.sensors.filter.no_area", this.hass.language),
                    count: Object.values(this.sensors).filter(e => !e.area).length
                }
            ]
                .concat(Object.values(this.areas)
                .map(e => Object({
                value: e.area_id,
                name: e.name,
                count: Object.values(this.sensors).filter(el => el.area == e.area_id).length
            }))
                .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)));
        }
        firstUpdated() {
            (async () => await loadHaForm())();
            if (this.path && this.path.length == 2 && this.path[0] == "filter")
                this.selectedArea = this.path[1];
        }
        render() {
            if (!this.hass)
                return html ``;
            if (this.path && this.path.length == 2 && this.path[0] == "edit") {
                return html `
      <sensor-editor-card
        .hass=${this.hass}
        .narrow=${this.narrow}
        .item=${this.path[1]}
      >

      </sensor-editor-card>
    `;
            }
            else {
                return html `
      ${this.sensorsPanel()}
      ${this.addSensorsPanel()}

    `;
            }
        }
        sensorsPanel() {
            if (!this.hass)
                return html ``;
            let sensorsList = Object.keys(this.sensors)
                .map(e => {
                const stateObj = this.hass.states[e];
                return {
                    id: e,
                    name: computeName(stateObj),
                    icon: computeIcon(stateObj),
                };
            });
            sensorsList.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
            const columns = {
                icon: {
                    width: "40px",
                },
                name: {
                    title: this.hass.localize("ui.components.entity.entity-picker.entity"),
                    width: "60%",
                    grow: true,
                    text: true
                },
                modes: {
                    title: localize("panels.sensors.cards.sensors.table.arm_modes", this.hass.language),
                    width: "25%",
                    hide: this.narrow,
                    text: true
                },
                enabled: {
                    title: "Enabled",
                    width: "68px",
                    align: "center"
                }
            };
            const data = sensorsList
                .filter(e => !this.selectedArea ||
                !this.areaFilterOptions.find(e => e.value == this.selectedArea) ||
                this.sensors[e.id].area == this.selectedArea ||
                (this.selectedArea === "no_area" && !this.sensors[e.id].area))
                .map(item => {
                const type = Object.entries(ESensorTypes).find(([, v]) => v == this.sensors[item.id].type)[0];
                let output = {
                    icon: html `
          <paper-tooltip animation-delay="0">
            ${localize(`panels.sensors.cards.editor.fields.device_type.choose.${ESensorTypes[type]}.name`, this.hass.language)}
          </paper-tooltip>
          <ha-icon
            icon="${ESensorIcons[type]}"
          >
          </ha-icon>`,
                    name: html `
          ${this.sensors[item.id].name || prettyPrint(item.name)}
          <span class="secondary">${item.id}</span>
        `,
                    id: item.id,
                    modes: html `
          ${this.sensors[item.id].always_on
                    ? localize("panels.sensors.cards.sensors.table.always_on", this.hass.language)
                    : Object.values(EArmModes)
                        .filter(e => this.sensors[item.id].modes.includes(e))
                        .map(e => localize(`common.modes_short.${e}`, this.hass.language))
                        .join(', ')}
        `,
                    enabled: html `
          <ha-switch
            @click=${(ev) => { ev.stopPropagation(); }}
            ?checked=${this.sensors[item.id].enabled}
            @change=${(ev) => this.toggleEnabled(ev, item.id)}
          >
          </ha-switch>
        `
                };
                return output;
            });
            return html `
    <ha-card header="${localize("panels.sensors.title", this.hass.language)}">
      <div class="card-content">
        ${localize("panels.sensors.cards.sensors.description", this.hass.language)}
      </div>

      ${this.areaFilterOptions.length > 1
            ? html `
      <div class="table-filter" ?narrow=${this.narrow}>
       <span class="header">${localize("panels.sensors.cards.sensors.filter.label", this.hass.language)}:</span>
        <alarmo-chips
          .items=${this.areaFilterOptions}
          value=${this.selectedArea}
          @value-changed=${(ev) => this.selectedArea = ev.target.value}
        >
        </alarmo-chips>
      </div>
      ` : ''}
      <alarmo-table
        ?selectable=${true}
        .columns=${columns}
        .data=${data}
        @row-click=${(ev) => {
            const id = String(ev.detail.id);
            F(this, `/alarmo/sensors/edit/${id}`, true);
        }}
      >
        ${localize("panels.sensors.cards.sensors.no_items", this.hass.language)}
      </alarmo-table>
    </ha-card>
    `;
        }
        addSensorsPanel() {
            if (!this.hass)
                return html ``;
            let addSensorsList = Object.values(this.hass.states)
                .filter(e => isValidSensor(e, this.showAllSensorEntities))
                .filter(e => !Object.keys(this.sensors).includes(e.entity_id))
                .map(e => Object({
                id: e.entity_id,
                name: computeName(e),
                icon: computeIcon(e),
            }));
            addSensorsList.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
            const columns = {
                checkbox: {
                    width: "48px",
                },
                icon: {
                    width: "40px",
                },
                name: {
                    title: this.hass.localize("ui.components.area-picker.add_dialog.name"),
                    width: "40%",
                    grow: true,
                    text: true
                },
                id: {
                    title: this.hass.localize("ui.components.entity.entity-picker.entity"),
                    width: "40%",
                    hide: this.narrow,
                    text: true
                }
            };
            const data = addSensorsList.map(item => {
                let output = {
                    checkbox: html `
        <ha-checkbox
          @change=${(e) => this.toggleSelect(e, item.id)}
          ?checked=${this.addSelection.includes(item.id)}
        >
        </ha-checkbox>`,
                    icon: html `<state-badge .hass=${this.hass} .stateObj=${this.hass.states[item.id]}></state-badge>`,
                    name: prettyPrint(item.name),
                    id: item.id
                };
                return output;
            });
            return html `
    <ha-card header="${localize("panels.sensors.cards.add_sensors.title", this.hass.language)}">
      <div class="card-content">
        ${localize("panels.sensors.cards.add_sensors.description", this.hass.language)}
      </div>

      <div style="display: flex; justify-content: flex-end; padding: 8px 16px">
        <ha-switch
          @change=${(ev) => { this.showAllSensorEntities = ev.target.checked; }}
          style="padding: 0px 8px"
        >
        </ha-switch>
        ${localize("panels.sensors.cards.add_sensors.actions.show_all", this.hass.language)}
      </div>

      <alarmo-table
        .columns=${columns}
        .data=${data}
      >
        ${localize("panels.sensors.cards.add_sensors.no_items", this.hass.language)}
      </alarmo-table>
        
      <div class="card-actions">
        <mwc-button
          @click=${this.addSelected}
          ?disabled=${this.addSelection.length == 0}
        >
          ${localize("panels.sensors.cards.add_sensors.actions.add_to_alarm", this.hass.language)}
        </mwc-button>
      </div>
    </ha-card>
    `;
        }
        toggleSelect(ev, id) {
            const checked = ev.target.checked;
            this.addSelection = checked && !this.addSelection.includes(id)
                ? [...this.addSelection, id]
                : !checked ? this.addSelection.filter(e => e != id) : this.addSelection;
        }
        toggleEnabled(ev, id) {
            const enabled = ev.target.checked;
            saveSensor(this.hass, { entity_id: id, enabled: enabled })
                .catch(e => handleError(e, ev))
                .then(() => { });
        }
        addSelected(ev) {
            if (!this.hass)
                return;
            const modeList = Object.values(this.areas)
                .map(e => Object.entries(e.modes)
                .filter(([, v]) => v.enabled)
                .map(([k]) => k))
                .reduce((a, b) => a.filter(i => b.includes(i)));
            const data = this.addSelection
                .map(e => defaultSensorConfig(this.hass.states[e], modeList))
                .map(e => Object.keys(this.areas).length == 1
                ? Object.assign(e, {
                    "area": Object.keys(this.areas)[0]
                })
                : e)
                .filter(e => e);
            data.forEach(el => {
                saveSensor(this.hass, el)
                    .catch(e => handleError(e, ev))
                    .then(() => {
                });
            });
            this.addSelection = [];
        }
    };
    AlarmViewSensors.styles = commonStyle;
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "path", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "areas", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "sensors", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "addSelection", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "showAllSensorEntities", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "selectedArea", void 0);
    __decorate([
        property()
    ], AlarmViewSensors.prototype, "areaFilterOptions", void 0);
    AlarmViewSensors = __decorate([
        customElement('alarm-view-sensors')
    ], AlarmViewSensors);

    let UserEditorCard = class UserEditorCard extends LitElement {
        async firstUpdated() {
            this.users = await fetchUsers(this.hass);
            this.data = {
                name: "",
                code: "",
                old_code: "",
                confirm_code: "",
                is_admin: false,
                can_arm: true,
                can_disarm: true,
                is_override_code: false
            };
            if (this.item) {
                const user = this.users[this.item];
                this.data = Object.assign(Object.assign({}, this.data), pick(user, ['name', 'is_admin', 'can_arm', 'can_disarm', 'is_override_code']));
            }
        }
        render() {
            if (!this.data)
                return html ``;
            return html `
<ha-card>
  <div class="card-header">
    <div class="name">
      ${this.item
            ? localize("panels.codes.cards.edit_user.title", this.hass.language)
            : localize("panels.codes.cards.new_user.title", this.hass.language)}
    </div>
    <ha-icon-button
      icon="hass:close"
      @click=${this.cancelClick}
    >
    </ha-icon-button>
  </div>
  <div class="card-content">
    ${this.item
            ? localize("panels.codes.cards.edit_user.description", this.hass.language, "{name}", this.users[this.item].name)
            : localize("panels.codes.cards.new_user.description", this.hass.language)}
  </div>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.name.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.name.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.codes.cards.new_user.fields.name.heading", this.hass.language)}"
      placeholder=""
      value=${this.data.name}
      @change=${(ev) => this.data = { ...this.data, name: ev.target.value }}
    >
    </paper-input>
  </settings-row>

      ${this.item
            ? html `
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.edit_user.fields.old_code.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.edit_user.fields.old_code.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.codes.cards.edit_user.fields.old_code.heading", this.hass.language)}"
      placeholder=""
      type="password"
      value=${this.data.old_code}
      @change=${(ev) => this.data = { ...this.data, old_code: ev.target.value }}
    >
    </paper-input>
  </settings-row>
        `
            :
                ''}
      
      ${this.item && !this.data.old_code.length
            ? ''
            : html `
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.code.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.code.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.codes.cards.new_user.fields.code.heading", this.hass.language)}"
      placeholder=""
      type="password"
      value=${this.data.code}
      @change=${(ev) => this.data = { ...this.data, code: ev.target.value }}
    >
    </paper-input>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.confirm_code.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.confirm_code.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.codes.cards.new_user.fields.confirm_code.heading", this.hass.language)}"
      placeholder=""
      type="password"
      value=${this.data.confirm_code}
      @change=${(ev) => this.data = { ...this.data, confirm_code: ev.target.value }}
    >
    </paper-input>
  </settings-row>
    `}

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.is_admin.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.is_admin.description", this.hass.language)}</span>

    <ha-switch
      ?checked=${this.data.is_admin}
      @change=${(ev) => this.data = { ...this.data, is_admin: ev.target.checked }}
    >
    </ha-switch>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.can_arm.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.can_arm.description", this.hass.language)}</span>

    <ha-switch
      ?checked=${this.data.can_arm || this.data.is_admin}
      ?disabled=${this.data.is_admin}
      @change=${(ev) => this.data = { ...this.data, can_arm: ev.target.checked }}
    >
    </ha-switch>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.can_disarm.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.can_disarm.description", this.hass.language)}</span>

    <ha-switch
      ?checked=${this.data.can_disarm || this.data.is_admin}
      ?disabled=${this.data.is_admin}
      @change=${(ev) => this.data = { ...this.data, can_disarm: ev.target.checked }}
    >
    </ha-switch>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.codes.cards.new_user.fields.is_override_code.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.codes.cards.new_user.fields.is_override_code.description", this.hass.language)}</span>

    <ha-switch
      ?checked=${this.data.is_override_code}
      @change=${(ev) => this.data = { ...this.data, is_override_code: ev.target.checked }}
    >
    </ha-switch>
  </settings-row>
        
  <div class="card-actions">
    <mwc-button @click=${this.saveClick}>
      ${this.hass.localize("ui.common.save")}
    </mwc-button>

  ${this.item
            ? html `
    <mwc-button
      class="warning"
      @click=${this.deleteClick}
    >
      ${this.hass.localize("ui.common.delete")}
    </mwc-button>`
            :
                ''}
  </div>
</ha-card>
    `;
        }
        deleteClick(ev) {
            if (!this.item)
                return;
            deleteUser(this.hass, this.item)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        saveClick(ev) {
            if (!this.data)
                return;
            if (!this.data.name.length)
                showErrorDialog(ev, localize("panels.codes.cards.new_user.errors.no_name", this.hass.language));
            else if (this.data.code.length < 4 && (!this.item || this.data.old_code.length))
                showErrorDialog(ev, localize("panels.codes.cards.new_user.errors.no_code", this.hass.language));
            else if (this.data.code !== this.data.confirm_code)
                showErrorDialog(ev, localize("panels.codes.cards.new_user.errors.code_mismatch", this.hass.language));
            else {
                if (this.data.is_admin)
                    this.data = Object.assign(Object.assign({}, this.data), { can_arm: true, can_disarm: true });
                if (!this.item) {
                    saveUser(this.hass, omit(this.data, ['confirm_code', 'old_code']))
                        .catch(e => handleError(e, ev))
                        .then(() => { this.cancelClick(); });
                }
                else {
                    let data = Object.assign(Object.assign({}, pick(this.data, ['name', 'is_admin', 'can_arm', 'can_disarm'])), { user_id: this.item });
                    if (this.data.old_code.length) {
                        data = Object.assign(Object.assign({}, data), { old_code: this.data.old_code, code: this.data.code });
                    }
                    saveUser(this.hass, data)
                        .catch(e => handleError(e, ev))
                        .then(() => { this.cancelClick(); });
                }
            }
        }
        cancelClick() {
            F(this, "/alarmo/codes", true);
        }
    };
    UserEditorCard.styles = commonStyle;
    __decorate([
        property()
    ], UserEditorCard.prototype, "hass", void 0);
    __decorate([
        property()
    ], UserEditorCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], UserEditorCard.prototype, "item", void 0);
    __decorate([
        property()
    ], UserEditorCard.prototype, "data", void 0);
    UserEditorCard = __decorate([
        customElement('user-editor-card')
    ], UserEditorCard);

    let AlarmViewCodes = class AlarmViewCodes extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.users = {};
            this.code_arm_required = false;
            this.code_disarm_required = false;
            this.code_format = 'number';
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            const config = await fetchConfig(this.hass);
            this.config = config;
            this.code_arm_required = config.code_arm_required;
            this.code_disarm_required = config.code_disarm_required;
            this.code_format = config.code_format;
            const users = await fetchUsers(this.hass);
            this.users = users;
        }
        render() {
            if (!this.hass)
                return html ``;
            if (this.path && this.path[0] == "new_user") {
                return html `
      <user-editor-card
        .hass=${this.hass}
        .narrow=${this.narrow}
      >
      </user-editor-card>
    `;
            }
            else if (this.path && this.path.length == 2 && this.path[0] == "edit_user") {
                return html `
      <user-editor-card
        .hass=${this.hass}
        .narrow=${this.narrow}
        item=${this.path[1]}
      >
      </user-editor-card>
    `;
            }
            else {
                return html `
      <ha-card header="${localize("panels.codes.title", this.hass.language)}">
        <div class="card-content">
          ${localize("panels.codes.cards.codes.description", this.hass.language)}
        </div>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.codes.cards.codes.fields.code_arm_required.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.codes.cards.codes.fields.code_arm_required.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${this.code_arm_required}
            @change=${(ev) => { this.code_arm_required = ev.target.checked; }}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.codes.cards.codes.fields.code_disarm_required.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.codes.cards.codes.fields.code_disarm_required.description", this.hass.language)}</span>
          <ha-switch
            ?checked=${this.code_disarm_required}
            @change=${(ev) => { this.code_disarm_required = ev.target.checked; }}
          >
          </ha-switch>
        </settings-row>

        <settings-row .narrow=${this.narrow}>
          <span slot="heading">${localize("panels.codes.cards.codes.fields.code_format.heading", this.hass.language)}</span>
          <span slot="description">${localize("panels.codes.cards.codes.fields.code_format.description", this.hass.language)}</span>
          <mwc-button
            class="${this.code_format == 'number' ? 'active' : ''} ${!this.code_arm_required && !this.code_disarm_required ? 'disabled' : ''}"
            @click=${() => { this.code_format = 'number'; }}
            ?disabled=${!this.code_arm_required && !this.code_disarm_required}
            >${localize("panels.codes.cards.codes.fields.code_format.code_format_number", this.hass.language)}</mwc-button
          >
          <mwc-button
            class="${this.code_format == 'text' ? 'active' : ''} ${!this.code_arm_required && !this.code_disarm_required ? 'disabled' : ''}"
            @click=${() => { this.code_format = 'text'; }}
            ?disabled=${!this.code_arm_required && !this.code_disarm_required}
          >
            ${localize("panels.codes.cards.codes.fields.code_format.code_format_text", this.hass.language)}</mwc-button
          >
        </settings-row>

        <div class="card-actions">
          <mwc-button @click=${this.saveClick}>
            ${this.hass.localize("ui.common.save")}
          </mwc-button>
        </div>
      </ha-card>

      ${this.usersPanel()}
    `;
            }
        }
        usersPanel() {
            if (!this.hass)
                return html ``;
            let users = Object.values(this.users);
            users.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
            const columns = {
                icon: {
                    width: "40px",
                },
                name: {
                    title: this.hass.localize("ui.components.area-picker.add_dialog.name"),
                    width: "40%",
                    grow: true,
                    text: true
                },
                remarks: {
                    title: localize("panels.codes.cards.user_management.table.remarks", this.hass.language),
                    width: "40%",
                    hide: this.narrow,
                    text: true
                }
            };
            const data = users.map(item => {
                let output = {
                    id: item.user_id,
                    icon: html `<ha-icon icon="mdi:account-outline"></ha-icon>`,
                    name: prettyPrint(item.name),
                    remarks: item.is_admin ? localize("panels.codes.cards.user_management.table.administrator", this.hass.language) : ''
                };
                return output;
            });
            return html `
      <ha-card header="${localize("panels.codes.cards.user_management.title", this.hass.language)}">
        <div class="card-content">
          ${localize("panels.codes.cards.user_management.description", this.hass.language)}
        </div>

      <alarmo-table
        ?selectable=${true}
        .columns=${columns}
        .data=${data}
        @row-click=${(ev) => {
            const id = String(ev.detail.id);
            F(this, `/alarmo/codes/edit_user/${id}`, true);
        }}
      >
        ${localize("panels.codes.cards.user_management.no_items", this.hass.language)}
      </alarmo-table>
      <div class="card-actions">
        <mwc-button @click=${this.addUserClick}>
          ${localize("panels.codes.cards.user_management.actions.new_user", this.hass.language)}
        </mwc-button>
      </div>
    </ha-card>
    `;
        }
        addUserClick() {
            F(this, "/alarmo/codes/new_user", true);
        }
        saveClick(ev) {
            if (!this.hass)
                return;
            saveConfig(this.hass, {
                code_arm_required: this.code_arm_required,
                code_disarm_required: this.code_disarm_required,
                code_format: this.code_format,
            })
                .catch(e => handleError(e, ev))
                .then(() => {
            });
        }
    };
    AlarmViewCodes.styles = commonStyle;
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "path", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "config", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "users", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "code_arm_required", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "code_disarm_required", void 0);
    __decorate([
        property()
    ], AlarmViewCodes.prototype, "code_format", void 0);
    AlarmViewCodes = __decorate([
        customElement('alarm-view-codes')
    ], AlarmViewCodes);

    let AlarmoMultiSelect = class AlarmoMultiSelect extends LitElement {
        constructor() {
            super(...arguments);
            this.label = "";
            this.options = [];
            this.value = [];
            this.numOptions = 1;
        }
        firstUpdated() {
            if (!this.value)
                this.value = [];
            if (this.value.length > 1)
                this.numOptions = this.value.length;
        }
        render() {
            return html `
      <div class="container">
      ${[...Array(this.numOptions).keys()].map((i) => this.renderSelect(i))}
      </div>
    `;
        }
        renderSelect(index) {
            return html `
      <div>
      <paper-dropdown-menu
          label=${this.label}
          ?disabled=${this.disabled}
      >
        <paper-listbox
          slot="dropdown-content"
          selected=${this.getSelected(index)}
          @selected-item-changed=${(ev) => this.selectedChange(ev, index)}
        >
          ${this.renderOptions(index)}
        </paper-listbox>
      </paper-dropdown-menu>
      ${this.renderButton(index)}
  </div>`;
        }
        renderButton(index) {
            if (index != this.numOptions - 1)
                return html `<ha-icon icon="hass:minus" @click=${() => this.removeOption(index)}></ha-icon>`;
            else if (index == this.options.length - 1)
                return html `<ha-icon icon="hass:minus" @click=${() => this.removeOption(index)}></ha-icon>`;
            else if (this.value && this.value.length > index)
                return html `<ha-icon icon="hass:plus" @click=${this.addOption}></ha-icon>`;
            else
                return html `<ha-icon class="disabled" icon="hass:plus"></ha-icon>`;
        }
        renderOptions(index) {
            const list = this.value.slice(0, index).concat(this.value.slice(index + 1));
            return this.options
                .filter(e => e.value)
                .map(el => html `
      <paper-item
    value="${el.value}"
    ?disabled=${list.includes(el.value)}
      >
      ${el.name || el.value}
    </paper-item>
      `);
        }
        getSelected(index) {
            return this.options.filter(e => e.value).findIndex(e => e.value == this.value[index]);
        }
        selectedChange(ev, index) {
            if (!ev.target.selectedItem)
                return;
            const value = ev.target.selectedItem.getAttribute('value');
            this.value = (this.value.length == index)
                ? [...this.value, value]
                : this.value.slice(0, index).concat(value, this.value.slice(index + 1));
            const myEvent = new CustomEvent("change");
            this.dispatchEvent(myEvent);
        }
        addOption() {
            this.numOptions = this.numOptions + 1;
        }
        removeOption(index) {
            this.numOptions = this.numOptions - 1;
            if (index == this.value.length - 1)
                this.value = this.value.slice(0, index);
            else
                this.value = this.value.slice(0, index).concat(this.value.slice(index + 1));
        }
    };
    AlarmoMultiSelect.styles = css `
    ha-icon {
      padding: 4px;
      display: inline-block;
      vertical-align: bottom;
      cursor: pointer;
    }

    ha-icon.disabled {
      color: var(--disabled-text-color);
    }

    div.container {
      display: flex;
      flex-direction: column;
    }
    `;
    __decorate([
        property()
    ], AlarmoMultiSelect.prototype, "label", void 0);
    __decorate([
        property()
    ], AlarmoMultiSelect.prototype, "options", void 0);
    __decorate([
        property()
    ], AlarmoMultiSelect.prototype, "value", void 0);
    __decorate([
        property({ type: Boolean })
    ], AlarmoMultiSelect.prototype, "disabled", void 0);
    __decorate([
        property()
    ], AlarmoMultiSelect.prototype, "numOptions", void 0);
    AlarmoMultiSelect = __decorate([
        customElement('alarmo-multi-select')
    ], AlarmoMultiSelect);

    const triggerOptions = (hass) => [
        {
            value: EAlarmStates.Armed,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.armed.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.armed.description", hass.language),
            icon: "hass:shield-check-outline",
            trigger: {
                state: EAlarmStates.Armed
            }
        },
        {
            value: EAlarmStates.Disarmed,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.disarmed.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.disarmed.description", hass.language),
            icon: "hass:shield-off-outline",
            trigger: {
                state: EAlarmStates.Disarmed
            }
        },
        {
            value: EAlarmStates.Triggered,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.triggered.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.triggered.description", hass.language),
            icon: "hass:bell-alert-outline",
            trigger: {
                state: EAlarmStates.Triggered
            }
        },
        {
            value: EAlarmEvents.ArmFailure,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.arm_failure.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.arm_failure.description", hass.language),
            icon: "hass:alert-outline",
            trigger: {
                event: EAlarmEvents.ArmFailure
            }
        },
        {
            value: EAlarmStates.Arming,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.arming.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.arming.description", hass.language),
            icon: "hass:home-export-outline",
            trigger: {
                state: EAlarmStates.Arming
            }
        },
        {
            value: EAlarmStates.Pending,
            name: localize("panels.actions.cards.new_notification.fields.event.choose.pending.name", hass.language),
            description: localize("panels.actions.cards.new_notification.fields.event.choose.pending.description", hass.language),
            icon: "hass:home-import-outline",
            trigger: {
                state: EAlarmStates.Pending
            }
        }
    ];
    function targetOptions(hass) {
        let list = Object.keys(hass.services.notify)
            .map(e => {
            let data = {
                value: `notify.${e}`,
                name: e
            };
            const stateObj = hass.states[`device_tracker.${e.replace('mobile_app_', '')}`];
            if (stateObj)
                data = Object.assign(Object.assign({}, data), { name: stateObj.attributes.friendly_name || f(stateObj.entity_id) });
            return data;
        });
        list.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
        return list;
    }
    const defaultNotificationData = {
        name: "",
        triggers: [],
        actions: [
            {
                service: "",
                service_data: {
                    message: "",
                }
            }
        ]
    };
    const defaultAutomationData = {
        name: "",
        triggers: [],
        actions: [
            {
                service: "",
                service_data: {}
            }
        ]
    };
    function messagePlaceHolder(data) {
        if (data.triggers.length != 1)
            return "";
        if (data.triggers[0].state) {
            switch (data.triggers[0].state) {
                case EAlarmStates.Armed:
                    return "The alarm is now ON.";
                case EAlarmStates.Disarmed:
                    return "The alarm is now OFF.";
                case EAlarmStates.Arming:
                    return "The alarm will be armed soon, please leave the house.";
                case EAlarmStates.Pending:
                    return "The alarm is about to trigger, disarm it quickly!";
                case EAlarmStates.Triggered:
                    return "The alarm is triggered! Cause: {{open_sensors}}.";
                default:
                    return "";
            }
        }
        else if (data.triggers[0].event) {
            switch (data.triggers[0].event) {
                case EAlarmEvents.ArmFailure:
                    return "The alarm could not be armed right now, due to: {{open_sensors}}.";
                default:
                    return "";
            }
        }
        return "";
    }
    const ActionDomains = [
        "switch",
        "input_boolean",
        "light",
        "script",
    ];
    function validateData(data, hass) {
        if (!data.triggers.length)
            return localize("panels.actions.validation_errors.no_triggers", hass.language);
        for (let i = 0; i < data.triggers.length; i++) {
            const trigger = data.triggers[i];
            if (!trigger.event && !trigger.state)
                return localize("panels.actions.validation_errors.empty_trigger", hass.language);
            if (!triggerOptions(hass).find(e => JSON.stringify(e.trigger) === JSON.stringify(trigger)))
                return localize("panels.actions.validation_errors.invalid_trigger", hass.language, "{trigger}", JSON.stringify(trigger));
        }
        if (data.modes !== undefined && data.modes.length) {
            for (let i = 0; i < data.modes.length; i++) {
                const mode = data.modes[i];
                if (!Object.values(EArmModes).includes(mode))
                    return localize("panels.actions.validation_errors.empty_trigger", hass.language, "{mode}", mode);
            }
        }
        if (!data.actions.length)
            return localize("panels.actions.validation_errors.no_actions", hass.language);
        for (let i = 0; i < data.actions.length; i++) {
            const action = data.actions[i];
            if (!action.service)
                return localize("panels.actions.validation_errors.no_service", hass.language);
            if (!Object.keys(hass.services).includes(d(action.service)))
                return localize("panels.actions.validation_errors.invalid_service", hass.language, "{service}", action.service);
            if (!Object.keys(hass.services[d(action.service)]).includes(f(action.service)))
                return localize("panels.actions.validation_errors.invalid_service", hass.language, "{service}", action.service);
            if (!action.service_data || !Object.keys(action.service_data).length)
                return localize("panels.actions.validation_errors.no_service_data", hass.language);
            if (data.is_notification) {
                if (!Object.keys(action.service_data).includes('message') || !action.service_data.message.length)
                    return localize("panels.actions.validation_errors.no_message_in_service_data", hass.language);
            }
            else {
                if (!Object.keys(action.service_data).includes('entity_id'))
                    return localize("panels.actions.validation_errors.no_entity_in_service_data", hass.language);
            }
        }
        return;
    }

<<<<<<< HEAD
      .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
      }
    `}},t([Z()],e.MyAlarmPanel.prototype,"hass",void 0),t([Z({type:Boolean,reflect:!0})],e.MyAlarmPanel.prototype,"narrow",void 0),t([Z()],e.MyAlarmPanel.prototype,"userConfig",void 0),e.MyAlarmPanel=t([Q("alarm-panel")],e.MyAlarmPanel)}({});
=======
    let NotificationEditorCard = class NotificationEditorCard extends LitElement {
        constructor() {
            super(...arguments);
            this.yamlMode = false;
            this.namePlaceholder = "";
            this.areas = {};
        }
        async firstUpdated() {
            const areas = await fetchAreas(this.hass);
            this.areas = areas;
            const automations = await fetchAutomations(this.hass);
            if (this.item) {
                if (automations[this.item] && automations[this.item].is_notification)
                    this.data = omit(automations[this.item], ['automation_id', 'is_notification', 'enabled']);
                else
                    this.data = Object.assign({}, defaultNotificationData);
            }
            else {
                this.data = Object.assign({}, defaultNotificationData);
                let name = `My notification`;
                const automations = await fetchAutomations(this.hass);
                if (Object.values(automations).find(e => e.name == name)) {
                    let i = 2;
                    while (Object.values(automations).find(e => e.name == `${name} ${i}`))
                        i++;
                    name = `${name} ${i}`;
                }
                this.namePlaceholder = name;
                if (!this.data.area && Object.keys(areas).length == 1)
                    this.data = Object.assign(Object.assign({}, this.data), { area: Object.keys(this.areas)[0] });
            }
        }
        render() {
            if (!this.data)
                return html ``;
            return html `
<ha-card>
  <div class="card-header">
    <div class="name">
      ${localize("panels.actions.cards.new_notification.title", this.hass.language)}
    </div>
    <ha-icon-button
      icon="hass:close"
      @click=${this.cancelClick}
    >
    </ha-icon-button>
  </div>
  <div class="card-content">
      ${localize("panels.actions.cards.new_notification.description", this.hass.language)}
  </div>

  <div style="text-align: right; padding: 0px 16px 16px 16px">
    <mwc-button @click=${this.toggleYaml}>
      ${this.yamlMode
            ? localize("components.editor.ui_mode", this.hass.language)
            : localize("components.editor.yaml_mode", this.hass.language)}
    </mwc-button>
  </div>

  ${this.yamlMode
            ?
                html `
      <ha-yaml-editor
        .label="Label"
        .name="Data"  
        .defaultValue=${this.data}
        @value-changed=${(ev) => { this.yamlCode = ev.detail.value; }}
      >
      </ha-yaml-editor>
    `
            :
                html `

  <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.event.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.event.description", this.hass.language)}</span>

    <alarmo-select
      .hass=${this.hass}
      .items=${triggerOptions(this.hass)}
      label=${localize("panels.actions.cards.new_action.fields.event.heading", this.hass.language)}
      icons=${true}
      .value=${this.data.triggers.map(trigger => triggerOptions(this.hass).find(e => JSON.stringify(e.trigger) == JSON.stringify(trigger)).value)[0]}
      @value-changed=${(ev) => this.updateTriggers(ev.target.value)}
    >
    </alarmo-select>

  </settings-row>
  
  ${this.areas && Object.keys(this.areas).length > 1
                    ? html `
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.area.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.area.description", this.hass.language)}</span>

    <alarmo-select
      .items=${Object.values(this.areas).map(e => Object({ value: e.area_id, name: e.name }))}
      value=${this.data.area || ""}
      clearable=${true}
      label=${localize("panels.sensors.cards.editor.fields.area.heading", this.hass.language)}
      @value-changed=${(ev) => this.data = { ...this.data, area: ev.target.value }}
    </alarmo-select>
  </settings-row>`
                    : ''}

  <div class="separator"></div>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.mode.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.mode.description", this.hass.language)}</span>

    <alarmo-multi-select
      label=${localize("panels.actions.cards.new_notification.fields.mode.heading", this.hass.language)}
      ?disabled=${!this.data.triggers.length || this.data.triggers.some(e => e.state && e.state == EAlarmStates.Disarmed)}
      .options=${this.getModeList()}
      .value=${this.data.modes || []}
      @change=${(ev) => this.updateModes(ev.target.value)}
    </alarmo-multi-select>

  </settings-row>
  
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.title.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.title.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.actions.cards.new_notification.fields.title.heading", this.hass.language)}"
      placeholder=""
      value=${this.data.actions[0].service_data.title || ""}
      @change=${(ev) => this.updateTitle(ev.target.value)}
    >
    </paper-input>
  </settings-row>

    <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.message.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.message.description", this.hass.language)}</span>

    <paper-textarea
      label="${localize("panels.actions.cards.new_notification.fields.message.heading", this.hass.language)}"
      placeholder=${messagePlaceHolder(this.data)}
      value=${this.data.actions[0].service_data.message || ""}
      @blur=${(ev) => { this.updateMessage(ev.target.value); }}
    >
    </paper-textarea>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.target.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.target.description", this.hass.language)}</span>

    <alarmo-multi-select
      label=${localize("panels.actions.cards.new_notification.fields.target.heading", this.hass.language)}
      .options=${this.getTargetList()}
      .value=${this.data.actions.map(action => action.service)}
      @change=${(ev) => this.updateTargets(ev.target.value)}
    </alarmo-multi-select>
  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_notification.fields.name.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_notification.fields.name.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.actions.cards.new_notification.fields.name.heading", this.hass.language)}"
      placeholder=${this.namePlaceholder}
      value=${this.data.name}
      @change=${(ev) => this.data = { ...this.data, name: ev.target.value }}
    >
    </paper-input>
  </settings-row>
  `}
        
  <div class="card-actions">
    <mwc-button @click=${this.saveClick}>
      ${this.hass.localize("ui.common.save")}
    </mwc-button>

  ${this.item
            ? html `
    <mwc-button
      class="warning"
      @click=${this.deleteClick}
    >
      ${this.hass.localize("ui.common.delete")}
    </mwc-button>`
            :
                ''}
  </div>
</ha-card>
    `;
        }
        getTargetList() {
            return [
                ...Object.values(targetOptions(this.hass)),
                ,
                ...this.data.actions
                    .filter(action => !targetOptions(this.hass).find(e => e.value == action.service))
                    .map(e => Object({ value: e.service }))
            ];
        }
        getModeList() {
            var _a;
            const modes = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.area) ? this.areas[this.data.area]
                ? Object.entries(this.areas[this.data.area].modes)
                    .filter(([, v]) => v.enabled)
                    .map(([k]) => k)
                : []
                : Object.values(this.areas)
                    .map(e => Object.entries(e.modes)
                    .filter(([, v]) => v.enabled)
                    .map(([k]) => k))
                    .reduce((a, b) => a.filter(i => b.includes(i)));
            return modes.map(e => Object({ name: localize(`common.modes_long.${e}`, this.hass.language), value: e }));
        }
        updateTriggers(value) {
            this.data = Object.assign(Object.assign({}, this.data), { triggers: [
                    triggerOptions(this.hass).find(e => e.value == value).trigger
                ] });
        }
        updateModes(value) {
            this.data = Object.assign(Object.assign({}, this.data), { modes: value });
        }
        updateTitle(value) {
            this.data = Object.assign(Object.assign({}, this.data), { actions: this.data.actions.map(action => Object(Object.assign(Object.assign({}, action), { service_data: Object.assign(Object.assign({}, action.service_data), { title: value }) }))) });
        }
        updateMessage(value) {
            this.data = Object.assign(Object.assign({}, this.data), { actions: this.data.actions.map(action => Object(Object.assign(Object.assign({}, action), { service_data: Object.assign(Object.assign({}, action.service_data), { message: value }) }))) });
        }
        updateTargets(value) {
            this.data = Object.assign(Object.assign({}, this.data), { actions: value.map(e => Object({
                    service: e,
                    service_data: Object.assign({}, this.data.actions[0].service_data)
                })) });
        }
        deleteClick(ev) {
            if (!this.item)
                return;
            deleteAutomation(this.hass, this.item)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        async saveClick(ev) {
            let data = this.yamlMode ? Object.assign({}, this.yamlCode) : this.data;
            data = Object.assign(Object.assign({}, data), { is_notification: true, actions: data.actions.map(action => {
                    if (action.service_data && (!action.service_data.message || !action.service_data.message.length)) {
                        return Object.assign(Object.assign({}, action), { service_data: Object.assign(Object.assign({}, action.service_data), { message: messagePlaceHolder(data) }) });
                    }
                    else
                        return action;
                }), name: data.name || this.namePlaceholder, area: data.area || "" });
            const error = validateData(data, this.hass);
            if (error) {
                showErrorDialog(ev, error);
                return;
            }
            if (this.item)
                data = Object.assign(Object.assign({}, data), { automation_id: this.item });
            saveAutomation(this.hass, data)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        toggleYaml() {
            if (!this.data)
                return;
            this.yamlMode = !this.yamlMode;
            if (!this.yamlMode && this.yamlCode) {
                this.data = Object.assign({}, this.yamlCode);
            }
            else {
                this.yamlCode = Object.assign({}, this.data);
            }
        }
        cancelClick() {
            F(this, "/alarmo/actions", true);
        }
    };
    NotificationEditorCard.styles = commonStyle;
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "item", void 0);
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "data", void 0);
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "yamlMode", void 0);
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "namePlaceholder", void 0);
    __decorate([
        property()
    ], NotificationEditorCard.prototype, "areas", void 0);
    NotificationEditorCard = __decorate([
        customElement('notification-editor-card')
    ], NotificationEditorCard);

    let AlarmoMultiEntitySelect = class AlarmoMultiEntitySelect extends LitElement {
        constructor() {
            super(...arguments);
            this.includeDomains = [];
            this.options = [];
            this.value = [];
            this.numOptions = 1;
        }
        firstUpdated() {
            if (this.value.length > 1)
                this.numOptions = this.value.length;
        }
        render() {
            if (!this.hass)
                return html ``;
            return html `
      <div class="container">
      ${[...Array(this.numOptions).keys()].map((i) => this.renderSelect(i))}
      </div>
    `;
        }
        renderSelect(index) {
            return html `
      <div class="container-item">
        <div class="dropdown-holder">
          <ha-entity-picker
            @change=${(ev) => { this.selectedChange(ev, index); }}
            .includeDomains=${this.includeDomains}
            .hass=${this.hass}
            value=${this.getValue(index)}
            .allowCustomEntity=${true}
          ></ha-entity-picker>
        </div>
        <div class="icon-holder">
          ${this.renderButton(index)}
        </div>
      </div>`;
        }
        renderButton(index) {
            if (index != this.numOptions - 1)
                return html `<ha-icon icon="hass:minus" @click=${() => this.removeOption(index)}></ha-icon>`;
            else if (index == this.options.length - 1)
                return html `<ha-icon icon="hass:minus" @click=${() => this.removeOption(index)}></ha-icon>`;
            else if (this.value && this.value.length > index)
                return html `<ha-icon icon="hass:plus" @click=${this.addOption}></ha-icon>`;
            else
                return html `<ha-icon class="disabled" icon="hass:plus"></ha-icon>`;
        }
        getValue(index) {
            if (index > (this.value.length - 1))
                return "";
            return this.value[index];
        }
        entityFilter(entityId, index) {
            const list = this.value.slice(0, index).concat(this.value.slice(index + 1));
            return !list.includes(entityId);
        }
        selectedChange(ev, index) {
            let value = ev.target.value;
            if (!this.entityFilter(value, index)) {
                this.removeOption(index);
                return;
            }
            const newValue = (this.value.length == index)
                ? [...this.value, value]
                : this.value.slice(0, index).concat(value, this.value.slice(index + 1));
            this.value = newValue.filter(e => e);
            const myEvent = new CustomEvent("change");
            this.dispatchEvent(myEvent);
        }
        addOption() {
            this.numOptions = this.numOptions + 1;
        }
        removeOption(index) {
            this.numOptions = this.numOptions - 1;
            if (index == this.value.length - 1)
                this.value = this.value.slice(0, index);
            else
                this.value = this.value.slice(0, index).concat(this.value.slice(index + 1));
        }
    };
    AlarmoMultiEntitySelect.styles = css `
    ha-icon {
      padding: 4px;
      display: inline-block;
      vertical-align: bottom;
      cursor: pointer;
    }

    ha-icon.disabled {
      color: var(--disabled-text-color);
    }

    div.container {
      display: flex;
      flex-direction: column;
    }

    div.container-item {
      display: grid;
      grid-template-columns: 1fr max-content;
      grid-template-rows: min-content;
      grid-template-areas: "dropdown icon";
      align-items: flex-end;
    }

    div.dropdown-holder {
      grid-area: dropdown;
    }
    div.icon-holder {
      grid-area: icon;
    }
    `;
    __decorate([
        property()
    ], AlarmoMultiEntitySelect.prototype, "includeDomains", void 0);
    __decorate([
        property()
    ], AlarmoMultiEntitySelect.prototype, "options", void 0);
    __decorate([
        property()
    ], AlarmoMultiEntitySelect.prototype, "value", void 0);
    __decorate([
        property()
    ], AlarmoMultiEntitySelect.prototype, "numOptions", void 0);
    AlarmoMultiEntitySelect = __decorate([
        customElement('alarmo-multi-entity-select')
    ], AlarmoMultiEntitySelect);

    let AutomationEditorCard = class AutomationEditorCard extends LitElement {
        constructor() {
            super(...arguments);
            this.yamlMode = false;
            this.namePlaceholder = "";
            this.areas = {};
        }
        async firstUpdated() {
            const areas = await fetchAreas(this.hass);
            this.areas = areas;
            const automations = await fetchAutomations(this.hass);
            if (this.item) {
                if (automations[this.item] && !automations[this.item].is_notification)
                    this.data = omit(automations[this.item], ['automation_id', 'is_notification', 'enabled']);
                else
                    this.data = Object.assign({}, defaultAutomationData);
            }
            else {
                this.data = Object.assign({}, defaultAutomationData);
                let name = `My notification`;
                const automations = await fetchAutomations(this.hass);
                if (Object.values(automations).find(e => e.name == name)) {
                    let i = 2;
                    while (Object.values(automations).find(e => e.name == `${name} ${i}`))
                        i++;
                    name = `${name} ${i}`;
                }
                this.namePlaceholder = name;
                if (!this.data.area && Object.keys(areas).length == 1)
                    this.data = Object.assign(Object.assign({}, this.data), { area: Object.keys(this.areas)[0] });
            }
        }
        render() {
            if (!this.data)
                return html ``;
            return html `
<ha-card>
  <div class="card-header">
    <div class="name">
      ${localize("panels.actions.cards.new_action.title", this.hass.language)}
    </div>
    <ha-icon-button
      icon="hass:close"
      @click=${this.cancelClick}
    >
    </ha-icon-button>
  </div>
  <div class="card-content">
      ${localize("panels.actions.cards.new_action.description", this.hass.language)}
  </div>

  <div style="text-align: right; padding: 0px 16px 16px 16px">
    <mwc-button @click=${this.toggleYaml}>
      ${this.yamlMode
            ? localize("components.editor.ui_mode", this.hass.language)
            : localize("components.editor.yaml_mode", this.hass.language)}
    </mwc-button>
  </div>

  ${this.yamlMode
            ?
                html `
      <ha-yaml-editor
        .label="Label"
        .name="Data"  
        .defaultValue=${this.data}
        @value-changed=${(ev) => { this.yamlCode = ev.detail.value; }}
      >
      </ha-yaml-editor>
    `
            :
                html `

  <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.event.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.event.description", this.hass.language)}</span>

    <alarmo-select
      .hass=${this.hass}
      .items=${triggerOptions(this.hass)}
      label=${localize("panels.actions.cards.new_action.fields.event.heading", this.hass.language)}
      icons=${true}
      .value=${this.data.triggers.map(trigger => triggerOptions(this.hass).find(e => JSON.stringify(e.trigger) == JSON.stringify(trigger)).value)[0]}
      @value-changed=${(ev) => this.updateTriggers(ev.target.value)}
    >
    </alarmo-select>

  </settings-row>

  ${this.areas && Object.keys(this.areas).length > 1
                    ? html `
  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.area.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.area.description", this.hass.language)}</span>

    <alarmo-select
      .items=${Object.values(this.areas).map(e => Object({ value: e.area_id, name: e.name }))}
      value=${this.data.area || ""}
      clearable=${true}
      label=${localize("panels.sensors.cards.editor.fields.area.heading", this.hass.language)}
      @value-changed=${(ev) => this.data = { ...this.data, area: ev.target.value }}
    </alarmo-select>
  </settings-row>`
                    : ''}

  <div class="separator"></div>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.mode.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.mode.description", this.hass.language)}</span>

    <alarmo-multi-select
      label=${localize("panels.actions.cards.new_action.fields.mode.heading", this.hass.language)}
      ?disabled=${!this.data.triggers.length || this.data.triggers.some(e => e.state && e.state == EAlarmStates.Disarmed)}
      .options=${this.getModeList()}
      .value=${this.data.modes || []}
      @change=${(ev) => this.updateModes(ev.target.value)}
    </alarmo-multi-select>

  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.entity.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.entity.description", this.hass.language)}</span>

    <alarmo-multi-entity-select
      .hass=${this.hass}
      .includeDomains=${ActionDomains}
      .value=${this.getEntityValues()}
      @change=${(ev) => this.updateEntities(ev.target.value)}
    ></alarmo-multi-entity-select>
  </settings-row>

  <settings-row .narrow=${this.narrow}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.action.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.action.description", this.hass.language)}</span>
    <div>
    <mwc-button
      class="${this.getAction() == 'turn_on' ? 'active' : ''}"
      @click=${() => { this.updateAction('turn_on'); }}
      >
        ${localize("panels.actions.cards.new_action.fields.action.turn_on", this.hass.language)}
      </mwc-button>
    <mwc-button
      class="${this.getAction() == 'turn_off' ? 'active' : ''}"
      @click=${() => { this.updateAction('turn_off'); }}
    >
      ${localize("panels.actions.cards.new_action.fields.action.turn_off", this.hass.language)}
    </mwc-button>
    </div>
  </settings-row>

  <settings-row .narrow=${this.narrow} .large=${true}>
    <span slot="heading">${localize("panels.actions.cards.new_action.fields.name.heading", this.hass.language)}</span>
    <span slot="description">${localize("panels.actions.cards.new_action.fields.name.description", this.hass.language)}</span>

    <paper-input
      label="${localize("panels.actions.cards.new_action.fields.name.heading", this.hass.language)}"
      placeholder=""
      value=${this.data.name}
      @change=${(ev) => this.data = { ...this.data, name: ev.target.value }}
    >
    </paper-input>
  </settings-row>

  `}
        
  <div class="card-actions">
    <mwc-button @click=${this.saveClick}>
      ${this.hass.localize("ui.common.save")}
    </mwc-button>

  ${this.item
            ? html `
    <mwc-button
      class="warning"
      @click=${this.deleteClick}
    >
      ${this.hass.localize("ui.common.delete")}
    </mwc-button>`
            :
                ''}
  </div>
</ha-card>
    `;
        }
        getEntityValues() {
            var _a;
            return (_a = this.data) === null || _a === void 0 ? void 0 : _a.actions.map(e => { var _a; return (_a = e.service_data) === null || _a === void 0 ? void 0 : _a.entity_id; }).filter(e => e);
        }
        getModeList() {
            var _a;
            const modes = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.area) ? this.areas[this.data.area]
                ? Object.entries(this.areas[this.data.area].modes)
                    .filter(([, v]) => v.enabled)
                    .map(([k]) => k)
                : []
                : Object.values(this.areas)
                    .map(e => Object.entries(e.modes)
                    .filter(([, v]) => v.enabled)
                    .map(([k]) => k))
                    .reduce((a, b) => a.filter(i => b.includes(i)));
            return modes.map(e => Object({ name: localize(`common.modes_long.${e}`, this.hass.language), value: e }));
        }
        updateTriggers(value) {
            this.data = Object.assign(Object.assign({}, this.data), { triggers: [
                    triggerOptions(this.hass).find(e => e.value == value).trigger
                ] });
        }
        updateModes(value) {
            this.data = Object.assign(Object.assign({}, this.data), { modes: value });
        }
        updateEntities(entities) {
            var _a;
            const action = this.getAction();
            let actions = [...((_a = this.data) === null || _a === void 0 ? void 0 : _a.actions) || []];
            entities.forEach((entity, i) => {
                var _a;
                if (i < actions.length && d(actions[i].service || ((_a = actions[i].service_data) === null || _a === void 0 ? void 0 : _a.entity_id) || "") == d(entity[i])) {
                    actions[i] = Object.assign(Object.assign({}, actions[i]), { service_data: Object.assign(Object.assign({}, actions[i].service_data), { entity_id: entity }) });
                }
                else if (i < actions.length) {
                    actions[i] = {
                        service: action ? d(entity) + "." + action : "",
                        service_data: {
                            entity_id: entity
                        }
                    };
                }
                else {
                    actions.push({
                        service: action ? d(entity) + "." + action : "",
                        service_data: {
                            entity_id: entity
                        }
                    });
                }
            });
            this.data = Object.assign(Object.assign({}, this.data), { actions: actions });
        }
        getAction() {
            var _a;
            const list = ((_a = this.data) === null || _a === void 0 ? void 0 : _a.actions.map(e => f(e.service)).filter(e => e)) || [];
            return Unique(list).length == 1 ? list[0] : "";
        }
        updateAction(value) {
            this.data = Object.assign(Object.assign({}, this.data), { actions: this.data.actions.map(e => { var _a; return Object(Object.assign(Object.assign({}, e), { service: (d(((_a = e.service_data) === null || _a === void 0 ? void 0 : _a.entity_id) || "") || "homeassistant") + "." + value })); }) });
        }
        deleteClick(ev) {
            if (!this.item)
                return;
            deleteAutomation(this.hass, this.item)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        saveClick(ev) {
            let data = this.yamlMode ? Object.assign({}, this.yamlCode) : this.data;
            data = Object.assign(Object.assign({}, data), { name: data.name || this.namePlaceholder, area: data.area || "" });
            const error = validateData(data, this.hass);
            if (error) {
                showErrorDialog(ev, error);
                return;
            }
            if (this.item)
                data = Object.assign(Object.assign({}, data), { automation_id: this.item });
            saveAutomation(this.hass, data)
                .catch(e => handleError(e, ev))
                .then(() => { this.cancelClick(); });
        }
        toggleYaml() {
            if (!this.data)
                return;
            this.yamlMode = !this.yamlMode;
            if (!this.yamlMode && this.yamlCode) {
                this.data = Object.assign({}, this.yamlCode);
            }
            else {
                this.yamlCode = Object.assign({}, this.data);
            }
        }
        cancelClick() {
            F(this, "/alarmo/actions", true);
        }
    };
    AutomationEditorCard.styles = commonStyle;
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "item", void 0);
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "data", void 0);
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "yamlMode", void 0);
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "namePlaceholder", void 0);
    __decorate([
        property()
    ], AutomationEditorCard.prototype, "areas", void 0);
    AutomationEditorCard = __decorate([
        customElement('automation-editor-card')
    ], AutomationEditorCard);

    let AlarmViewActions = class AlarmViewActions extends SubscribeMixin(LitElement) {
        constructor() {
            super(...arguments);
            this.automations = [];
            this.areas = {};
            this.notificationFilterOptions = [];
            this.automationFilterOptions = [];
        }
        hassSubscribe() {
            this._fetchData();
            return [
                this.hass.connection.subscribeEvents(() => this._fetchData(), "alarmo_updated"),
            ];
        }
        async _fetchData() {
            if (!this.hass) {
                return;
            }
            const automations = await fetchAutomations(this.hass);
            this.automations = Object.values(automations);
            this.areas = await fetchAreas(this.hass);
            this.notificationFilterOptions = [
                {
                    value: "no_area",
                    name: localize("panels.actions.cards.notifications.filter.no_area", this.hass.language),
                    count: Object.values(this.automations).filter(e => e.is_notification && !e.area).length
                }
            ]
                .concat(Object.values(this.areas)
                .map(e => Object({
                value: e.area_id,
                name: e.name,
                count: Object.values(this.automations).filter(el => el.is_notification && el.area == e.area_id).length
            }))
                .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)));
            this.automationFilterOptions = [
                {
                    value: "no_area",
                    name: localize("panels.actions.cards.notifications.filter.no_area", this.hass.language),
                    count: Object.values(this.automations).filter(e => !e.is_notification && !e.area).length
                }
            ]
                .concat(Object.values(this.areas)
                .map(e => Object({
                value: e.area_id,
                name: e.name,
                count: Object.values(this.automations).filter(el => !el.is_notification && el.area == e.area_id).length
            }))
                .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)));
        }
        firstUpdated() {
            if (this.path && this.path.length == 2 && this.path[0] == "filter") {
                this.notificationFilter = this.path[1];
                this.automationFilter = this.path[1];
            }
        }
        render() {
            if (!this.hass)
                return html ``;
            if (this.path && this.path.length && this.path[0] == "new_notification") {
                return html `
        <notification-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
        >

        </notification-editor-card>
      `;
            }
            else if (this.path && this.path.length == 2 && this.path[0] == "edit_notification") {
                return html `
        <notification-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path[1]}
        >

        </notification-editor-card>
      `;
            }
            else if (this.path && this.path.length && this.path[0] == "new_action") {
                return html `
        <automation-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
        >

        </automation-editor-card>
      `;
            }
            else if (this.path && this.path.length == 2 && this.path[0] == "edit_action") {
                return html `
        <automation-editor-card
          .hass=${this.hass}
          .narrow=${this.narrow}
          item=${this.path[1]}
        >

        </automation-editor-card>
      `;
            }
            else {
                const columns = {
                    type: {
                        width: "40px",
                    },
                    name: {
                        title: this.hass.localize("ui.components.area-picker.add_dialog.name"),
                        width: "40%",
                        grow: true,
                        text: true
                    },
                    enabled: {
                        title: localize("panels.actions.cards.notifications.table.enabled", this.hass.language),
                        width: "68px",
                        align: "center"
                    },
                };
                const notificationData = this.automations
                    .filter(e => e.is_notification)
                    .filter(e => !this.notificationFilter ||
                    !this.notificationFilterOptions.find(e => e.value == this.notificationFilter) ||
                    e.area == this.notificationFilter ||
                    (this.notificationFilter === "no_area" && !e.area))
                    .map(e => Object({
                    id: e.automation_id,
                    type: html `<ha-icon icon="hass:message-text-outline"></ha-icon>`,
                    name: e.name,
                    enabled: html `<ha-switch
        ?checked=${e.enabled}
        @click=${(ev) => { ev.stopPropagation(); this.toggleEnable(ev, e.automation_id); }}
      ></ha-switch>`
                }));
                const automationData = this.automations
                    .filter(e => !e.is_notification)
                    .filter(e => !this.automationFilter ||
                    !this.automationFilterOptions.find(e => e.value == this.automationFilter) ||
                    e.area == this.automationFilter ||
                    (this.automationFilter === "no_area" && !e.area))
                    .map(e => Object({
                    id: e.automation_id,
                    type: html `<ha-icon icon="hass:flash"></ha-icon>`,
                    name: e.name,
                    enabled: html `<ha-switch
        ?checked=${e.enabled}
        @click=${(ev) => { ev.stopPropagation(); this.toggleEnable(ev, e.automation_id); }}
      ></ha-switch>`
                }));
                return html `

      <ha-card header="${localize("panels.actions.cards.notifications.title", this.hass.language)}">
      <div class="card-content">${localize("panels.actions.cards.notifications.description", this.hass.language)}</div>
      
      ${this.notificationFilterOptions.length > 1
                ? html `
      <div class="table-filter" ?narrow=${this.narrow}>
      <span class="header">${localize("panels.actions.cards.notifications.filter.label", this.hass.language)}:</span>
       <alarmo-chips
         .items=${this.notificationFilterOptions}
         value=${this.notificationFilter}
         @value-changed=${(ev) => this.notificationFilter = ev.target.value}
       >
       </alarmo-chips>
     </div>
     ` : ''}
      <alarmo-table
        ?selectable=${true}
        .columns=${columns}
        .data=${notificationData}
        @row-click=${(ev) => {
                const id = String(ev.detail.id);
                F(this, `/alarmo/actions/edit_notification/${id}`, true);
            }}
      >
        ${localize("panels.actions.cards.notifications.table.no_items", this.hass.language)}
      </alarmo-table>

        <div class="card-actions">
          <mwc-button
            @click=${this.addNotificationClick}
          >
            ${localize("panels.actions.cards.notifications.actions.new_notification", this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>

      
      <ha-card header="${localize("panels.actions.title", this.hass.language)}">
        <div class="card-content">${localize("panels.actions.cards.actions.description", this.hass.language)}</div>
      
        ${this.automationFilterOptions.length > 1
                ? html `
        <div class="table-filter" ?narrow=${this.narrow}>
        <span class="header">${localize("panels.actions.cards.notifications.filter.label", this.hass.language)}:</span>
         <alarmo-chips
           .items=${this.automationFilterOptions}
           value=${this.automationFilter}
           @value-changed=${(ev) => this.automationFilter = ev.target.value}
         >
         </alarmo-chips>
       </div>
       ` : ''}
      <alarmo-table
        ?selectable=${true}
        .columns=${columns}
        .data=${automationData}
        @row-click=${(ev) => {
                const id = String(ev.detail.id);
                F(this, `/alarmo/actions/edit_action/${id}`, true);
            }}
      >
        ${localize("panels.actions.cards.actions.table.no_items", this.hass.language)}
      </alarmo-table>

        <div class="card-actions">
          <mwc-button
            @click=${this.addActionClick}
          >
            ${localize("panels.actions.cards.actions.actions.new_action", this.hass.language)}
          </mwc-button>
        </div>
      </ha-card>
    `;
            }
        }
        toggleEnable(ev, item_id) {
            saveAutomation(this.hass, { automation_id: item_id, enabled: !ev.target.checked })
                .catch(e => handleError(e, ev))
                .then(() => { });
        }
        addNotificationClick() {
            F(this, "/alarmo/actions/new_notification", true);
        }
        addActionClick() {
            F(this, "/alarmo/actions/new_action", true);
        }
    };
    AlarmViewActions.styles = commonStyle;
    __decorate([
        property()
    ], AlarmViewActions.prototype, "hass", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "narrow", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "path", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "alarmEntity", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "automations", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "areas", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "notificationFilter", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "automationFilter", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "notificationFilterOptions", void 0);
    __decorate([
        property()
    ], AlarmViewActions.prototype, "automationFilterOptions", void 0);
    AlarmViewActions = __decorate([
        customElement('alarm-view-actions')
    ], AlarmViewActions);

    exports.MyAlarmPanel = class MyAlarmPanel extends LitElement {
        async firstUpdated() {
            window.addEventListener("location-changed", () => {
                this.requestUpdate();
            });
            await loadHaForm();
            this.userConfig = await fetchUsers(this.hass);
            this.requestUpdate();
        }
        render() {
            if (!customElements.get('ha-app-layout') || !this.userConfig)
                return html `loading...`;
            const matchingUser = Object.values(this.userConfig).find(e => e.name.toLowerCase() == this.hass.user.name.toLowerCase());
            if (!this.hass.user.is_admin && (!matchingUser || !matchingUser.is_admin)) {
                return html `
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            >
            </ha-menu-button>
            <div main-title>
              Alarm panel
            </div>
          </app-toolbar>
        </app-header>
      </ha-app-layout>
      <div class="view">
        <div>
          <ha-card header="Access is blocked">
            <div class="card-content">
              You have no access to view this page.
              Please check the following:
              <ul>
                <li>
                  You are logged in using HA user account <b>${this.hass.user.name}</b>.
                  This account <b>${this.hass.user.is_admin ? 'does' : 'does NOT'}</b> have administrator permission.
                </li>
              </ul>
              <ul>
                <li>
                  There is <b>${matchingUser ? 'a' : 'NO'}</b> user configured in Alarmo with name <b>${this.hass.user.name}</b>.
                  ${matchingUser ? `This user ${matchingUser.is_admin ? 'does' : 'does NOT'}</b> have administrator permission. ` : ''}
                </li>
              </ul>
            </div>
          </ha-card>
        </div>
      </div>
      `;
            }
            else {
                return html `
      <ha-app-layout>
        <app-header fixed slot="header">
          <app-toolbar>
            <ha-menu-button
              .hass=${this.hass}
              .narrow=${this.narrow}
            >
            </ha-menu-button>
            <div main-title>
              ${localize("title", this.hass.language)}
            </div>
            <div class="version">
              v${VERSION}
            </div>
          </app-toolbar>
          <paper-tabs
            scrollable
            attr-for-selected="page-name"
            .selected=${this.getPath()}
            @iron-activate=${this.handlePageSelected}
          >
            <paper-tab page-name="general">
              ${localize("panels.general.title", this.hass.language)}
            </paper-tab>
            <paper-tab page-name="sensors">
              ${localize("panels.sensors.title", this.hass.language)}
            </paper-tab>
            <paper-tab page-name="codes">
              ${localize("panels.codes.title", this.hass.language)}
            </paper-tab>
            <paper-tab page-name="actions">
              ${localize("panels.actions.title", this.hass.language)}
            </paper-tab>
          </paper-tabs>
        </app-header>
      </ha-app-layout>
      <div class="view">
        ${this.getView()}
      </div>
    `;
            }
        }
        getPath() {
            return window.location.pathname.split('/');
        }
        getView() {
            const path = this.getPath();
            const view = path[2] || "general";
            const args = path.slice(3);
            switch (view) {
                case "general":
                    return html `
        <alarm-view-general
          .hass=${this.hass}
          .narrow=${this.narrow}
          .path=${args.length ? args : null}
        ></alarm-view-general>
      `;
                case "sensors":
                    return html `
        <alarm-view-sensors
          .hass=${this.hass}
          .narrow=${this.narrow}
          .path=${args.length ? args : null}
        >
        </alarm-view-sensors>
      `;
                case "codes":
                    return html `
        <alarm-view-codes
          .hass=${this.hass}
          .narrow=${this.narrow}
          .path=${args.length ? args : null}
        >
        </alarm-view-codes>
      `;
                case "actions":
                    return html `
        <alarm-view-actions
          .hass=${this.hass}
          .narrow=${this.narrow}
          .path=${args.length ? args : null}
        >
        </alarm-view-actions>
      `;
                default:
                    return html `no view`;
            }
        }
        handlePageSelected(ev) {
            const newPage = ev.detail.item.getAttribute('page-name');
            if (newPage !== this.getPath()) {
                F(this, `/alarmo/${newPage}`);
                this.requestUpdate();
            }
            else {
                scrollTo(0, 0);
            }
        }
        static get styles() {
            return css `
      ${commonStyle}

      :host {
        color: var(--primary-text-color);
        --paper-card-header-color: var(--primary-text-color);
      }

      ha-app-layout,
      app-toolbar,
      paper-tabs {
        background: var(--primary-color);
        color: var(--text-primary-color);
      }

      ha-app-layout {
        display: block;
        z-index: 2;
      }

      paper-tabs {
        --paper-tabs-selection-bar-color: #fff;
        text-transform: uppercase;
      }

      .view {
        height: calc(100vh - 112px);
        display: flex;
        justify-content: center;
      }

      .view > * {
        width: 600px;
        max-width: 600px;
      }

      .view > *:last-child {
        margin-bottom: 20px;
      }

      .version {
        font-size: 14px;
        font-weight: 500;
        color: rgba(var(--rgb-text-primary-color), 0.9);
      }
    `;
        }
    };
    __decorate([
        property()
    ], exports.MyAlarmPanel.prototype, "hass", void 0);
    __decorate([
        property({ type: Boolean, reflect: true })
    ], exports.MyAlarmPanel.prototype, "narrow", void 0);
    __decorate([
        property()
    ], exports.MyAlarmPanel.prototype, "userConfig", void 0);
    exports.MyAlarmPanel = __decorate([
        customElement('alarm-panel')
    ], exports.MyAlarmPanel);

    return exports;

}({}));
>>>>>>> eaea56def3b651a028e07926645b0fb06221308a
