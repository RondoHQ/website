import type { APIRoute } from 'astro';
import { assembleGraph, type GraphEntity } from '@jdevalk/seo-graph-core';
import {
  buildSiteEntity,
  buildOrganizationEntity,
  buildJoostEntity,
  buildSoftwareEntity,
} from '../../data/graph';

export const GET: APIRoute = () => {
  const entities: GraphEntity[] = [
    buildSiteEntity('nl'),
    buildOrganizationEntity(),
    buildJoostEntity(),
    buildSoftwareEntity(),
  ];

  const graph = assembleGraph(entities, { warnOnDanglingReferences: true });

  return new Response(JSON.stringify(graph, null, 2), {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
