// Copyright 2026 YANDEX LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function (window, document) {
  'use strict';

  var config = window.yandexWebmasterVerification || {};
  var token = typeof config.token === 'string' ?
      config.token.replace(/^\s+|\s+$/g, '') :
      '';

  if (!token) {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  if (!head) {
    return;
  }

  var meta = head.querySelector('meta[name="yandex-verification"]');

  if (meta && meta.getAttribute('content') === token) {
    return;
  }

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'yandex-verification');
    head.appendChild(meta);
  }

  meta.setAttribute('content', token);
})(window, document);
