import { useState, useCallback } from "react";
import { Upload, FileText, Image, File, X, CheckCircle, AlertCircle } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  status: "uploading" | "success" | "error";
  progress: number;
}

const allowedTypes = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const FileUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return Image;
    if (type === "application/pdf") return FileText;
    return File;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const isValidFileType = (type: string) => allowedTypes.includes(type);

  const simulateUpload = (file: UploadedFile) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id ? { ...f, progress: 100, status: "success" } : f
          )
        );
      } else {
        setFiles((prev) =>
          prev.map((f) => (f.id === file.id ? { ...f, progress } : f))
        );
      }
    }, 200);
  };

  const handleFiles = useCallback((fileList: FileList) => {
    const newFiles: UploadedFile[] = Array.from(fileList).map((file) => ({
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      name: file.name,
      size: file.size,
      type: file.type,
      status: isValidFileType(file.type) ? "uploading" : "error",
      progress: isValidFileType(file.type) ? 0 : 100,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload for valid files
    newFiles.forEach((file) => {
      if (file.status === "uploading") {
        simulateUpload(file);
      }
    });
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAll = () => {
    setFiles([]);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-secondary-foreground md:text-5xl">
              File <span className="text-primary">Upload</span>
            </h1>
            <p className="mt-6 text-lg text-secondary-foreground/80">
              Upload documents, images, and PDFs for authorized use. 
              Supported formats: PDF, JPG, PNG, WEBP, DOC, DOCX.
            </p>
          </div>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            {/* Drop Zone */}
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`relative rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
                isDragging
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <input
                type="file"
                multiple
                accept={allowedTypes.join(",")}
                onChange={handleInputChange}
                className="absolute inset-0 cursor-pointer opacity-0"
              />
              <div className="pointer-events-none">
                <div
                  className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                    isDragging ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <Upload className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-card-foreground">
                  {isDragging ? "Drop files here" : "Drag & drop files here"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  or click to browse from your computer
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Supported: PDF, JPG, PNG, WEBP, DOC, DOCX (Max 10MB)
                </p>
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="mt-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">
                    Uploaded Files ({files.length})
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearAll}>
                    Clear All
                  </Button>
                </div>

                <div className="space-y-3">
                  {files.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <div
                        key={file.id}
                        className="flex items-center gap-4 rounded-lg bg-card p-4 shadow-sm"
                      >
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                            file.status === "error"
                              ? "bg-destructive/10 text-destructive"
                              : "bg-primary/10 text-primary"
                          }`}
                        >
                          <FileIcon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate font-medium text-card-foreground">
                            {file.name}
                          </p>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              {formatFileSize(file.size)}
                            </span>
                            {file.status === "error" && (
                              <span className="text-xs text-destructive">
                                Unsupported file type
                              </span>
                            )}
                          </div>
                          {file.status === "uploading" && (
                            <Progress value={file.progress} className="mt-2 h-1" />
                          )}
                        </div>

                        <div className="flex shrink-0 items-center gap-2">
                          {file.status === "success" && (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          )}
                          {file.status === "error" && (
                            <AlertCircle className="h-5 w-5 text-destructive" />
                          )}
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => removeFile(file.id)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Admin Notice */}
            <div className="mt-8 rounded-lg bg-muted p-4 text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This is a UI-only upload interface. 
                Connect to your backend to enable actual file uploads and storage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FileUpload;
