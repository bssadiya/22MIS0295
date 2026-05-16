# Stage 1

## REST API Design

### Get Notifications

Endpoint:
GET /notifications

Response:

```json
[
  {
    "id": "1",
    "type": "Placement",
    "message": "Amazon hiring",
    "timestamp": "2026-04-22T17:49:42"
  }
]
```

### Mark Notification as Read

Endpoint:
PUT /notifications/:id/read

Response:

```json
{
  "message": "Notification marked as read"
}
```

### Delete Notification

Endpoint:
DELETE /notifications/:id

Response:

```json
{
  "message": "Notification deleted"
}
```

## Real-Time Notification Mechanism

WebSocket or Socket.IO can be used for real-time notifications.

---

# Stage 2

## Database Choice

A relational database like PostgreSQL or MySQL can be used.

## Suggested Schema

### Notifications Table

- id
- studentId
- type
- message
- isRead
- createdAt

## Scaling Considerations

- Add indexing on studentId and createdAt
- Use pagination
- Archive old notifications

---

# Stage 3

## Query Optimization

Problem:
Fetching unread notifications becomes slow with millions of records.

## Solution

Create indexes on:
- studentId
- isRead
- createdAt

Optimized Query:

```sql
SELECT *
FROM notifications
WHERE studentId = 1042
AND isRead = false
ORDER BY createdAt DESC
LIMIT 50;
```

## Why Not Index Every Column

Indexing every column increases:
- storage usage
- insert/update cost
- database overhead

Indexes should only be added on frequently queried columns.

---

# Stage 4

## Performance Improvement

Problem:
Fetching notifications repeatedly overloads the database.

## Solution

Use Redis caching.

## Flow

1. Notifications stored in database
2. Frequently accessed notifications cached in Redis
3. API reads from cache first
4. Cache refreshed periodically

## Tradeoffs

Advantages:
- Faster response
- Reduced DB load

Disadvantages:
- Cache invalidation complexity
- Additional infrastructure cost

---

# Stage 5

## Problems in Current Approach

- Sending notifications sequentially is slow
- Failures stop processing
- No retry mechanism

## Improved Solution

Use asynchronous message queues like RabbitMQ or Kafka.

## Updated Flow

1. Push notification jobs into queue
2. Worker services process jobs
3. Failed jobs retried automatically
4. Email and push notifications handled independently

## Benefits

- Better scalability
- Reliable delivery
- Fault tolerance

---

# Stage 6

## Priority Inbox Design

Priority score can be calculated using:
- notification type
- recency
- importance

Example:
- Placement = 50
- Results = 40
- Events = 20

## Approach

1. Fetch notifications
2. Calculate priority score
3. Sort by score descending
4. Return top 10 notifications

## Data Structure

Priority Queue / Max Heap can be used for efficient sorting.

## Benefits

- Important notifications shown first
- Better user experience
- Faster access to critical updates