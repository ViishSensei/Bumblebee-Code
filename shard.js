import { ClusterManager, HeartbeatManager } from 'discord-hybrid-sharding';
import config from './dist/config/config.js';

const manager = new ClusterManager('./dist/index.js', {
  totalShards: 'auto',
  shardsPerClusters: 2,
  totalClusters: 'auto',
  respawn: true,
  mode: 'worker',
  token: config.token
});

manager.extend(
  new HeartbeatManager({
    interval: 2000,
    maxMissedHeartbeats: 5
  })
);

manager.on('clusterCreate', (cluster) => {
  console.log(`Launched cluster ${cluster.id}`);
});

manager.spawn();
