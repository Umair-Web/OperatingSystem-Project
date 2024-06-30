// src/cscan.js
export function CSCAN(arr, head, disk_size = 200) {
    let seek_count = 0;
    let distance, cur_track;
    let left = [], right = [];
    let seek_sequence = [];
  
    left.push(0);
    right.push(disk_size - 1);
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < head) left.push(arr[i]);
      if (arr[i] > head) right.push(arr[i]);
    }
  
    left.sort((a, b) => a - b);
    right.sort((a, b) => a - b);
  
    for (let i = 0; i < right.length; i++) {
      cur_track = right[i];
      seek_sequence.push(cur_track);
      distance = Math.abs(cur_track - head);
      seek_count += distance;
      head = cur_track;
    }
  
    head = 0;
    seek_count += (disk_size - 1);
  
    for (let i = 0; i < left.length; i++) {
      cur_track = left[i];
      seek_sequence.push(cur_track);
      distance = Math.abs(cur_track - head);
      seek_count += distance;
      head = cur_track;
    }
  
    return {
      seek_count,
      seek_sequence
    };
  }
  