from flask import Flask, render_template, Response, jsonify
from emotion_engine import EmotionEngine
import threading
import time

app = Flask(__name__)
engine = EmotionEngine()

def start_engine():
    """Start emotion engine in background."""
    try:
        engine.start()
        print("✅ Emotion engine started.")
    except Exception as e:
        print(f"❌ Engine error: {e}")

# Start engine when app launches
engine_thread = threading.Thread(target=start_engine, daemon=True)
engine_thread.start()
time.sleep(2)  # Give engine time to warm up

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/emotion")
def get_emotion():
    """API endpoint — returns current emotion as JSON."""
    return jsonify(engine.get_state())

@app.route("/api/stream")
def stream():
    """Live webcam stream with emotion overlay."""
    def generate():
        while True:
            frame = engine.get_frame()
            if frame:
                yield (
                    b"--frame\r\n"
                    b"Content-Type: image/jpeg\r\n\r\n"
                    + frame +
                    b"\r\n"
                )
            time.sleep(0.05)
    return Response(
        generate(),
        mimetype="multipart/x-mixed-replace; boundary=frame"
    )

@app.route("/api/history")
def get_history():
    """Return emotion detection history."""
    state = engine.get_state()
    return jsonify({
        "emotion": state["emotion"],
        "scores": state["scores"],
        "confidence": state["confidence"]
    })

if __name__ == "__main__":
    print("\n🚀 AURA — Emotion Adaptive UI")
    print("─" * 40)
    print("Open in browser: http://127.0.0.1:5000")
    print("─" * 40)
    app.run(debug=False, threaded=True)