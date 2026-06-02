/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface TransformItem {
  before: string;
  after: string;
  icon: string;
}

export interface SectionContent {
  title: string;
  subtitle?: string;
  description?: string;
}
